import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const html = p => readFileSync(`dist/${p}`, 'utf8');
test('Echola retains all original content sections in order', () => {
 const page = html('echola/index.html');
 let previous = -1;
 for (const heading of ['Screenshots', 'Features', 'User Reviews', 'FAQ']) {
  const position = page.indexOf(`>${heading}</h2>`);
  assert.ok(position > previous, heading); previous = position;
 }
 assert.ok(page.includes('/assets/screenshots/iphone/1.png'));
 assert.ok(page.includes('100+'));
 assert.ok(page.includes('Your shadowing companion for language learning.'));
});
test('Product navigation and legal pages stay scoped', () => {
 for (const slug of ['echola', 'zigloo']) {
  const page = html(`${slug}/index.html`);
  for (const doc of ['privacy', 'terms']) {
   assert.ok(page.includes(`href="/${slug}/${doc}"`));
   const legal = html(`${slug}/${doc}/index.html`);
   assert.ok(legal.includes(`href="/${slug}/"`));
  }
 }
 const zigloo = html('zigloo/index.html');
 assert.ok(!zigloo.includes('id6757395298'));
 assert.ok(!zigloo.includes('href=""'));
 assert.ok(!zigloo.includes('100+ ratings'));
 assert.ok(!html('zigloo/privacy/index.html').includes('content="noindex"'));
 assert.ok(html('sitemap.xml').includes('/zigloo/privacy/'));
 for (const doc of ['privacy', 'terms']) {
  const legal = html(`zigloo/${doc}/index.html`);
  assert.ok(legal.includes('Effective date: September 8, 2026'));
  assert.ok(!/draft|must be finalized|being verified/i.test(legal));
 }
});

test('shared detail markup and every original component style match the original template', () => {
 const baseline = JSON.parse(readFileSync('tests/fixtures/original-template.json', 'utf8'));
 const source = readFileSync('src/layouts/AppPage.astro', 'utf8');
 const markup = source.replace('{app.sections?.screenshots !== false && <div', '<div').replace('</div>}','</div>').replace('{app.sections?.reviews !== false && <Reviews items={reviews} client:visible />}', '<Reviews items={reviews} client:visible />').replace('{app.sections?.screenshots !== false && <Lightbox images={appData.screenshots} client:load />}', '<Lightbox images={appData.screenshots} client:load />').split('---').slice(2).join('---').replace(' homeHref={homeHref} keywords={siteConfig.keywords} socialLinks={siteConfig.socialLinks}', '').replace(' supportHref={app.documents.support ? `${homeHref}support/` : undefined}', '');
 assert.equal(markup, baseline.page);
 for (const [path, expected] of Object.entries(baseline.files)) {
  const current = readFileSync(path, 'utf8');
  const classes = current.match(/class(?:Name)?=(?:"[^"]*"|\{`[^`]*`\})/g) || [];
  if (path === 'src/components/footer/FooterLegal.tsx') {
   assert.deepEqual(classes.slice(0, expected.classes.length), expected.classes);
   assert.ok(classes.slice(expected.classes.length).every(value => expected.classes.includes(value)));
  } else assert.deepEqual(classes, expected.classes, `${path}: classes changed`);
  assert.deepEqual(current.match(/<style[\s\S]*?<\/style>/g) || [], expected.styles, `${path}: styles changed`);
 }
});

test('root is the product directory, not an app detail page', () => {
 const page = html('index.html');
 assert.ok(page.includes('<title>TFTT Apps</title>'));
 for (const slug of ['echola', 'zigloo']) assert.ok(page.includes(`href="/${slug}/"`));
 assert.ok(!page.includes('>Screenshots</h2>'));
 assert.ok(!page.includes('>User Reviews</h2>'));
 assert.ok(!page.includes('id6757395298'));
});

test('Zigloo presents verified beta features without empty showcase sections', () => {
 const page = html('zigloo/index.html');
 for (const text of ['currently in private beta', 'Videos and learning records are not uploaded by sync', 'Understand the whole sentence']) assert.ok(page.includes(text));
 for (const text of ['>User Reviews</h2>', '>Screenshots</h2>', 'Modern Mobile App Landing Page Template']) assert.ok(!page.includes(text));
});

test('support is reachable from Zigloo details and its legal pages', () => {
 for (const page of ['zigloo/index.html', 'zigloo/privacy/index.html', 'zigloo/terms/index.html']) assert.ok(html(page).includes('href="/zigloo/support/"'));
 assert.ok(!html('echola/index.html').includes('href="/zigloo/support/"'));
});
