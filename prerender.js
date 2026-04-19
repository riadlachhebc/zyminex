import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogPosts } from './src/data/blogPosts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.zyminex.pro';

// ─── Blog-specific meta map (absolute image URLs for social crawlers) ─────────
const blogMeta = {
  '/blog/best-latino-iptv-usa-2026': {
    title: 'Best Latino IPTV USA 2026: Top Spanish Channels & Live Sports',
    description: 'Discover the best Latino IPTV in the USA for 2026. Stream Liga MX, Univision, and Telemundo in 4K with no buffering. See our top-rated bilingual services.',
    image: `${BASE_URL}/images/blog/best_latino_iptv_hero_2026.png`,
  },
  '/blog/best-iptv-service-2026': {
    title: 'The Best IPTV Service in 2026: Ultimate Cord-Cutting Guide | Zyminex',
    description: 'Discover the best IPTV service in 2026. Learn how to cut the cord, find premium channel lineups, and stream flawlessly in 4K without buffering.',
    image: `${BASE_URL}/images/blog/best_iptv_service.png`,
  },
  '/blog/best-iptv-apps-2026': {
    title: 'Top 5 Best IPTV Apps for Smart TV & Android in 2026 | Zyminex',
    description: 'Discover the best IPTV apps for Smart TV, Android, and Firestick in 2026. Compare TiviMate, Smarters Pro, IBO Player, and more.',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80',
  },
  '/blog/iptv-firestick-setup-guide': {
    title: 'How to Set Up IPTV on Firestick (2026 Ultimate Guide) | Zyminex',
    description: 'A complete 2026 step-by-step tutorial on how to safely install and set up IPTV on your Amazon Firestick.',
    image: `${BASE_URL}/images/blog/firestick_setup.png`,
  },
  '/blog/watch-sports-iptv': {
    title: 'Watch Live Sports on IPTV Without Buffering (2026) | Zyminex',
    description: 'Tired of buffering during the big game? Learn how to optimize your IPTV setup for flawless 60FPS live sports streaming.',
    image: `${BASE_URL}/images/blog/watch_sports.png`,
  },
  '/blog/anti-freeze-iptv-explained': {
    title: 'Anti-Freeze IPTV Technology Explained: Why Servers Matter | Zyminex',
    description: 'What is anti-freeze IPTV technology? Discover how advanced server infrastructure completely eliminates buffering.',
    image: `${BASE_URL}/images/blog/anti_freeze_servers.png`,
  },
  '/blog/iptv-free-trial-guide': {
    title: 'IPTV Free Trial Guide: How to Test Services Safely in 2026 | Zyminex',
    description: 'Never pay upfront. Learn how to secure an IPTV free trial, what to test, and how to verify 4K quality before committing.',
    image: `${BASE_URL}/images/blog/free_trial_ticket.png`,
  },
  '/blog/iptv-crackdown-2026': {
    title: 'IPTV Crackdowns in 2026: Why Courts are Now Blocking VPNs | Zyminex',
    description: 'ISPs and courts are escalating IPTV crackdowns in 2026. Learn why VPNs are being blocked and how to stay protected.',
    image: `${BASE_URL}/images/blog/iptv_crackdown_2026.png`,
  },
  '/blog/iptv-free-trial-checklist-2026': {
    title: 'IPTV Free Trial 2026: The Ultimate 24-Hour Testing Checklist | Zyminex',
    description: 'Use this exact 2026 checklist to test IPTV free trials. Verify 4K quality, anti-freeze servers, and avoid scams.',
    image: `${BASE_URL}/images/blog/iptv_free_trial_checklist.png`,
  },
  '/blog/iptv-vs-cable-cord-cutting-2026': {
    title: 'IPTV vs. Traditional Cable: Why Millions are Cord-Cutting This Year | Zyminex',
    description: 'Discover why millions are ditching traditional cable TV packages for affordable IPTV streaming in 2026. Compare the costs, flexibility, and equipment needed to cut the cord.',
    image: `${BASE_URL}/images/blog/iptv_vs_cable_cord_cutting.png`,
  },
  '/tivimate-vs-iptv-smarters-pro-best-player-2026': {
    title: 'TiviMate vs. IPTV Smarters Pro: Best IPTV Player in 2026? | Zyminex',
    description: 'Confused about which app to use? Read our ultimate 2026 comparison of TiviMate vs. IPTV Smarters Pro.',
    image: 'https://i.ibb.co/3YYDYxKz/TiviMate-vs-IPTV-202604130102.jpg',
  },
};

// ─── Routes ───────────────────────────────────────────────────────────────────
const allRoutes = [
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
  '/refund',
  ...blogPosts.map(post => post.path),
];

function buildHeadTags(routePath, meta) {
  const url = `${BASE_URL}${routePath}`;
  return `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:site_name" content="Zyminex" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${meta.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@zyminex" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${meta.image}" />`;
}

async function prerender() {
  const root = process.cwd();

  const templatePath = path.resolve(root, 'dist/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}. Run vite build first.`);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Try to load SSR render function (for non-blog routes)
  let render = null;
  const serverEntryPath = path.resolve(root, 'dist-server/entry-server.js');
  if (fs.existsSync(serverEntryPath)) {
    const mod = await import(`file://${serverEntryPath}`);
    render = mod.default || mod.render;
  }

  for (const url of allRoutes) {
    console.log(`Prerendering: ${url}`);

    const outputPath = path.resolve(
      root,
      'dist',
      url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`
    );
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const blogData = blogMeta[url];

    if (blogData) {
      // ── Blog articles: inject meta directly, no SSR body rendering ──────────
      // Remove the default <title> tag and inject full social head tags
      let html = template
        .replace(/<title>.*?<\/title>/, '')
        .replace('</head>', `${buildHeadTags(url, blogData)}\n  </head>`);
      fs.writeFileSync(outputPath, html);
    } else if (render) {
      // ── Other pages: attempt SSR ──────────────────────────────────────────
      try {
        const helmetContext = {};
        const appHtml = await render(url, helmetContext);
        const { helmet } = helmetContext;

        let html = template
          .replace('<!--app-html-->', appHtml || '')
          .replace('<div id="root"></div>', `<div id="root">${appHtml || ''}</div>`)
          .replace(/<title>.*?<\/title>/, helmet ? helmet.title.toString() : '')
          .replace('</head>', `${helmet ? helmet.meta.toString() : ''}${helmet ? helmet.link.toString() : ''}${helmet ? helmet.script.toString() : ''}</head>`);

        fs.writeFileSync(outputPath, html);
      } catch {
        // fallback: write the plain template
        fs.writeFileSync(outputPath, template);
      }
    } else {
      fs.writeFileSync(outputPath, template);
    }
  }

  console.log('\n✅  Finished pre-rendering all routes!');
}

prerender().catch(e => {
  console.error('Prerendering failed:', e);
  process.exit(1);
});
