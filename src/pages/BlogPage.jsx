import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { blogPosts } from '../data/blogPosts'


export default function BlogPage() {
  return (
    <div className="blog-page">
            <Helmet>
        <title>Blog | Latest News & Streaming Guides | Zyminex</title>
        <meta name="description" content="Stay updated with the latest IPTV news, setup tutorials, and streaming tips from Zyminex. Discover how to enhance your entertainment." />
        <link rel="canonical" href="https://www.zyminex.pro/blog" />
        
        <meta property="og:site_name" content="Zyminex" />
        <meta property="og:title" content="Zyminex — Blog | Latest News & Streaming Guides" />
        <meta property="og:description" content="Stay updated with the latest IPTV news, setup tutorials, and streaming tips from Zyminex. Discover how to enhance your entertainment." />
        <meta property="og:image" content="https://www.zyminex.pro/og-image.png" />
        <meta property="og:url" content="https://www.zyminex.pro/blog" />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@zyminex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zyminex — Blog | Latest News & Streaming Guides" />
        <meta name="twitter:description" content="Stay updated with the latest IPTV news, setup tutorials, and streaming tips from Zyminex. Discover how to enhance your entertainment." />
        <meta name="twitter:image" content="https://www.zyminex.pro/og-image.png" />
      </Helmet>

      <section className="blog-hero">
        <div className="blog-hero__glow"></div>
        <div className="container">
          <span className="label-md" style={{ color: 'var(--primary)' }}>Official Blog</span>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-3)' }}>Insights & Updates</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: 'var(--space-4) auto 0' }}>
            Everything you need to know about cutting the cord, optimizing your streaming setup, and getting the most out of Zyminex.
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


