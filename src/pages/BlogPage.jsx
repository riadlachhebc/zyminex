import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './BlogPage.css'

const blogPosts = [
  {
    id: 'iptv-guide-blank-fix',
    path: '/iptv-guide-blank-buffering-fix-2026',
    image: 'https://i.ibb.co/Y7cTG0pC/A-frustrated-user-202604052301.jpg',
    category: 'Troubleshooting & Tech Guides',
    date: 'Apr 5, 2026',
    title: 'Why Your IPTV Guide Is Blank & Buffering (April 2026 Fix)',
    excerpt: 'Is your TV guide suddenly blank, or does your stream freeze during live sports? Discover the hidden hardware and network issues plaguing IPTV in April 2026.'
  },
  {
    id: 'iptv-crackdown-2026',
    path: '/2026-iptv-crackdown-dodgy-firestick-safety',
    image: 'https://i.ibb.co/zzfBBp2/Padlock-over-TV-202604030125.jpg',
    category: 'Industry News & Security',
    date: 'Apr 3, 2026',
    title: 'The 2026 IPTV Crackdown: Are "Dodgy Firesticks" Safe? (Security Guide)',
    excerpt: 'Authorities are launching massive crackdowns on "dodgy Firesticks" and cheap IPTV providers. Discover if your data is safe and how to secure your setup.'
  },
  {
    id: 'iptv-buffering-fixes',
    path: '/why-is-my-iptv-buffering-5-easy-fixes-to-stop-freezing-in-2026',
    image: 'https://i.ibb.co/zVTFYS9T/IPTV-buffering-blog-202604020446.jpg',
    category: 'Guides & Fixes',
    date: 'Apr 2, 2026',
    title: 'Why Is My IPTV Buffering? (5 Easy Fixes to Stop Freezing in 2026)',
    excerpt: 'Tired of your screen freezing right before the big game? Discover the top 5 reasons your IPTV keeps buffering and learn how to fix it instantly in 2026.'
  },
  {
    id: 'firestick-setup',
    path: '/how-to-setup-iptv-on-amazon-firestick-2026-guide',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    category: 'Tutorials & Guides',
    date: 'Apr 2, 2026',
    title: 'How to Setup IPTV on Amazon Firestick (2026 Guide)',
    excerpt: 'Learn how to quickly step up and install IPTV on your Amazon Firestick for smooth 4K streaming.'
  },
  {
    id: 'cutting-cord',
    path: '/top-5-benefits-cutting-the-cord-premium-iptv',
    image: 'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&w=800&q=80',
    category: 'Industry Insights',
    date: 'Apr 2, 2026',
    title: 'Top 5 Benefits of Cutting the Cord Using Premium IPTV',
    excerpt: 'Discover why millions are cutting cable and how premium IPTV can save you thousands of dollars while offering a massive catalog of content.'
  }
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <Helmet>
        <title>Forest IPTV Blog | Latest News & Streaming Guides</title>
        <meta name="description" content="Stay updated with the latest IPTV news, setup tutorials, and streaming tips from Forest IPTV. Discover how to enhance your entertainment." />
        <link rel="canonical" href="https://www.forestiptv.pro/blog" />
        <meta property="og:title" content="Forest IPTV Blog — News & Streaming Guides" />
        <meta property="og:description" content="Stay updated with the latest IPTV news, setup tutorials, and streaming tips." />
        <meta property="og:image" content="https://www.forestiptv.pro/og-image.png" />
        <meta property="og:url" content="https://www.forestiptv.pro/blog" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forest IPTV Blog | News & Tutorials" />
        <meta name="twitter:description" content="Discover how to enhance your entertainment with our latest IPTV guides." />
        <meta name="twitter:image" content="https://www.forestiptv.pro/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.forestiptv.pro/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.forestiptv.pro/blog"
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="blog-hero">
        <div className="blog-hero__glow"></div>
        <div className="container">
          <span className="label-md" style={{ color: 'var(--primary)' }}>Official Blog</span>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-3)' }}>Insights & Updates</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: 'var(--space-4) auto 0' }}>
            Everything you need to know about cutting the cord, optimizing your streaming setup, and getting the most out of Forest IPTV.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <article key={post.id} className="blog-card card">
                  <div className="blog-card__image-container">
                    <img src={post.image} alt={post.title} className="blog-card__image" loading="lazy" />
                    <span className="blog-card__category">{post.category}</span>
                  </div>
                  <div className="blog-card__content">
                    <span className="label-sm" style={{ color: 'var(--outline)' }}>{post.date}</span>
                    <h2 className="title-lg blog-card__title">
                      <Link to={post.path || `/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="body-md blog-card__excerpt" style={{ color: 'var(--on-surface-variant)' }}>
                      {post.excerpt}
                    </p>
                    <Link to={post.path || `/blog/${post.id}`} className="blog-card__read-more">
                      Read Article <span className="material-icons-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="blog-empty-state" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'var(--space-12) 0' }}>
                <span className="material-icons-outlined" style={{ fontSize: '64px', color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>edit_note</span>
                <h2 className="display-sm">New Articles Coming Soon</h2>
                <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '500px', margin: 'var(--space-2) auto' }}>
                  We are currently preparing high-quality guides and tutorials to help you master your IPTV experience. Stay tuned!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-sm">Ready to Experience Zero Buffering?</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: 'var(--space-4) auto var(--space-6)' }}>
            Join thousands of satisfied users who have permanently cut the cord.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/iptv-free-trial" className="btn btn-primary btn-lg">Free Test Trial</Link>
            <Link to="/buy-iptv-subscription" className="btn btn-secondary btn-lg">View Plans</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
