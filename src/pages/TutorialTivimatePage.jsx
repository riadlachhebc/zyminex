import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function TutorialTivimatePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Zyminex on TiviMate",
    "description": "Learn how to easily install and configure the TiviMate app with your Zyminex subscription using Xtream Codes.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Install TiviMate",
        "text": "Download TiviMate directly from the Google Play Store on your Android TV or use Downloader on Firestick to install the APK."
      },
      {
        "@type": "HowToStep",
        "name": "Add Playlist via Xtream Codes",
        "text": "Open TiviMate, go to 'Add Playlist', and select 'Xtream Codes Login'."
      },
      {
        "@type": "HowToStep",
        "name": "Enter Details",
        "text": "Input the Server URL, Username, and Password provided in your Zyminex welcome email, then click Next."
      },
      {
        "@type": "HowToStep",
        "name": "Wait for EPG Download",
        "text": "Allow a few minutes for the TV Guide and channel list to process. The app is now ready to use."
      }
    ]
  };

  return (
    <div className="tutorial-page">
            <Helmet>
        <title>How to Set Upon TiviMate (2026 Guide) | Zyminex</title>
        <meta name="description" content="Follow our step-by-step guide to configure Zyminex on TiviMate using Xtream Codes API or M3U playlist." />
        <link rel="canonical" href="https://www.zyminex.pro/tutorials/how-to-setup-tivimate" />
        
        <meta property="og:site_name" content="Zyminex" />
        <meta property="og:title" content="Zyminex — How to Set Upon TiviMate (2026 Guide)" />
        <meta property="og:description" content="Follow our step-by-step guide to configure Zyminex on TiviMate using Xtream Codes API or M3U playlist." />
        <meta property="og:image" content="https://www.zyminex.pro/og-image.png" />
        <meta property="og:url" content="https://www.zyminex.pro/tutorials/how-to-setup-tivimate" />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@zyminex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zyminex — How to Set Upon TiviMate (2026 Guide)" />
        <meta name="twitter:description" content="Follow our step-by-step guide to configure Zyminex on TiviMate using Xtream Codes API or M3U playlist." />
        <meta name="twitter:image" content="https://www.zyminex.pro/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: 'var(--space-12)' }}>
        <div className="hero__bg-effects">
           <div className="hero__glow hero__glow--1"></div>
        </div>
        <div className="container hero__content" style={{ textAlign: 'center' }}>
          <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'inline-block' }}>Installation Guide</span>
          <h1 className="display-lg hero__title">How to Set Up Zyminex on TiviMate <span className="hero__title-accent">(Step-by-Step)</span></h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '640px', margin: 'var(--space-4) auto var(--space-6)' }}>
            TiviMate offers the most premium, cable-like viewing experience. Follow this simple guide to deploy your streaming line.
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
               <Link to="/iptv-free-trial" className="btn btn-secondary">Try a Free Trial</Link>
            </div>
         </div>
      </section>

      {/* Content */}
      <section className="section">
         <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--surface-container-low)', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)' }}>
            
            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)', color: 'var(--primary)' }}>What You Need Before Starting</h2>
            <ul style={{ listStyleType: 'disc', listStylePosition: 'inside', color: 'var(--on-surface)', marginBottom: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
               <li>An Android TV Box, Nvidia Shield, or Amazon Firestick.</li>
               <li>Your Zyminex subscription email (containing your Server URL, Username, and Password).</li>
               <li>An active internet connection.</li>
            </ul>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 1: Download and Install TiviMate</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               If you are on an Android TV device, search for "TiviMate IPTV Player" in the Google Play Store and click Install.
               If you are using a Firestick, open your Downloader app and enter the shortcode for TiviMate.
            </p>
            {/* Placeholder for screenshot */}
            <div style={{ width: '100%', height: '300px', background: 'var(--surface-container-highest)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--outline)', marginBottom: 'var(--space-8)' }}>
               [Screenshot: TiviMate App Icon in App Store]
            </div>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 2: Login via Xtream Codes API</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Open the TiviMate app. Select <strong>"Add Playlist"</strong>. From the options provided, choose <strong>"Xtream Codes login"</strong>. This is highly recommended over M3U links.
            </p>
            {/* Placeholder for screenshot */}
            <div style={{ width: '100%', height: '300px', background: 'var(--surface-container-highest)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--outline)', marginBottom: 'var(--space-8)' }}>
               [Screenshot: Selecting Xtream Codes Login screen]
            </div>
            
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Enter the Server Address, Username, and Password exactly as they appear in your welcome email. Make sure "Include VOD" is enabled.
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 3: Configuring the EPG (TV Guide)</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Click "Next" or "Process". TiviMate will connect to the server, download the latest channel list, and import the Electronic Program Guide (EPG). Depending on your internet connection, this may take 1-3 minutes.
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)', marginTop: 'var(--space-10)' }}>Troubleshooting Common TiviMate Issues</h2>
            <div style={{ background: 'var(--surface-container)', padding: 'var(--space-6)', borderRadius: 'var(--radius-md)' }}>
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>"Playlist Could Not Be Updated"</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>This usually means there is a typo in your server URL or credentials. Double-check for extra spaces.</p>
               
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>No EPG Data</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Navigate to Settings &gt; EPG &gt; Update EPG manually. If it still fails, contact support to reset your line.</p>
            </div>
         </div>
      </section>

      {/* Outro CTA */}
      <section className="section" style={{ padding: 'var(--space-6) 0 var(--space-12)' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Ready to unlock TiviMate's full potential?</p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
               <Link to="/buy-iptv-subscription" className="btn btn-primary">Get Your Subscription</Link>
            </div>
         </div>
      </section>
    </div>
  )
}

