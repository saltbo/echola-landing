## Multi-app configuration

The original detail template is shared by `/echola/` and `/zigloo/`. The root
shows a product directory generated from the same app configs. Echola keeps its original data,
screenshots, reviews, styling and section order. No replacement design is used.

Add `src/apps/<slug>.ts` exporting an `AppDefinition` (copy `zigloo.ts`). The
filename must match the slug. Routes, documents and the sitemap are discovered
automatically; put any new artwork in `public/assets/<slug>/`. Configure screenshots
for both supported device types, features, reviews, FAQs, store links and documents.
An empty store URL means that platform is not available yet. Echola's existing
placeholder assets and content are deliberately preserved pending a separate
content update. Zigloo has no public download, screenshots or reviews configured;
its legal/support documents are published and included in the sitemap.
Optional `sections` flags hide unavailable screenshots or reviews without changing
the template. Echola retains both sections. `title` and `pageDescription` may
customize each product’s search metadata.

Run `npm run check:multiapp` for the build, route checks and original-template
regression checks. The canonical domain is `apps.tftt.cc`. Cloudflare Pages project
`echola-landing` builds `main` with `npm run build` and serves `dist/`.
Run the checks before pushing to `main`, which triggers production deployment. The original template documentation follows below.

<div align="center">
  <img src="public/assets/favicon.png" alt="Mobile Landing" width="120" height="120" style="border-radius: 24px;">

  <h1>🚀 Mobile App Landing Page</h1>

  <p><strong>Modern, fast, and customizable landing page template for mobile apps</strong></p>

  <p>Built with <strong>Astro</strong> · <strong>React</strong> · <strong>TypeScript</strong> · <strong>Tailwind CSS</strong></p>

  <p>
    <a href="#-quick-start">Quick Start</a> ·
    <a href="#-customization">Customization</a> ·
    <a href="https://landing.bohd4n.dev">Demo</a>
  </p>
</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📱 **Responsive Design** | Perfect on mobile, tablet, and desktop |
| 🖼️ **Screenshot Gallery** | iPhone/iPad preview with lightbox |
| 🎨 **Modern UI** | Clean design with Framer Motion animations |
| 🌗 **Theme Switcher** | Light/Dark/System modes with persistence |
| ⚡ **Fast Performance** | Astro for optimal loading speed |
| 🔍 **SEO Ready** | Meta tags and semantic HTML |
| 📊 **Review System** | Star ratings and testimonials |
| 🍎 **App Store Integration** | Auto-fetch data from Apple App Store |

---

## 🆕 Recent Updates

- ✅ **App Store Data Fetching** - Automatically pull app info, ratings, version from App Store
- ✅ **Improved Mobile UI** - Larger floating navbar on mobile devices
- ✅ **Enhanced Download Buttons** - Responsive layout with color gradients
- ✅ **Better Typography** - Improved font sizes and spacing for Privacy/Terms pages
- ✅ **Desktop Layout** - Optimized AppHero layout with logo + text left, buttons right

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/bohd4nx/mobile-landing.git
cd mobile-landing

# Install dependencies
npm install

# Start dev server
npm run dev
```

Your site runs at `http://localhost:4321` 🎉

### Build & Deploy

```bash
# Build for production
npm run build

# Preview build
npm run preview
```

---

## 🎨 Customization

<details>
<summary><strong>📁 Complete Configuration Guide</strong> (click to expand)</summary>

### Quick Reference

All configuration is centralized in one main file with component-specific data files.

| Component | Location | What to edit |
|-----------|----------|--------------|
| **App Info** | [src/data.ts](src/data.ts) | App info, store links, keywords, auto-fetch settings |
| **Screenshots** | [components/screenshots/data.ts](src/components/screenshots/data.ts) | iPhone and iPad image paths |
| **Reviews** | [components/reviews/data.ts](src/components/reviews/data.ts) | Customer testimonials and ratings |
| **Features** | [components/features/data.ts](src/components/features/data.ts) | Feature titles, descriptions, icons |
| **FAQ** | [components/faq/data.ts](src/components/faq/data.ts) | Questions and answers |
| **Social Links** | [components/social/data.ts](src/components/social/data.ts) | Social media profile URLs |

