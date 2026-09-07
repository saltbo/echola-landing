import { apps } from '../lib/apps';
export function GET() {
 const paths = ['/', ...apps.flatMap(app => [`/${app.slug}/`, ...Object.entries(app.documents).filter(([, doc]) => !doc.draft).map(([name]) => `/${app.slug}/${name}/`)])];
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>https://apps.tftt.cc${path}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
