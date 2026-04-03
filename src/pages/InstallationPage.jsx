import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './InstallationPage.css'

const guides = [
  {
    name: 'TiviMate',
    icon: 'smart_display',
    desc: 'Best for Android TV and Firestick for a premium, cable-like TV guide experience.',
    link: '/tutorials/how-to-setup-tivimate',
    badge: 'Recommended',
  },
  {
    name: 'IPTV Smarters Pro',
    icon: 'phone_android',
    desc: 'Versatile player available on Android, iOS, Windows, Mac, and Samsung/LG Smart TVs.',
    link: '/tutorials/how-to-setup-smarters-pro',
    badge: null,
  },
  {
    name: 'GSE Smart IPTV',
    icon: 'apple',
    desc: 'The most popular and powerful advanced IPTV player for Apple TV and iOS devices.',
    link: '#',
    badge: null,
  },
  {
    name: 'Perfect Player',
    icon: 'tv',
    desc: 'A simple, fast, and lightweight player optimized for all Android-based devices.',
    link: '#',
    badge: null,
  },
]

export default function InstallationPage() {
  return (
    <div className="install-page" id="install-page">
      <Helmet>
        <title>Forest IPTV Setup Guide | Easy Installation for All Devices</title>
        <meta name="description" content="Read our official setup guide for Forest IPTV. Learn how to install our premium 4K IPTV on Firestick, Android TV, and more." />
        <link rel="canonical" href="https://www.forestiptv.pro/setup-guides" />
        <meta property="og:title" content="Forest IPTV Setup Guide — Easy Installation" />
        <meta property="og:description" content="Learn how to install our premium 4K IPTV on Firestick, Android TV, and more." />
        <meta property="og:image" content="https://www.forestiptv.pro/og-image.png" />
        <meta property="og:url" content="https://www.forestiptv.pro/setup-guides" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forest IPTV Setup Guides" />
        <meta name="twitter:description" content="Step-by-step instructions for all your devices." />
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
                "name": "Setup Guides",
                "item": "https://www.forestiptv.pro/setup-guides"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <section className="install-hero" id="install-hero">
        <div className="install-hero__glow"></div>
        <div className="container">
          <span className="label-md" style={{ color: 'var(--primary)' }}>Setup Hub</span>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-3)' }}>How to Install Forest IPTV — Complete Setup Guide</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: 'var(--space-4) auto 0' }}>
            Welcome to the official Forest IPTV setup guide. If you are ready to cut the cord and experience limitless entertainment, you are exactly in the right place. When you choose to buy Forest IPTV, you are upgrading to the best premium IPTV service available today, complete with thousands of live channels, blockbuster movies, and top-tier sports networks.
            <br /><br />
            We have engineered our platform to be incredibly user-friendly so that anyone can configure their new 4K IPTV subscription without needing a degree in computer science. Whether you want to watch on your big screen at home or stream on the go, our secure infrastructure acts as your ultimate buffer-free IPTV provider. Follow the simple, step-by-step instructions below to install our service on your preferred device and start streaming immediately.
          </p>
        </div>
      </section>

      <section className="section" id="install-guides">
        <div className="container">
          <h2 className="display-sm" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Recommended IPTV Players</h2>
          <div className="guides-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
            {guides.map((guide, i) => (
              <div key={guide.name} className="device-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                {guide.badge && (
                  <span style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', background: 'var(--primary-container)', color: 'var(--on-primary-container)', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>{guide.badge}</span>
                )}
                <div className="device-card__icon" style={{ marginBottom: 'var(--space-4)' }}>
                  <span className="material-icons-outlined">{guide.icon}</span>
                </div>
                <h3 className="headline-md" style={{ marginBottom: 'var(--space-2)' }}>{guide.name}</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', flex: 1, marginBottom: 'var(--space-6)' }}>{guide.desc}</p>
                
                {guide.link !== '#' ? (
                  <Link to={guide.link} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                    View Tutorial
                  </Link>
                ) : (
                  <button className="btn btn-secondary" disabled style={{ width: '100%', justifyContent: 'center', opacity: 0.5, cursor: 'not-allowed' }}>
                    Tutorial Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Device Sections */}
      <section className="section section-alt" id="firestick-setup">
        <div className="container">
          <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>How to Install Forest IPTV on Firestick</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-6)' }}>
            Amazon's streaming device is incredibly popular, making Forest IPTV for Firestick one of the most requested configurations by our users. Here is how to get started:
          </p>
          <ul className="body-lg" style={{ color: 'var(--on-surface-variant)', listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Download the 'Downloader' App:</strong> Go to the Firestick home screen, click the "Find" or "Search" icon, type in "Downloader," and install it.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Enable Unknown Sources:</strong> Navigate to Firestick Settings &gt; My Fire TV &gt; Developer Options. Turn ON "Install Unknown Apps" for the Downloader app.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Download an IPTV Player:</strong> Open the Downloader app and enter the URL for your preferred player (we highly recommend doing a Forest IPTV Smarters Pro setup by typing in the official Smarters APK link provided in your welcome email).</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Log In:</strong> Open the newly installed app, select "Login with Xtream Codes API," and enter the username, password, and portal URL sent to your email after purchase.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="roku-setup">
        <div className="container">
          <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>How to Install Forest IPTV on Roku</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-6)' }}>
            Roku operates a closed ecosystem, meaning traditional IPTV apps are often removed from their store. However, you can still easily enjoy your service using screen mirroring or our web platform.
          </p>
          <ul className="body-lg" style={{ color: 'var(--on-surface-variant)', listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Use Your Smartphone or PC:</strong> Ensure your Roku and your smartphone/PC are connected to the same Wi-Fi network.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Access the Web Player:</strong> Open the browser on your phone or computer and navigate to the Forest IPTV web player.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Enter Your Credentials:</strong> Use your secure Forest IPTV login details to access your dashboard.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Cast to Roku:</strong> Use the "Screen Mirroring" or "Smart View" feature on your phone/PC to cast the stream directly to your Roku device for big-screen viewing.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-alt" id="apple-tv-setup">
        <div className="container">
          <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>How to Install Forest IPTV on Apple TV</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-6)' }}>
            Apple TV users can easily access our powerful anti-freezing IPTV service by utilizing third-party players available directly in the App Store.
          </p>
          <ul className="body-lg" style={{ color: 'var(--on-surface-variant)', listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Open the App Store:</strong> Navigate to the Apple TV home screen and launch the App Store.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Search for an App:</strong> Search for "IPTV Smarters Player" or "GSE Smart IPTV" and download the app.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Launch and Configure:</strong> Open the app and accept the terms of service.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Enter Xtream Codes:</strong> Select "Add User" and input your subscription name, username, password, and the server URL to instantly load the massive Forest IPTV channel list.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="android-tv-setup">
        <div className="container">
          <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>How to Install Forest IPTV on Android TV Box</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-6)' }}>
            Because Android offers an open platform, we are widely considered the best IPTV for Android TV. Setup is incredibly fast.
          </p>
          <ul className="body-lg" style={{ color: 'var(--on-surface-variant)', listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Open Google Play Store:</strong> From your Android TV home screen, launch the Play Store.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Search for Your Player:</strong> Search for your preferred app. We highly recommend configuring Forest IPTV TiviMate for the most premium, cable-like TV guide experience.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Install and Open:</strong> Download the app and open it.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Add Playlist:</strong> Select "Add Playlist" and choose the "Xtream Codes API" login method. Input your secure credentials and enjoy the content!</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-alt" id="smart-tv-setup">
        <div className="container">
          <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>How to Install Forest IPTV on Smart TV</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-6)' }}>
            Most modern LG and Samsung Smart TVs have built-in app stores that support IPTV players.
          </p>
          <ul className="body-lg" style={{ color: 'var(--on-surface-variant)', listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Visit Your TV's App Store:</strong> Press the "Home" or "Smart Hub" button on your remote and open the app store.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Search for an IPTV App:</strong> Search for apps like "IBO Player", "Duplex Play", or "Smart IPTV". Install your app of choice.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Locate Your MAC Address:</strong> Open the app to find your TV’s unique "MAC Address" displayed on the screen.</span>
            </li>
            <li style={{ marginBottom: 'var(--space-3)', display: 'flex', gap: '12px' }}>
              <span className="material-icons-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
              <span><strong>Upload Your Playlist:</strong> Visit the app's official website on your computer or phone, enter your TV's MAC Address, and paste the M3U URL provided with your Forest IPTV subscription. Restart the TV app to load your channels.</span>
            </li>
          </ul>
        </div>
      </section>


      {/* Support CTA */}
      <section className="section" id="install-support">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-sm">Need help with installation?</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: 'var(--space-4) auto var(--space-6)' }}>
            Contact our 24/7 support team via WhatsApp or Telegram. We will guide you through the setup step by step.
          </p>
          <a href="https://wa.me/212763569826" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
             Contact Support via WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
