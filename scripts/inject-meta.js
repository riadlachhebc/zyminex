/**
 * inject-meta.js
 * Run after `vite build` to inject per-route OG/Twitter meta tags into
 * static HTML files so social crawlers (which don't run JS) see them.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '../dist')
const BASE_URL = 'https://www.zyminex.pro'

// ─── Route meta definitions ──────────────────────────────────────────────────
const routes = [
  {
    path: '/blog/best-iptv-service-2026',
    title: 'The Best IPTV Service in 2026: Ultimate Cord-Cutting Guide | Zyminex',
    description: 'Discover the best IPTV service in 2026. Learn how to cut the cord, find premium channel lineups, and stream flawlessly in 4K without buffering.',
    image: `${BASE_URL}/images/blog/best_iptv_service.png`,
  },
  {
    path: '/blog/best-iptv-apps-2026',
    title: 'Top 5 Best IPTV Apps for Smart TV & Android in 2026 | Zyminex',
    description: 'Discover the best IPTV apps for Smart TV, Android, and Firestick in 2026. Compare features, UI, and performance of TiviMate, Smarters Pro, IBO Player, and more.',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: '/blog/iptv-firestick-setup-guide',
    title: 'How to Set Up IPTV on Firestick (2026 Guide) | Zyminex',
    description: 'A complete 2026 step-by-step tutorial on how to safely install and set up IPTV on your Amazon Firestick. Discover the best apps and configurations.',
    image: `${BASE_URL}/images/blog/firestick_setup.png`,
  },
  {
    path: '/blog/watch-sports-iptv',
    title: 'Watch Live Sports on IPTV Without Buffering (2026) | Zyminex',
    description: 'Tired of buffering during the big game? Learn how to optimize your IPTV setup for flawless 60FPS live sports streaming and never miss a goal again.',
    image: `${BASE_URL}/images/blog/watch_sports.png`,
  },
  {
    path: '/blog/anti-freeze-iptv-explained',
    title: 'Anti-Freeze IPTV Explained: How to Stop Buffering Forever | Zyminex',
    description: 'What is anti-freeze IPTV technology? Discover how advanced server infrastructure completely eliminates buffering and stuttering.',
    image: `${BASE_URL}/images/blog/anti_freeze_servers.png`,
  },
  {
    path: '/blog/iptv-free-trial-guide',
    title: 'How to Get an IPTV Free Trial in 2026 | Zyminex',
    description: 'Never pay upfront. Learn how to secure an IPTV free trial, what specifically to test, and how to verify 4K quality before committing to a subscription.',
    image: `${BASE_URL}/images/blog/free_trial_ticket.png`,
  },
  {
    path: '/blog/iptv-crackdown-2026',
    title: 'IPTV Crackdowns in 2026: Why Courts are Now Blocking VPNs | Zyminex',
    description: 'ISPs and courts are escalating IPTV crackdowns in 2026. Learn why VPNs are being blocked, how to stay protected, and what this means for cord-cutters.',
    image: `${BASE_URL}/images/blog/iptv_crackdown_2026.png`,
  },
  {
    path: '/blog/iptv-free-trial-checklist-2026',
    title: 'IPTV Free Trial 2026: The Ultimate 24-Hour Testing Checklist | Zyminex',
    description: 'Before you buy an IPTV subscription, use this exact 2026 checklist to test an IPTV free trial. Learn how to verify 4K quality, test anti-freeze servers, and avoid scams.',
    image: `${BASE_URL}/images/blog/iptv_free_trial_checklist.png`,
  },
]

// ─── Read base index.html from dist ──────────────────────────────────────────
const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')

function buildMetaTags({ path: routePath, title, description, image }) {
  const url = `${BASE_URL}${routePath}`
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:site_name" content="Zyminex" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@zyminex" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />`
}

// ─── Inject and write ─────────────────────────────────────────────────────────
for (const route of routes) {
  const metaTags = buildMetaTags(route)

  // Replace the <title> and insert all meta tags before </head>
  let html = baseHtml
    .replace(/<title>.*?<\/title>/, '') // remove default title
    .replace('</head>', `${metaTags}\n  </head>`)

  // Create the folder and write index.html
  const folder = path.join(DIST, route.path)
  fs.mkdirSync(folder, { recursive: true })
  fs.writeFileSync(path.join(folder, 'index.html'), html, 'utf-8')

  console.log(`✅  Injected meta → dist${route.path}/index.html`)
}

console.log('\n🎉  All social meta tags injected successfully!')
