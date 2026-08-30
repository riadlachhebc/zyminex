# Zyminex IPTV Project Overview

This project is a React-based web application for **Zyminex**, an IPTV service provider. It features a custom Static Site Generation (SSG) setup using Vite for high performance and SEO optimization.

## Technology Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Routing:** React Router DOM 6
- **SEO:** React Helmet Async
- **Prerendering:** Custom SSG with `prerender.js` and `vite-plugin-ssr` patterns
- **Deployment:** Optimized for Vercel (see `vercel.json`)

## Project Structure

- `src/`: Main source code.
    - `App.jsx`: Main application component and route definitions.
    - `main.jsx`: Client-side entry point.
    - `entry-server.jsx`: SSR/SSG entry point.
    - `components/`: Reusable UI components (Navbar, Footer, etc.).
    - `pages/`: Page components for various routes.
    - `pages/blog/`: Individual blog post components.
    - `data/`: Static data files, including `blogPosts.js`.
    - `assets/`: Image assets and styles.
- `public/`: Static assets (favicon, logos, blog/tutorial images).
- `scripts/`: Utility scripts (e.g., `inject-meta.js`).
- `prerender.js`: The script responsible for generating static HTML files for all routes.
- `vite.config.js`: Configuration for client-side build.
- `vite.config.ssr.js`: Configuration for server-side build used by the prerenderer.

## Building and Running

### Development
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Production Build & SSG
The build process is a three-step sequence:
1. Build the client-side assets.
2. Build the server-side entry point.
3. Run the prerender script to generate static HTML.

```bash
npm run build
```
This command executes:
- `vite build` (client)
- `vite build --config vite.config.ssr.js` (server)
- `node prerender.js` (SSG)

Output is generated in the `dist/` directory.

## Development Conventions

- **Pages & Routing:** New pages should be added to `src/pages/` and registered in `src/App.jsx`.
- **Blog Posts:** 
    - Create a new component in `src/pages/blog/`.
    - **CRITICAL STRUCTURE:** All new blog articles MUST perfectly match the structure and styling found in `src/pages/blog/setup-firestick-for-sports-season-2026-guide.jsx` and `src/pages/blog/StreamCollegeFootballNoCable.jsx`. This includes:
        - Consistent Typography/Classes: Use `body-md`, `headline-lg`, `display-md` instead of bare HTML tags.
        - Header Layout: Include category label, read time, and the specific hero image styling (`aspectRatio: '16/9'`, `borderRadius: 'var(--radius-xl)'`, `boxShadow`).
        - Middle CTA Box: A high-converting gradient CTA box must be embedded in the middle of the article.
        - Footer Elements: Append the standardized Author Box, bottom gradient CTA Card, and "Related Articles" grid at the end of every post.
        - Tables: Use alternating row background colors (`var(--surface-container-low)`).
        - Interlinks: Internal `<Link>` tags must use `style={{ color: 'var(--primary)' }}`.
        - FAQ Section: Wrap the FAQ in a `var(--surface-container-low)` background box.
    - Add the metadata to `src/data/blogPosts.js`.
    - **SEO:** Important meta tags for blog posts are managed in `prerender.js` within the `blogMeta` object for social sharing optimization.
- **Styling:** Use CSS or inline styles as per the current patterns in `src/index.css` and component-level styles.
- **Lazy Loading:** Use `React.lazy` for page components in `App.jsx` to optimize bundle size.

## SEO and Meta Tags
The project uses `react-helmet-async` for runtime meta management and a custom injection logic in `prerender.js` for static builds. When adding new routes, ensure they are added to the `allRoutes` array in `prerender.js` to be included in the SSG process.