### How to Edit

1. **Navigate to the file** you want to modify
2. **Open the file** in your editor
3. **Edit the values** (all have clear comments)
4. **Save** the file
5. Done! Changes appear on the site automatically

### File Structure

**Main Configuration:**
- `src/data.ts` - All app settings (name, description, logo, keywords, store links, rating, social links, auto-fetch config)

**Component Data:**
- `components/screenshots/data.ts` - Screenshot gallery paths
- `components/reviews/data.ts` - User testimonials
- `components/features/data.ts` - Feature cards
- `components/faq/data.ts` - FAQ items
- `components/social/data.ts` - Social media links

### App Store Auto-Fetch

Enable automatic data fetching from Apple App Store in [`src/data.ts`](src/data.ts):

```typescript
export const storeDataConfig = {
  fetchRealData: true,          // Enable auto-fetch
  appStoreAppId: 686449807,     // Your numeric App Store ID
}
```

**What gets auto-fetched:**
- ✅ App name, description, logo
- ✅ Rating score and count
- ✅ Age rating, version, minimum OS
- ✅ Last update date
- ✅ Screenshots (iPhone and iPad)
- ✅ App Store link

**How to find your App Store ID:**
1. Open iTunes App Store
2. Search your app
3. Copy number from URL (e.g., `https://apps.apple.com/app/id686449807` → use `686449807`)

### Tips

**Adding Icons**
- Features and social links use [React Icons](https://react-icons.github.io/react-icons/)
- Import from `react-icons/fi` (Feather) or `react-icons/ri` (Remix)
- Add new icons to [`utils/getIcon.ts`](src/utils/getIcon.ts)

**Screenshots**
- **iPhone**: 1170x2532px (9:19.5 aspect ratio)
- **iPad**: 2048x2732px (3:4 aspect ratio)
- Place images in `/public/assets/screenshots/`
- Update paths in `components/screenshots/data.ts`

**Reviews**
- Mix ratings (4-5 stars) for authenticity
- Keep text 2-3 sentences
- Use real or realistic names

**Features**
- Keep titles short (2-4 words)
- Descriptions should be 1-2 sentences
- Choose icons that represent the feature

### Common Tasks

| Task | File to Edit |
|------|-------------|data.ts`](src/data.ts) |
| Update version/rating | [`src/data.ts`](src/data.ts) |
| Change store links | [`src/data.ts`](src/data.ts) |
| Update SEO keywords | [`src/data.ts`](src/data.ts) |
| Enable store auto-fetch | [`src/data.ts`](src/data.ts) |
| Add/remove features | [`components/features/data.ts`](src/components/features/data.ts) |
| Replace screenshots | [`components/screenshots/data.ts`](src/components/screenshots/data.ts) |
| Modify reviews | [`components/reviews/data.ts`](src/components/reviews/data.ts) |
| Update FAQ | [`components/faq/data.ts`](src/components/faq/data.ts) |
| Add social media | [`components/social/data.ts`](src/components/social/data.ts) |

**Pro tip**: Use TypeScript autocomplete (Ctrl+Space) to see available options!

</details>

---

## 📄 Legal Pages

Edit Markdown files for Privacy & Terms:

- **Privacy Policy:** `src/pages/privacy/privacy.md`
- **Terms of Service:** `src/pages/terms/terms.md`

Both support full Markdown and auto-styling.

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file

---

<div align="center">
  <p>Made with ❤️ by <a href="https://t.me/bohd4nx">Bohdan</a></p>
  <p>⭐ Star this repo if you find it useful!</p>
</div>