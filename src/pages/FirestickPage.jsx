import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function FirestickPage() {
  return (
    <div className="firestick-page" id="firestick-page">
      <Helmet>
        <title>Best IPTV Subscription for Firestick & Fire TV | Forest IPTV</title>
        <meta name="description" content="Looking for the best IPTV for Amazon Firestick? Get Forest IPTV for seamless, buffer-free 4K streaming. Easy setup with Downloader, Smarters, or TiviMate." />
        <link rel="canonical" href="https://www.forestiptv.pro/iptv-for-firestick" />
        <meta property="og:title" content="Best IPTV Subscription for Firestick — Forest IPTV" />
        <meta property="og:description" content="Looking for the best IPTV for Amazon Firestick? Get Forest IPTV for seamless, buffer-free 4K streaming." />
        <meta property="og:image" content="https://www.forestiptv.pro/og-image.png" />
        <meta property="og:url" content="https://www.forestiptv.pro/iptv-for-firestick" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Firestick IPTV | Forest IPTV" />
        <meta name="twitter:description" content="Seamless 4K streaming on Amazon Firestick and Fire TV." />
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
                "name": "IPTV for Firestick",
                "item": "https://www.forestiptv.pro/iptv-for-firestick"
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
          <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'inline-block' }}>Fire OS Optimized</span>
          <h1 className="display-lg hero__title">The Ultimate IPTV Subscription <br/><span className="hero__title-accent">for Amazon Firestick</span></h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '640px', margin: 'var(--space-4) auto var(--space-6)' }}>
            Turn your Amazon Firestick into a 4K powerhouse. Experience 20,000+ live channels and VODs seamlessly integrated with Fire OS, perfectly optimized to prevent crashes on lower-spec hardware.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
             <Link to="/buy-iptv-subscription" className="btn btn-primary btn-lg">Buy Subscription</Link>
             <Link to="/iptv-free-trial" className="btn btn-secondary btn-lg">Free Test Trial</Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section section-alt">
        <div className="container">
           <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
             <h2 className="display-sm">Why Forest IPTV is the Best Choice for Firestick Users</h2>
             <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
               We engineered our streams to be incredibly lightweight, meaning your Firestick runs cool and fast without menus lagging or apps crashing.
             </p>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
             <div className="card" style={{ padding: 'var(--space-6)', background: 'var(--surface-container-low)', borderRadius: 'var(--radius-xl)' }}>
               <span className="material-icons-outlined" style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>speed</span>
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>No App Crashing</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Our server-side Anti-Freezing technology offloads the heavy lifting from your Firestick, preventing memory overload.</p>
             </div>
             <div className="card" style={{ padding: 'var(--space-6)', background: 'var(--surface-container-low)', borderRadius: 'var(--radius-xl)' }}>
               <span className="material-icons-outlined" style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>settings_remote</span>
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Alexa Remote Integration</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Fully compatible with the native Fire TV remote for fast channel zapping and EPG navigation.</p>
             </div>
             <div className="card" style={{ padding: 'var(--space-6)', background: 'var(--surface-container-low)', borderRadius: 'var(--radius-xl)' }}>
               <span className="material-icons-outlined" style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>4k</span>
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Native 4K HDR</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Designed to maximize the Firestick 4K/4K Max hardware decoding for true cinematic picture quality.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Apps */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-sm" style={{ marginBottom: 'var(--space-8)' }}>Recommended Firestick IPTV Apps</h2>
          <div style={{ display: 'flex', gap: 'var(--space-6)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ background: 'var(--surface-container)', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', flex: '1', minWidth: '300px', maxWidth: '400px' }}>
               <h3 className="headline-md" style={{ marginBottom: 'var(--space-2)' }}>TiviMate</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-5)' }}>The absolute best viewing experience. Premium UI that rivals traditional cable boxes.</p>
               <Link to="/tutorials/how-to-setup-tivimate" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>How to Install TiviMate</Link>
            </div>
            <div style={{ background: 'var(--surface-container)', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', flex: '1', minWidth: '300px', maxWidth: '400px' }}>
               <h3 className="headline-md" style={{ marginBottom: 'var(--space-2)' }}>IPTV Smarters Pro</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-5)' }}>The most reliable, multi-platform app with built-in parental controls and Catch-Up features.</p>
               <button className="btn btn-secondary" disabled style={{ width: '100%', justifyContent: 'center', opacity: 0.5 }}>Guide Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="section section-alt">
        <div className="container">
           <h2 className="display-sm" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Quick Setup: How to Install Forest IPTV on Fire TV</h2>
           <div style={{ maxWidth: '700px', margin: '0 auto', background: 'var(--surface-container-low)', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)' }}>
              <ol style={{ listStylePosition: 'inside', color: 'var(--on-surface)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                 <li className="body-lg"><strong style={{ color: 'var(--primary)' }}>Enable Sideloading:</strong> Go to Settings &gt; My Fire TV &gt; Developer Options and turn on "Apps from Unknown Sources".</li>
                 <li className="body-lg"><strong style={{ color: 'var(--primary)' }}>Get Downloader:</strong> Install the free <em>Downloader</em> app from the Amazon App Store.</li>
                 <li className="body-lg"><strong style={{ color: 'var(--primary)' }}>Enter Code:</strong> Open Downloader and type our secure quick-code provided in your welcome email.</li>
                 <li className="body-lg"><strong style={{ color: 'var(--primary)' }}>Install & Login:</strong> The app will install automatically. Open it and sign in with your Xtream Codes API credentials.</li>
              </ol>
           </div>
        </div>
      </section>
    </div>
  )
}
