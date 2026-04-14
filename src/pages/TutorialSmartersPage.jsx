import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function TutorialSmartersPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Zyminex on IPTV Smarters Pro",
    "description": "Learn how to easily install and configure IPTV Smarters Pro with your Zyminex subscription.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download IPTV Smarters Pro",
        "text": "Download the app from the Apple App Store, Google Play Store, or via Downloader on Firestick."
      },
      {
        "@type": "HowToStep",
        "name": "Select Login Type",
        "text": "Open the app and select 'Login with Xtream Codes API'."
      },
      {
        "@type": "HowToStep",
        "name": "Enter Credentials",
        "text": "Input any Name, followed by the Username, Password, and Server URL provided in your welcome email."
      },
      {
        "@type": "HowToStep",
        "name": "Start Watching",
        "text": "Click 'Add User' and wait for the channels, VOD, and series to load."
      }
    ]
  };

  return (
    <div className="tutorial-page">
            <Helmet>
        <title>How to Set Upon Smarters Pro (2026 Guide) | Zyminex</title>
        <meta name="description" content="Step-by-step guide to installing Zyminex on IPTV Smarters Pro for Android, iOS, Windows, Mac, and Smart TVs." />
        <link rel="canonical" href="https://www.zyminex.pro/tutorials/how-to-setup-smarters-pro" />
        
        <meta property="og:site_name" content="Zyminex" />
        <meta property="og:title" content="Zyminex — How to Set Upon Smarters Pro (2026 Guide)" />
        <meta property="og:description" content="Step-by-step guide to installing Zyminex on IPTV Smarters Pro for Android, iOS, Windows, Mac, and Smart TVs." />
        <meta property="og:image" content="https://www.zyminex.pro/og-image.png" />
        <meta property="og:url" content="https://www.zyminex.pro/tutorials/how-to-setup-smarters-pro" />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@zyminex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zyminex — How to Set Upon Smarters Pro (2026 Guide)" />
        <meta name="twitter:description" content="Step-by-step guide to installing Zyminex on IPTV Smarters Pro for Android, iOS, Windows, Mac, and Smart TVs." />
        <meta name="twitter:image" content="https://www.zyminex.pro/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: 'var(--space-12)' }}>
        <div className="hero__bg-effects">
           <div className="hero__glow hero__glow--1"></div>
        </div>
        <div className="container hero__content" style={{ textAlign: 'center' }}>
          <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'inline-block' }}>Installation Guide</span>
          <h1 className="display-lg hero__title">How to Set Up Zyminex on Smarters Pro <span className="hero__title-accent">(Step-by-Step)</span></h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '640px', margin: 'var(--space-4) auto var(--space-6)' }}>
            IPTV Smarters Pro is one of the most versatile streaming apps. Follow this guide to get it running on your favorite device.
          </p>
        </div>
      </section>

      {/* Intro CTA */}
      <section className="section section-alt" style={{ padding: 'var(--space-6) 0' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Don't have a playlist yet?</p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
               <Link to="/buy-iptv-subscription" className="btn btn-primary">Get Your Subscription</Link>
               <span style={{color: 'var(--outline)', alignSelf: 'center'}}>or</span>
               <Link to="/iptv-free-trial" className="btn btn-secondary">Try a Free Test Trial</Link>
            </div>
         </div>
      </section>

      {/* Content */}
      <section className="section">
         <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--surface-container-low)', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)' }}>
            
            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)', color: 'var(--primary)' }}>What You Need Before Starting</h2>
            <ul style={{ listStyleType: 'disc', listStylePosition: 'inside', color: 'var(--on-surface)', marginBottom: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
               <li>A compatible device (Android, iOS, Firestick, PC, Mac, or Smart TV).</li>
               <li>Your Zyminex subscription configuration email.</li>
            </ul>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 1: Download Smarters Pro</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Search for "IPTV Smarters Pro" or "Smarters Player Lite" in your device's app store. If you are on Amazon Firestick, you will need to sideload it using the Downloader app.
            </p>
            <img 
              src="/images/tutorials/smarters_pro_interface.png" 
              alt="Smarters Pro App Interface Login Screen" 
              style={{ width: '100%', height: 'auto', aspectRatio: '16/9', borderRadius: 'var(--radius-md)', objectFit: 'cover', marginBottom: 'var(--space-8)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' }} 
            />

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 2: Login via Xtream Codes</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Open the app and accept the Terms of Service. Select <strong>"Login with Xtream Codes API"</strong> from the menu options.
            </p>
            
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Fill out the fields as follows:<br/><br/>
               <strong>Any Name:</strong> Zyminex<br/>
               <strong>Username:</strong> (Found in your email)<br/>
               <strong>Password:</strong> (Found in your email)<br/>
               <strong>URL:</strong> (The server URL link provided)
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 3: Add User and Load Content</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Click <strong>"Add User"</strong>. The app will connect to our servers and download the Live TV, Movies, and Series catalogs. It may take a minute on the first launch.
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)', marginTop: 'var(--space-10)' }}>Troubleshooting</h2>
            <div style={{ background: 'var(--surface-container)', padding: 'var(--space-6)', borderRadius: 'var(--radius-md)' }}>
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>"Invalid Details" Error</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Double-check your Username and Password. They are strictly case-sensitive. Ensure there are no spaces at the end of the server URL.</p>
               
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Blank Screen when Playing</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Navigate to Settings inside Smarters Pro, go to Player Settings, and try toggling the "Hardware Decoder" on or off.</p>
            </div>
         </div>
      </section>

      {/* Outro CTA */}
      <section className="section" style={{ padding: 'var(--space-6) 0 var(--space-12)' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Ready to unlock 22,000+ channels on Smarters Pro?</p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
               <Link to="/buy-iptv-subscription" className="btn btn-primary">Get Your Subscription</Link>
            </div>
         </div>
      </section>
    </div>
  )
}

