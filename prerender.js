import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogPosts } from './src/data/blogPosts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.zyminex.pro';

// ─── Blog-specific meta map (absolute image URLs for social crawlers) ─────────
const blogMeta = {
  '/blog/fix-thursday-night-football-lag-2026': {
    title: 'Fix Thursday Night Football Lag 2026: 0-Delay NFL Streams | Zyminex',
    description: 'Tired of Amazon Prime NFL buffering and neighbors cheering before the play? Learn how to fix Thursday Night Football lag in 2026 with 0-delay streaming.',
    image: `${BASE_URL}/images/blog/fix-thursday-night-football-lag-2026-hero.webp`,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Fix Thursday Night Football Lag 2026: The 0-Delay Solution for NFL Fans",
        "description": "Tired of Amazon Prime NFL buffering and neighbors cheering before the play? Learn how to fix Thursday Night Football lag in 2026 with 0-delay streaming.",
        "image": `${BASE_URL}/images/blog/fix-thursday-night-football-lag-2026-hero.webp`,
        "datePublished": "2026-09-23",
        "dateModified": "2026-09-23",
        "author": { "@type": "Organization", "name": "Zyminex Editorial Team", "url": "https://www.zyminex.pro" },
        "publisher": { "@type": "Organization", "name": "Zyminex", "logo": { "@type": "ImageObject", "url": "https://www.zyminex.pro/logo.png" } }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is my Thursday Night Football buffering on Amazon Prime?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Thursday Night Football buffering on Amazon Prime is typically caused by edge-server congestion and severe traffic spikes across content delivery networks (CDNs). Even viewers with gigabit fiber experience buffering because Amazon's live transcoders struggle to distribute millions of concurrent 1080p HDR feeds simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "How do I fix lag on Amazon Prime live sports?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can mitigate local stutter by hardwiring your device via Ethernet, disabling Smart TV motion smoothing settings, and clearing your streaming app cache. However, to eliminate the inherent 45-second broadcast delay and server-side freeze, switching to a dedicated low-latency live TV IPTV provider like Zyminex is the only true fix."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a way to watch NFL games with less delay?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Traditional big-tech platforms use chunk-based HTTP live streaming that forces a 30 to 60-second latency buffer. By utilizing optimized low-latency live TV protocols and anti-freeze IPTV servers with direct broadcast transport streams, you can cut the broadcast delay down to under 5 seconds and watch in true real-time."
            }
          }
        ]
      }
    ],
  },
  '/blog/tivimate-multi-screen-sports-setup': {
    title: 'TiviMate Multi-Screen Sports Setup: 4-Way CFB Guide | Zyminex',
    description: 'Learn how to set up TiviMate multi-screen for College Football. Discover why you need a 4-connection IPTV package to avoid bans and buffering.',
    image: `${BASE_URL}/images/blog/tivimate-multi-screen-sports-setup-hero.webp`,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Ultimate TiviMate Multi-Screen Sports Setup for College Football",
        "description": "Learn how to set up TiviMate multi-screen for College Football. Discover why you need a 4-connection IPTV package to avoid bans and buffering.",
        "image": `${BASE_URL}/images/blog/tivimate-multi-screen-sports-setup-hero.webp`,
        "datePublished": "2026-09-08",
        "dateModified": "2026-09-08",
        "author": { "@type": "Organization", "name": "Zyminex Editorial Team", "url": "https://www.zyminex.pro" },
        "publisher": { "@type": "Organization", "name": "Zyminex", "logo": { "@type": "ImageObject", "url": "https://www.zyminex.pro/logo.png" } }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How many connections do I need for TiviMate Multi-view?", "acceptedAnswer": { "@type": "Answer", "text": "You need one connection per screen. For the popular 2x2 grid layout, you need exactly 4 simultaneous connections from your IPTV provider. Zyminex includes 4 connections on all plans." } },
          { "@type": "Question", "name": "Why is TiviMate Multi-view buffering or crashing?", "acceptedAnswer": { "@type": "Answer", "text": "Two common causes: insufficient hardware RAM (need 2GB+ for 4 screens) and your IPTV provider throttling or not supporting enough simultaneous connections. Upgrade to a device like the Nvidia Shield Pro and ensure your provider supports 4 connections." } },
          { "@type": "Question", "name": "How do I switch audio in TiviMate Multi-screen?", "acceptedAnswer": { "@type": "Answer", "text": "TiviMate uses 'Hot Audio Switching.' Simply move your D-Pad to focus on a different screen cell, and the audio switches in under 50 milliseconds with no delay or interruption." } }
        ]
      }
    ],
  },
  '/blog/cheap-nfl-sunday-ticket-alternative': {
    title: 'Cheap NFL Sunday Ticket Alternative: Stream For Less | Zyminex',
    description: 'Looking for a cheap NFL Sunday Ticket alternative? Discover how to bypass the $480 YouTube fee and stream out-of-market games, RedZone & UFC for less.',
    image: `${BASE_URL}/images/blog/cheap-nfl-sunday-ticket-alternative-hero.webp`,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "The Best Cheap NFL Sunday Ticket Alternative for 2026",
        "description": "Looking for a cheap NFL Sunday Ticket alternative? Discover how to bypass the $480 YouTube fee and stream out-of-market games, RedZone & UFC for less.",
        "image": `${BASE_URL}/images/blog/cheap-nfl-sunday-ticket-alternative-hero.webp`,
        "datePublished": "2026-09-08",
        "dateModified": "2026-09-08",
        "author": { "@type": "Organization", "name": "Zyminex Editorial Team", "url": "https://www.zyminex.pro" },
        "publisher": { "@type": "Organization", "name": "Zyminex", "logo": { "@type": "ImageObject", "url": "https://www.zyminex.pro/logo.png" } }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How can I stream NFL out-of-market games free or cheap?", "acceptedAnswer": { "@type": "Answer", "text": "The most effective way to stream NFL out-of-market games cheaply is by using a premium IPTV service like Zyminex, which includes all regional and national broadcasts, plus NFL RedZone, for a fraction of the cost of traditional satellite or cable packages." } },
          { "@type": "Question", "name": "Is there an NFL RedZone streaming bypass?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, by subscribing to a comprehensive IPTV provider, you get the NFL RedZone streaming bypass built-in. It removes the need for the expensive $42 YouTube add-on by including the channel in the standard sports package alongside your regular games." } },
          { "@type": "Question", "name": "What is the best US sports IPTV for 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Zyminex is widely considered the best US sports IPTV for 2026 due to its unthrottled 4K 60fps streams, anti-freeze technology, and comprehensive inclusion of all major sports leagues (NFL, NBA, MLB, NHL) and UFC PPV events without blackouts." } }
        ]
      }
    ],
  },
  '/blog/stream-box-office-ppv-cheap-uk': {
    title: 'Stream Box Office PPV Cheap: Skip the £25 Sky Price Tag',
    description: 'Looking to stream Box Office PPV free or cheap? Don\'t risk buffering during the knockout. Discover the best reliable 4K alternative to Sky Box Office today.',
    image: `${BASE_URL}/images/blog/stream-box-office-ppv-cheap-hero.webp`,
  },
  '/blog/stream-college-football-no-cable': {
    title: 'Stream College Football No Cable: Unlock SEC & Big Ten',
    description: 'Ready for kickoff? Learn how to stream college football with no cable. Unlock SEC, Big Ten, and ACC networks hassle-free. Discover the ultimate TV alternative!',
    image: `${BASE_URL}/images/blog/stream-college-football-no-cable-hero.webp`,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Stream College Football No Cable: Unlock SEC, Big Ten, and ACC Networks",
        "description": "Ready for kickoff? Learn how to stream college football with no cable. Unlock SEC, Big Ten, and ACC networks hassle-free. Discover the ultimate TV alternative!",
        "image": `${BASE_URL}/images/blog/stream-college-football-no-cable-hero.webp`,
        "datePublished": "2026-08-31",
        "dateModified": "2026-08-31",
        "author": { "@type": "Organization", "name": "Zyminex Editorial Team", "url": "https://www.zyminex.pro" },
        "publisher": { "@type": "Organization", "name": "Zyminex", "logo": { "@type": "ImageObject", "url": "https://www.zyminex.pro/logo.png" } }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Can I watch every college football game without a traditional cable subscription?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. By using advanced live TV streaming services or premium IPTV solutions, you can access all major networks including ESPN, SEC Network, Big Ten Network, and Fox without a standard cable package." } },
          { "@type": "Question", "name": "How can I bypass local blackouts and regional restrictions for college sports?", "acceptedAnswer": { "@type": "Answer", "text": "Regional restrictions usually apply based on your IP address or provider's location policies. A comprehensive USA IPTV service often bypasses these geo-blocks by providing direct feeds to regional sports networks, ensuring you don't miss out due to blackout rules." } },
          { "@type": "Question", "name": "What is the most cost-effective way to get all the major college sports networks?", "acceptedAnswer": { "@type": "Answer", "text": "The most cost-effective method is switching to a reliable USA IPTV provider that bundles all national and regional sports networks for a fraction of the cost of standard cable TV or even mainstream streaming bundles like YouTube TV." } }
        ]
      }
    ],
  },
  '/blog/setup-firestick-for-sports-season-2026-guide': {
    title: 'Setup Firestick for Sports Season 2026/27 in Under 3 Mins | Zyminex',
    description: 'Get your Firestick ready for the 2026/27 sports season kickoff! Clear cache, install TiviMate, and activate high-speed IPTV M3U streams in 3 mins.',
    image: `${BASE_URL}/images/blog/setup-firestick-for-sports-season-hero.webp`,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Setup Firestick for Sports Season 2026/27 in Under 3 Minutes",
        "description": "Get your Firestick ready for the 2026/27 sports season kickoff! Clear cache, install TiviMate, and activate high-speed IPTV M3U streams in 3 mins.",
        "image": `${BASE_URL}/images/blog/setup-firestick-for-sports-season-hero.webp`,
        "datePublished": "2026-08-10",
        "dateModified": "2026-08-10",
        "author": { "@type": "Organization", "name": "Zyminex Tech Team", "url": "https://www.zyminex.pro" },
        "publisher": { "@type": "Organization", "name": "Zyminex", "logo": { "@type": "ImageObject", "url": "https://www.zyminex.pro/logo.png" } }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Why won't my Firestick install IPTV apps from Downloader?", "acceptedAnswer": { "@type": "Answer", "text": "The most common cause is that Developer Options have not been unlocked or 'Install Unknown Apps' has not been enabled for the Downloader app. On Fire OS 2026, navigate to Settings > My Fire TV > About, then click the device name 7 times to reveal Developer Options. Next, go to Settings > My Fire TV > Developer Options > Install Unknown Apps and toggle ON for Downloader. If Downloader still won't install APKs, try clearing Downloader's own cache, then restarting your Firestick." } },
          { "@type": "Question", "name": "How do I stop my IPTV sports stream from buffering on Firestick?", "acceptedAnswer": { "@type": "Answer", "text": "Start by clearing cached data from all streaming apps via Settings > Applications > Manage Installed Applications, then restart the device. Use a wired Ethernet adapter instead of Wi-Fi for stable bandwidth. In TiviMate, switch the video decoder to Hardware and set the buffer size to Medium (3–5 seconds). If buffering persists during peak events, enable a VPN to bypass ISP throttling—your ISP may be deliberately slowing IPTV traffic during major matchdays." } },
          { "@type": "Question", "name": "Can I use an M3U playlist link on TiviMate for live 4K sports?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, TiviMate fully supports both M3U playlist URLs and Xtream Codes login credentials. Open TiviMate, go to Settings > Playlists > Add Playlist, select M3U Playlist, and paste your provider's M3U URL. For 4K sports playback, ensure your Firestick model supports HEVC/H.265 decoding (Fire TV Stick 4K or 4K Max) and that your provider offers dedicated 4K sports channels. Zyminex includes 4K 60fps sports feeds in all subscription plans." } }
        ]
      }
    ],
  },
  '/blog/iptv-catch-up-sports-2026-guide': {
    title: 'IPTV Catch Up Sports 2026: Watch Missed Matches & 4K Highlights | Zyminex',
    description: 'Missed early-season football matches while traveling? Discover how 48-hour IPTV catch up sports, 4K replays, and VOD docs let you stream top games anywhere.',
    image: `${BASE_URL}/images/blog/iptv-catch-up-sports-2026-hero.webp`,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "IPTV Catch Up Sports 2026: How to Watch Missed Football Matches & 4K Highlights",
        "description": "Missed early-season football matches while traveling? Discover how 48-hour IPTV catch up sports, 4K replays, and VOD docs let you stream top games anywhere.",
        "image": `${BASE_URL}/images/blog/iptv-catch-up-sports-2026-hero.webp`,
        "datePublished": "2026-08-10",
        "dateModified": "2026-08-10",
        "author": { "@type": "Organization", "name": "Zyminex Editorial Team", "url": "https://www.zyminex.pro" },
        "publisher": { "@type": "Organization", "name": "Zyminex", "logo": { "@type": "ImageObject", "url": "https://www.zyminex.pro/logo.png" } }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How does 48-hour IPTV catch up work for live sports?", "acceptedAnswer": { "@type": "Answer", "text": "Server-side 48-hour IPTV catch-up records every broadcast on the provider's CDN infrastructure. When a live match finishes, the full recording is stored on cloud servers for 48 hours. You open your EPG, navigate to the finished programme, and press Play." } },
          { "@type": "Question", "name": "Why are some missed matches missing from the EPG catch-up list?", "acceptedAnswer": { "@type": "Answer", "text": "Not all channels have catch-up enabled. Licensing restrictions may prevent server-side recording. Events aired more than 48 hours ago will have expired from the timeshift buffer." } },
          { "@type": "Question", "name": "What IPTV players support 4K sports replays and timeshift EPGs?", "acceptedAnswer": { "@type": "Answer", "text": "TiviMate offers the best timeshift EPG integration. IPTV Smarters Pro supports catch-up on Android, iOS, and Smart TVs. IBO Player Pro works on Samsung and LG Smart TVs. Ensure your player uses the hardware decoder and supports HEVC/H.265." } }
        ]
      }
    ],
  },
  '/blog/iptv-multiple-connections-multi-room-guide': {
    title: 'IPTV Multiple Connections: 2026 Multi-Room Guide | Zyminex',
    description: 'Discover how to get IPTV multiple connections on one sub. Stop account bans and stream on 4 TVs at once. Save €1,200/year with multi-room IPTV!',
    image: `${BASE_URL}/images/blog/iptv_multiple_connections_hero.webp`,
  },
  '/blog/replace-cable-and-netflix-2026': {
    title: 'Replace Cable and Netflix: The Ultimate All-In-One TV Solution 2026',
    description: 'Suffering from subscription fatigue? Learn how to replace cable and Netflix with the ultimate all-in-one streaming app. Bundle live TV and VOD to save big.',
    image: `${BASE_URL}/images/blog/replace-cable-and-netflix-hero-2026.webp`,
  },
  '/blog/watch-champions-league-final-2026-4k': {
    title: 'Watch Champions League Final 2026: Stream in 4K Without Cable',
    description: 'Don\'t miss Arsenal vs PSG! Learn how to watch Champions League Final 2026 in 4K without expensive cable bills. Get buffer-free sports IPTV today!',
    image: `${BASE_URL}/images/blog/champions-league-final-2026-hero.webp`,
  },
  '/blog/fix-broken-iptv-playlist-dead-m3u-links-2026': {
    title: 'Fix Broken IPTV Playlist: 5 Ways to Update Dead M3U Links',
    description: 'IPTV playlist failed to load? Learn how to fix broken IPTV playlists, update dead M3U links, and bypass ISP blocking after the May 2026 server seizures.',
    image: `${BASE_URL}/fix-broken-iptv-playlist-m3u.png`,
  },
  '/blog/bypass-mlb-blackout-iptv-2026-guide': {
    title: 'Bypass MLB Blackout with IPTV: 2026 NBA & MLB Guide',
    description: 'Frustrated by sports blackouts? Learn how to bypass MLB blackouts with IPTV and stream the 2026 NBA Playoffs in 4K without cable. Start your free trial today.',
    image: `${BASE_URL}/bypass-mlb-blackout-iptv-hero.png`,
  },
  '/blog/buy-iptv-with-crypto-safe-2026-guide': {
    title: 'Is it safe to buy IPTV with crypto in 2026? Post-Raid Guide',
    description: 'Police traced millions in \'Operation Switch Off\' using crypto audits. Discover if buying IPTV with Bitcoin or Monero is still safe and how to protect your data.',
    image: `${BASE_URL}/buy-iptv-crypto-hero.png`,
  },
  '/blog/iptv-cable-replacement-usa-2026-guide': {
    title: 'IPTV Cable Replacement USA: Save €1,500/Year in 2026 | Zyminex',
    description: 'Discover why 80M+ Americans chose IPTV cable replacement in USA for 2026. Compare costs, skip the €200 cable bill, and keep your 4K live sports.',
    image: `${BASE_URL}/images/blog/iptv-cable-replacement-hero-2026.webp`,
  },
  '/blog/stop-isp-throttling-iptv-2026': {
    title: 'ISP Throttling IPTV: How to Stop 2026 Buffering Waves | Zyminex',
    description: 'Tired of IPTV buffering? Learn how to detect and bypass ISP throttling IPTV in May 2026 using VPN obfuscation, DNS tweaks, and private nodes.',
    image: `${BASE_URL}/images/blog/stop-isp-throttling-hero-2026.webp`,
  },
  '/blog/install-iptv-samsung-lg-smart-tv-2026': {
    title: 'IPTV on Smart TV 2026: Install Banned Apps (Samsung & LG) | Zyminex',
    description: 'Apps gone? Learn how to restore IPTV on your Samsung or LG TV using Developer Mode and USB sideloading. Step-by-step 2026 guide for Tizen & WebOS.',
    image: `${BASE_URL}/images/blog/iptv-smart-tv-2026-installation.webp`,
  },
  '/blog/portable-iptv-streaming-travel-guide-2026': {
    title: 'Portable IPTV Streaming: Best Travel Setups for Europe 2026 | Zyminex',
    description: 'Heading to Spain or Greece? Learn how to stream your IPTV flawlessly. From travel routers to bypassing hotel Wi-Fi blocks, get the 2026 travel guide.',
    image: `${BASE_URL}/images/blog/portable-iptv-streaming-europe-holiday.webp`,
  },
  '/blog/stream-nfl-draft-2026-no-cable': {
    title: 'Stream NFL Draft 2026 Live: Watch Without Cable (HD) | Zyminex',
    description: 'Don\'t miss a single pick! Learn how to stream the 2026 NFL Draft live in Pittsburgh without cable. Get 4K quality on ESPN and NFL Network now.',
    image: `${BASE_URL}/images/blog/stream-nfl-draft-2026-hero.webp`,
  },
  '/blog/sky-tv-alternatives-europe-2026': {
    title: '7 Best Sky TV Alternatives in Europe (2026 IPTV Guide) | Zyminex',
    description: 'Tired of Sky and DAZN price hikes? Discover why millions in Europe are switching to IPTV in 2026 to save €1,200+ annually on sports and movies.',
    image: `${BASE_URL}/images/blog/hero_sky_alternatives_2026.png`,
  },
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
  let headTags = `
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

  if (meta.schemas) {
    for (const schema of meta.schemas) {
      headTags += `\n    <script type="application/ld+json" data-rh="true">${JSON.stringify(schema)}</script>`;
    }
  }
  return headTags;
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
