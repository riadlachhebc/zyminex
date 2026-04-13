import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import LogoMarquee from '../components/LogoMarquee'

// Import channel logos
import bnaLogo from '../assets/bna.webp'
import champLogo from '../assets/champ.webp'
import disnepLogo from '../assets/disnep.webp'
import hboLogo from '../assets/hbo.webp'
import inbeLogo from '../assets/inbe.webp'
import primeLogo from '../assets/prime.webp'
import ucfLogo from '../assets/ucf.webp'

// Import movie posters
import poster1 from '../assets/poster-1.webp'
import poster2 from '../assets/poster-2.webp'
import poster3 from '../assets/poster-3.webp'
import poster4 from '../assets/poster-4.webp'
import poster5 from '../assets/poster-5.webp'
import poster6 from '../assets/poster-6.webp'

const features = [
  { icon: 'hd', title: '4K Ultra HD Streaming', desc: 'Experience every detail with breathtaking clarity. Optimized for high-bitrate streaming.' },
  { icon: 'speed', title: 'Anti-Freezing Technology', desc: 'Zero buffering. Our proprietary compression ensures smooth playback even on modest connections.' },
  { icon: 'live_tv', title: '20,000+ Channels', desc: 'From local news to international blockbusters, your library is endless.' },
  { icon: 'support_agent', title: '24/7 Support', desc: 'Our technicians ensure your stream never drops. Average response < 5 min.' },
  { icon: 'devices', title: 'Multi-Device Compatible', desc: 'Watch on Smart TV, Fire Stick, Android, iOS, tablets, and more.' },
  { icon: 'download', title: 'Easy Setup', desc: 'Download the app, log in, and start watching in under 5 minutes.' },
]

const moviePosters = [
  { src: poster1, alt: 'Premium Movie 1' },
  { src: poster2, alt: 'Premium Movie 2' },
  { src: poster3, alt: 'Premium Movie 3' },
  { src: poster4, alt: 'Premium Movie 4' },
  { src: poster5, alt: 'Premium Movie 5' },
  { src: poster6, alt: 'Premium Movie 6' },
]

const channelLogos = [
  { src: inbeLogo, alt: 'IN Sports' },
  { src: champLogo, alt: 'League' },
  { src: hboLogo, alt: 'Hobx' },
  { src: disnepLogo, alt: 'Dis+' },
  { src: bnaLogo, alt: 'NA' },
  { src: primeLogo, alt: 'Amazrime' },
  { src: ucfLogo, alt: 'UF' },
]

const categories = [
  { name: 'Sports', icon: 'sports_soccer' },
  { name: 'Movies', icon: 'movie' },
  { name: 'Documentaries', icon: 'nature_people' },
  { name: 'Kids', icon: 'child_care' },
  { name: 'News', icon: 'newspaper' },
  { name: 'Music', icon: 'music_note' },
]

const testimonials = [
  {
    quote: "The Anti-Freezing technology actually works! I switched from Kemo IPTV and the difference is night and day.",
    name: 'David Chen',
    role: 'Premium Subscriber',
  },
  {
    quote: "Setup was incredibly easy on my Firestick. I was watching 4K sports within 5 minutes.",
    name: 'Sarah Jenkins',
    role: 'Firestick User',
  },
  {
    quote: "Best IPTV service in 2026 without a doubt. The VOD library is huge and constantly updated.",
    name: 'Maria Lopez',
    role: '12-Month Subscriber',
  },
]

