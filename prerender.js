import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render
const routesToPrerender = [
  '/',
  '/buy-iptv-subscription',
  '/faq',
  '/contact',
  '/iptv-free-trial',
  '/setup-guides',
  '/iptv-for-firestick',
  '/iptv-reseller-panel',
  '/imax-iptv-alternative',
  '/tutorials/how-to-setup-tivimate',
  '/tutorials/how-to-setup-smarters-pro',
  '/tutorials/how-to-setup-ibo-player',
  '/tutorials/how-to-set-up-downloader',
  '/channel-list',
  '/blog',
  '/terms',
  '/privacy',
  '/refund'
];

async function prerender() {
  const root = process.cwd();
  
  try {
    const templatePath = path.resolve(root, 'dist/index.html');
    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template not found at ${templatePath}. Build the client first (vite build).`);
    }
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Import the built server entry (Vite build --ssr)
    const serverEntryPath = path.resolve(root, 'dist-server/entry-server.js');
    if (!fs.existsSync(serverEntryPath)) {
      throw new Error(`Server entry not found at ${serverEntryPath}. Build the server first (vite build --ssr).`);
    }
    
    // Using a dynamic import for the bundled JS
    const mod = await import(`file://${serverEntryPath}`);
    const render = mod.default || mod.render;

    if (typeof render !== 'function') {
      throw new Error('Render function not found in built server entry.');
    }

    for (const url of routesToPrerender) {
      console.log(`Prerendering: ${url}`);
      
      const helmetContext = {};
      const appHtml = await render(url, helmetContext);
      const { helmet } = helmetContext;

      // Replace placeholders in the template
      let html = template
        .replace('<!--app-html-->', appHtml || '')
        .replace('<div id="root"></div>', `<div id="root">${appHtml || ''}</div>`)
        .replace(/<title>.*?<\/title>/, helmet ? helmet.title.toString() : '')
        .replace('</head>', `${helmet ? helmet.meta.toString() : ''}${helmet ? helmet.link.toString() : ''}${helmet ? helmet.script.toString() : ''}</head>`);

      // Determine output path
      const outputPath = path.resolve(
        root,
        'dist',
        url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`
      );

      // Create directory if it doesn't exist
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(outputPath, html);
    }

    console.log('Finished pre-rendering all routes!');
  } catch (e) {
    console.error('Prerendering failed:', e);
    process.exit(1);
  }
}

prerender();
