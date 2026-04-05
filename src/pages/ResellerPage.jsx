import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ResellerPage() {
  return (
    <div className="reseller-page" id="reseller-page">
      <Helmet>
        <title>IPTV Reseller Panel — Start Your Own IPTV Business</title>
        <meta name="description" content="Join the Forest IPTV reseller program. Get access to the best IPTV reseller panel with 4K streaming and 24/7 technical support." />
        <link rel="canonical" href="https://www.forestiptv.pro/iptv-reseller-panel" />
        <meta property="og:title" content="IPTV Reseller Panel — Start Your IPTV Business" />
        <meta property="og:description" content="Join the Forest IPTV reseller program. Get access to our premium 4K IPTV panel." />
        <meta property="og:image" content="https://www.forestiptv.pro/og-image.png" />
        <meta property="og:url" content="https://www.forestiptv.pro/iptv-reseller-panel" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forest IPTV Reseller Program" />
        <meta name="twitter:description" content="Manage your own customers with our premium IPTV reseller panel." />
        <meta name="twitter:image" content="https://www.forestiptv.pro/og-image.png" />/
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
                "name": "IPTV Reseller Panel",
                "item": "https://www.forestiptv.pro/iptv-reseller-panel"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: 'var(--space-12)' }}>
         <div className="hero__bg-effects">
           <div className="hero__glow hero__glow--1"></div>
        </div>
        <div className="container hero__content" style={{ textAlign: 'center' }}>
          <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'inline-block' }}>B2B Program</span>
          <h1 className="display-lg hero__title">Start Earning with the <br/><span className="hero__title-accent">Forest IPTV Reseller Panel</span></h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '640px', margin: 'var(--space-4) auto var(--space-6)' }}>
            Start your own fully white-labeled streaming business. Purchase discounted credits, manage your own clients, and set your own profit margins using our robust infrastructure.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
             <a 
                href={`https://wa.me/212763569826?text=${encodeURIComponent('Hello Forest IPTV, I am interested in the Reseller Program. Please send me the pricing and credit details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
             >
                Apply for Reseller Account
             </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-alt">
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="display-sm" style={{ marginBottom: 'var(--space-10)' }}>How Our IPTV Reseller Program Works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', maxWidth: '900px', margin: '0 auto' }}>
               <div>
                  <div style={{ width: '48px', height: '48px', margin: '0 auto var(--space-4)', background: 'var(--primary)', color: 'var(--on-primary-fixed)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800 }}>1</div>
                  <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Buy Credits</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Purchase server credits in bulk at a massive discount. 1 Credit = 1 Month of service.</p>
               </div>
               <div>
                  <div style={{ width: '48px', height: '48px', margin: '0 auto var(--space-4)', background: 'var(--primary)', color: 'var(--on-primary-fixed)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800 }}>2</div>
                  <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Generate Lines</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Log into your custom dashboard and generate m3u links or Xtream Codes for your clients instantly.</p>
               </div>
               <div>
                  <div style={{ width: '48px', height: '48px', margin: '0 auto var(--space-4)', background: 'var(--primary)', color: 'var(--on-primary-fixed)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800 }}>3</div>
                  <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Keep 100% Profit</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Sell the subscriptions to your customers at whatever retail price you choose.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing - Contact for Price */}
      <section className="section" id="reseller-pricing">
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="display-sm" style={{ marginBottom: 'var(--space-6)' }}>Reseller Credits & Pricing</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
              We offer the most competitive wholesale rates in the industry. Our pricing is tiered based on volume to ensure maximum profit margins for your business. Contact our B2B team directly on WhatsApp for our current rate card and panel setup options.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
               <a 
                  href={`https://wa.me/212763569826?text=${encodeURIComponent('Hello Forest IPTV, I am interested in the Reseller Program. Please send me the pricing and credit details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
               >
                  <span className="material-icons-outlined" style={{ marginRight: '8px' }}>chat</span>
                  Contact for Reseller Pricing
               </a>
            </div>
         </div>
      </section>

      {/* Benefits & Manage */}
      <section className="section section-alt">
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-10)' }}>
               <div>
                 <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>Benefits of Partnering with Forest IPTV</h2>
                 <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
                    Don't risk your reputation on unstable servers. By reselling Forest IPTV, you are selling the industry's highest quality streams. Our robust anti-freezing tech means fewer support tickets for you, resulting in happier, long-term clients and recurring revenue.
                 </p>
               </div>
               <div>
                  <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>Manage Your Customers with Our Dashboard</h2>
                  <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
                     Our proprietary Reseller Panel gives you ultimate control. Generate 24-hr trial links in seconds, instantly extend expired lines, MAC address management, and monitor active connections all from one secure, mobile-friendly interface.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