const stats = [
  { value: '50,000+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '20,000+', label: 'Channels' },
  { value: '<5 min', label: 'Setup Time' },
]

const homeFaqs = [
  {
    q: 'How fast is the delivery after I buy Zyminex?',
    a: 'Delivery is instant! As soon as your payment is confirmed, your credentials and setup instructions are sent directly to your email inbox so you can start streaming immediately.'
  },
  {
    q: 'Can I use my subscription on multiple devices?',
    a: 'Yes, depending on the plan you choose. While a standard package allows for one connection, you can easily upgrade your plan during checkout to include 2, 3, or more simultaneous connections for your entire household.'
  },
  {
    q: 'Do I need a VPN to use the service?',
    a: 'While our platform is highly secure, we always recommend using a VPN if your local Internet Service Provider (ISP) is known for throttling streaming traffic. Our service is 100% VPN-friendly.'
  },
  {
    q: 'What happens if I need technical support?',
    a: 'We offer 24/7 customer support. Whether you need help navigating the Zyminex login dashboard or configuring your apps, our dedicated support team is always just a message away.'
  }
]

const plans = [
  {
    name: '3 Months',
    price: '29.99',
    period: '/ 3 months',
    perMonth: '~$10/mo',
    features: [
      '4K Quality',
      '20,000+ Channels',
      'All Devices',
      'VIP 24/7 Support',
      'Full VOD Library Access',
      'Live PPV Events Included'
    ],
    badge: null,
    highlighted: false,
  },
  {
    name: '12 Months',
    price: '59.99',
    period: '/ year',
    perMonth: '~$5/mo',
    features: [
      '4K Quality',
      '20,000+ Channels',
      'All Devices',
      'VIP 24/7 Support',
      'Full VOD Library Access',
      'Live PPV Events Included'
    ],
    badge: 'Best Value',
    highlighted: true,
  },
  {
    name: '6 Months',
    price: '44.99',
    period: '/ 6 months',
    perMonth: '~$7.50/mo',
    features: [
      '4K Quality',
      '20,000+ Channels',
      'All Devices',
      'VIP 24/7 Support',
      'Full VOD Library Access',
      'Live PPV Events Included'
    ],
    badge: 'Popular',
    highlighted: false,
  },
]

const homeBlogPosts = [
  {
    id: 'tivimate-vs-smarters-2026',
    path: '/tivimate-vs-iptv-smarters-pro-best-player-2026',
    image: 'https://i.ibb.co/3YYDYxKz/Tivi-Mate-vs-IPTV-202604130102.jpg',
    category: 'App Reviews & Tutorials',
    date: 'Apr 13, 2026',
    title: 'TiviMate vs. IPTV Smarters Pro: Which is the Best IPTV Player in 2026?',
    excerpt: 'Confused about which streaming app to use? Read our ultimate 2026 comparison.'
  }
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Schema Markup
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zyminex",
    "url": "https://www.zyminex.pro",
    "logo": "https://www.zyminex.pro/assets/logo.png",
    "description": "Zyminex is the best Premium IPTV Service Provider offering 20,000+ live channels and 4K VODs.",
    "sameAs": [
      "https://wa.me/212763569826"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zyminex",
    "url": "https://www.zyminex.pro",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.zyminex.pro/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="home" id="home-page">
      <Helmet>
        <title>Zyminex — Best 4K IPTV Subscription</title>
        <meta name="description" content="Zyminex offers the best 4K IPTV subscription. Experience 22,000+ live channels, VODs, and anti-freeze technology with a free trial today." />
        <link rel="canonical" href="https://www.zyminex.pro/" />
        
        <meta property="og:site_name" content="Zyminex" />
        <meta property="og:title" content="Zyminex — Best 4K IPTV Subscription" />
        <meta property="og:description" content="Zyminex offers the best 4K IPTV subscription. Experience 22,000+ live channels, VODs, and anti-freeze technology with a free trial today." />
        <meta property="og:image" content="https://www.zyminex.pro/og-image.png" />
        <meta property="og:url" content="https://www.zyminex.pro/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@zyminex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zyminex — Best 4K IPTV Subscription" />
        <meta name="twitter:description" content="Zyminex offers the best 4K IPTV subscription. Experience 22,000+ live channels, VODs, and anti-freeze technology with a free trial today." />
        <meta name="twitter:image" content="https://www.zyminex.pro/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify(orgSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ====== HERO ====== */}
      <section className="hero" id="hero-section">
        <div className="hero__bg-effects">
          <div className="hero__glow hero__glow--1"></div>
          <div className="hero__glow hero__glow--2"></div>
        </div>
        <div className="container hero__content">
          <div className="hero__badge animate-fade-in-up">
            <span className="material-icons-outlined" style={{ fontSize: '14px' }}>bolt</span>
            Anti-Freezing Technology Active
          </div>
          <h1 className="display-lg hero__title animate-fade-in-up stagger-1">
            Welcome to Zyminex:<br />
            <span className="hero__title-accent">The Ultimate 4K Streaming Experience</span>
          </h1>
          <p className="body-lg hero__subtitle animate-fade-in-up stagger-2">
            Zyminex is your all-in-one gateway to limitless entertainment. Get access to 20,000+ live TV channels, blockbuster movies, and exclusive PPV — all in crystal-clear 4K. No contracts. No buffering. Just stream.
          </p>
          <div className="hero__actions animate-fade-in-up stagger-3">
            <Link to="/buy-iptv-subscription" className="btn btn-primary btn-lg">
              <span className="material-icons-outlined">rocket_launch</span>
              View Plans
            </Link>
            <Link to="/iptv-free-trial" className="btn btn-secondary btn-lg">
              <span className="material-icons-outlined">play_circle</span>
              Start Your Free Test Trial
            </Link>
          </div>
          
          <div className="trust-signals animate-fade-in-up stagger-4" style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', color: 'var(--on-surface-variant)' }}>
            <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}><span className="material-icons-outlined">verified_user</span> Secure Payments</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}><span className="material-icons-outlined">speed</span> Zero Buffering</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}><span className="material-icons-outlined">replay</span> Money-Back Guarantee</span>
          </div>

          <div className="hero__stats animate-fade-in-up stagger-4" style={{marginTop: 'var(--space-10)'}}>
            {stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label label-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRICING & TRIALS ====== */}
      <section className="section" id="pricing-trials">
        <div className="container">
          <div className="section-header">
            <h2 className="display-sm">Flexible Zyminex Pricing & Risk-Free Trials</h2>
            <div className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <p>We believe in transparency. There are no hidden fees, no cancellation penalties, and no hardware rentals. Our Zyminex pricing is straightforward, offering massive discounts for longer commitments. You can securely buy Zyminex for a full year for maximum savings, or simply start with a flexible Zyminex 3 month plan to test the waters.</p>
              <p>Not ready to commit your hard-earned money just yet? We completely understand. We want you to experience our premium quality risk-free. Simply request a Zyminex Free Test Trial today. Your Free Test Trial will give you full, unrestricted access to our complete channel list and VOD library so you can test our anti-freezing technology for yourself.</p>
            </div>
          </div>
          <div className="plans-grid" style={{ marginTop: 'var(--space-10)' }}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card ${plan.highlighted ? 'plan-card--highlighted' : ''}`}
                id={`plan-${plan.name.replace(/\s/g, '-').toLowerCase()}`}
              >
                {plan.badge && (
                  <div className={`plan-card__badge ${plan.highlighted ? 'plan-card__badge--accent' : ''}`}>
                    {plan.highlighted && <span className="material-icons-outlined" style={{ fontSize: '14px' }}>stars</span>}
                    {plan.badge}
                  </div>
                )}
                <h3 className="headline-md">{plan.name}</h3>
                <div className="plan-card__price">
                  <span className="plan-card__currency">$</span>
                  <span className="plan-card__amount">{plan.price}</span>
                </div>
                <p className="body-md" style={{ color: 'var(--outline)' }}>{plan.perMonth}</p>
                <ul className="plan-card__features">
                  {plan.features.map((feat) => (
                    <li key={feat} className="plan-card__feature">
                      <span className="material-icons-outlined" style={{ fontSize: '18px', color: 'var(--primary)' }}>check_circle</span>
                      <span className="body-md">{feat}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/212763569826?text=${encodeURIComponent(`Hello Zyminex, I am interested in ordering the ${plan.name} plan for $${plan.price}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-lg ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`} 
                  style={{ width: '100%' }}
                >
                  {plan.highlighted ? 'Get Best Value' : 'Order Now'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURES (Why Choose) ====== */}
      <section className="section section-alt features-section" id="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <span className="material-icons-outlined" style={{ fontSize: '12px' }}>bolt</span>
              Why Zyminex
            </span>
            <h2 className="display-sm">Why Choose a Zyminex Subscription Over Cable?</h2>
            <div className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <p>The television landscape has changed, and a modern Zyminex subscription gives you ultimate control over what you watch and how much you pay. Recognized as the best premium IPTV service on the market, we offer a massive, frequently updated Zyminex channel list that includes local networks, international broadcasts, and a massive Video-on-Demand (VOD) library.</p>
              <p>Instead of settling for standard definition, you can finally enjoy your favorite shows in stunning high resolution with our dedicated 4K IPTV subscription packages. Why pay hundreds of dollars a month for a fraction of the content when you can have it all in one place?</p>
            </div>
          </div>
          
          <div className="dual-marquee-wrapper" style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-12)' }}>
            <LogoMarquee items={moviePosters} direction="left" variant="poster" />
            <LogoMarquee items={channelLogos} direction="right" variant="16-9" />
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div key={f.title} className="card feature-card">
                <div className="feature-card__icon">
                  <span className="material-icons-outlined">{f.icon}</span>
                </div>
                <h3 className="title-md">{f.title}</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CATEGORIES (VOD) ====== */}
      <section className="section categories-section" id="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="display-sm">A Buffer-Free IPTV Provider Built for Live Sports & Entertainment</h2>
            <div className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <p>There is nothing worse than your screen freezing right before a game-winning touchdown or a crucial movie scene. We know that stability is the most important factor for our users. That’s why we operate as a strictly buffer-free IPTV provider, utilizing advanced anti-freezing IPTV service technology and premium global servers to ensure 100% uptime.</p>
              <p>Because of our high-speed server network, we are widely considered the best IPTV for live sports, offering seamless streams of football, basketball, MMA, and international racing events. If you are tired of your current lagging provider, making the switch to us is the perfect upgrade. In fact, our service is so reliable that users tell us they never even have to search for a Zyminex alternative once they experience our streaming quality.</p>
            </div>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <div key={cat.name} className="category-card">
                <span className="material-icons-outlined category-card__icon" style={{ fontSize: '3.5rem' }}>{cat.icon}</span>
                <span className="title-md" style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{cat.name}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
             <Link to="/buy-iptv-subscription" className="btn btn-primary">Unlock Full Library</Link>
          </div>
        </div>
      </section>

      {/* ====== DEVICES ====== */}
      <section className="section section-alt" id="devices-section">
        <div className="container">
          <div className="section-header">
            <h2 className="display-sm">Seamless Device Compatibility: Watch Anywhere</h2>
            <div className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <p>We believe your entertainment should fit your lifestyle, not the other way around. Our service is highly versatile and compatible with almost any smart device in your home.</p>
              <p>If you prefer watching on a television, our service is perfectly optimized as the premier Zyminex for Firestick solution, and it also stands out as the best IPTV for Android TV boxes. Prefer to watch on your computer while working? Simply access the Zyminex login portal and stream directly through our convenient Zyminex web player—no extra downloads required.</p>
            </div>
          </div>
          <div className="setup-steps">
            <div className="setup-step">
              <div className="setup-step__icon"><span className="material-icons-outlined">settings_remote</span></div>
              <h3 className="title-md">Amazon Firestick</h3>
              <Link to="/iptv-for-firestick" className="btn btn-sm btn-secondary" style={{marginTop:'var(--space-2)'}}>View Guide</Link>
            </div>
            <div className="setup-step">
              <div className="setup-step__icon"><span className="material-icons-outlined">tv</span></div>
              <h3 className="title-md">Smart TVs</h3>
              <Link to="/setup-guides" className="btn btn-sm btn-secondary" style={{marginTop:'var(--space-2)'}}>View Guide</Link>
            </div>
             <div className="setup-step">
              <div className="setup-step__icon"><span className="material-icons-outlined">smartphone</span></div>
              <h3 className="title-md">Mobile & Tablets</h3>
              <Link to="/setup-guides" className="btn btn-sm btn-secondary" style={{marginTop:'var(--space-2)'}}>View Guide</Link>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: 'var(--space-8)'}}>
             <Link to="/setup-guides" className="btn btn-secondary">See All Setup Tutorials</Link>
          </div>
        </div>
      </section>

      {/* ====== SETUP INSTRUCTIONS ====== */}
      <section className="section" id="setup-instructions">
        <div className="container">
          <div className="section-header">
            <h2 className="display-sm">Simple Setup and Easy-to-Use Applications</h2>
            <div className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <p>Getting started is incredibly easy, even if you aren't tech-savvy. We provide a comprehensive Zyminex setup guide that walks you through exactly how to connect your devices in minutes.</p>
              <p>Our servers integrate flawlessly with the most popular streaming players on the market. Whether you need a quick Zyminex Smarters Pro setup tutorial or you prefer customizing your TV guide layout using Zyminex TiviMate, our step-by-step instructions make installation a breeze.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ====== SUBSCRIPTION BANNER ====== */}
      <section className="section section-alt" id="subscription-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 className="display-sm">Ready to Transform Your TV Experience?</h3>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: 'var(--space-4) auto var(--space-6)' }}>
            Stop overpaying for cable and say goodbye to buffering screens. Join thousands of satisfied customers who have already made the switch to the ultimate entertainment hub.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/iptv-free-trial" className="btn btn-primary btn-lg">
              Start Free Test 🎁
            </Link>
            <Link to="/buy-iptv-subscription" className="btn btn-secondary btn-lg">
              View Our Premium Pricing Plans
            </Link>
          </div>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--space-4)', fontWeight: 'bold' }}>
            ...and start streaming in 4K today!
          </p>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="section testimonials-section" id="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <span className="material-icons-outlined" style={{ fontSize: '12px' }}>verified</span>
              Real Reviews
            </span>
            <h2 className="display-sm">Trusted by Thousands</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {'★★★★★'.split('').map((s, si) => (
                    <span key={si} style={{ color: 'var(--tertiary)', fontSize: '16px' }}>★</span>
                  ))}
                </div>
                <p className="body-lg testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="label-lg">{t.name}</p>
                    <p className="body-md" style={{ color: 'var(--outline)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HOMEPAGE FAQ ====== */}
      <section className="section section-alt" id="home-faq">
         <div className="container" style={{ maxWidth: '760px' }}>
          <div className="section-header">
            <h2 className="display-sm">Frequently Asked Questions</h2>
          </div>
          <div className="home-faq-list">
             {homeFaqs.map((faq, idx) => (
               <div key={idx} className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`} style={{marginBottom: 'var(--space-3)'}}>
                 <button className="faq-item__trigger" onClick={() => toggleFaq(idx)} style={{width: '100%', display: 'flex', justifyContent: 'space-between', padding: 'var(--space-5)', background: 'var(--surface-container-low)', color: 'var(--on-surface)', border: 'none', borderRadius: 'var(--radius-lg)', cursor: 'pointer', textAlign: 'left'}}>
                    <h3 className="title-md">{faq.q}</h3>
                    <span className="material-icons-outlined" style={{color: openFaq === idx ? 'var(--primary)' : 'var(--outline)'}}>
                      {openFaq === idx ? 'expand_less' : 'expand_more'}
                    </span>
                 </button>
                 {openFaq === idx && (
                   <div style={{padding: 'var(--space-4) var(--space-5)', background: 'var(--surface-container-low)', color: 'var(--on-surface-variant)', borderBottomLeftRadius: 'var(--radius-lg)', borderBottomRightRadius: 'var(--radius-lg)', marginTop: '-8px'}}>
                     <p className="body-lg">{faq.a}</p>
                   </div>
                 )}
               </div>
             ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
             <Link to="/faq" className="btn btn-secondary">Read Full FAQ</Link>
          </div>
         </div>
      </section>

      {/* ====== HOMEPAGE ARTICLES ====== */}
      <section className="section" id="home-articles">
        <div className="container">
          <div className="section-header">
            <h2 className="display-sm">Latest Guides & Insights</h2>
          </div>
          <div className="blog-grid" style={{ marginTop: 'var(--space-8)' }}>
            {homeBlogPosts.map((post) => (
              <article key={post.id} className="blog-card card">
                <div className="blog-card__image-container">
                  <img src={post.image} alt={post.title} className="blog-card__image" loading="lazy" />
                  <span className="blog-card__category">{post.category}</span>
                </div>
                <div className="blog-card__content">
                  <span className="label-sm" style={{ color: 'var(--outline)' }}>{post.date}</span>
                  <h3 className="title-lg blog-card__title">
                    <Link to={post.path}>{post.title}</Link>
                  </h3>
                  <p className="body-md blog-card__excerpt" style={{ color: 'var(--on-surface-variant)' }}>
                    {post.excerpt}
                  </p>
                  <Link to={post.path} className="blog-card__read-more">
                    Read Article <span className="material-icons-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
             <Link to="/blog" className="btn btn-secondary btn-lg">View All Articles</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
