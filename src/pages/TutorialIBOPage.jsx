import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function TutorialIBOPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Zyminex on IBO Player",
    "description": "Learn how to easily install and configure IBO Player on your Smart TV with your Zyminex subscription.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download IBO Player",
        "text": "Find and install IBO Player from the LG Content Store or Samsung App Store."
      },
      {
        "@type": "HowToStep",
        "name": "Get Your MAC Address",
        "text": "Open IBO Player and note down the Device MAC address and Device Key displayed on screen."
      },
      {
        "@type": "HowToStep",
        "name": "Upload Playlist",
        "text": "Visit the official IBO Player website portal to upload your Zyminex M3U link using your MAC address."
      },
      {
        "@type": "HowToStep",
        "name": "Restart App",
        "text": "Close and reopen IBO Player on your TV to load the newly added channels."
      }
    ]
  };

  return (
    <div className="tutorial-page">
            <Helmet>
        <title>How to Set Upon IBO Player (2026 Guide) | Zyminex</title>
        <meta name="description" content="Step-by-step guide to installing Zyminex on IBO Player for Samsung Tizen, LG webOS, and Android TVs." />
        <link rel="canonical" href="https://www.zyminex.pro/tutorials/how-to-setup-ibo-player" />
        
        <meta property="og:site_name" content="Zyminex" />
        <meta property="og:title" content="Zyminex — How to Set Upon IBO Player (2026 Guide)" />
        <meta property="og:description" content="Step-by-step guide to installing Zyminex on IBO Player for Samsung Tizen, LG webOS, and Android TVs." />
        <meta property="og:image" content="https://www.zyminex.pro/og-image.png" />
        <meta property="og:url" content="https://www.zyminex.pro/tutorials/how-to-setup-ibo-player" />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@zyminex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zyminex — How to Set Upon IBO Player (2026 Guide)" />
        <meta name="twitter:description" content="Step-by-step guide to installing Zyminex on IBO Player for Samsung Tizen, LG webOS, and Android TVs." />
        <meta name="twitter:image" content="https://www.zyminex.pro/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: 'var(--space-12)' }}>
        <div className="hero__bg-effects">
           <div className="hero__glow hero__glow--1"></div>
        </div>
        <div className="container hero__content" style={{ textAlign: 'center' }}>
          <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'inline-block' }}>Installation Guide</span>
          <h1 className="display-lg hero__title">How to Set Up Zyminex on IBO Player <span className="hero__title-accent">(Step-by-Step)</span></h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '640px', margin: 'var(--space-4) auto var(--space-6)' }}>
            IBO Player is widely considered the best choice for Samsung and LG Smart TVs. Learn how to configure your Zyminex playlist seamlessly.
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
               <li>A Samsung Tizen or LG webOS Smart TV (or any Android TV).</li>
               <li>A mobile phone or computer to access the IBO Player website.</li>
               <li>Your Zyminex M3U Playlist URL.</li>
            </ul>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 1: Download IBO Player</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Turn on your Smart TV, navigate to the App Store (LG Content Store or Samsung Apps), search for "IBO Player", and install it. 
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 2: Obtain MAC Address</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Open the app on your TV. The main screen will display your <strong>Device MAC Address</strong> and your <strong>Device Key</strong>. Keep these visible on your screen.
            </p>
            
            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 3: Upload Zyminex Playlist</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               On your phone or PC, go to the official IBO Player upload portal (website usually listed on the app screen).<br/><br/>
               Enter the Device MAC Address and Device Key. Click on "Add Playlist". Give it a name (like Zyminex) and paste your long M3U playlist link provided in your welcome email. Save the playlist.
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 4: Restart App and Enjoy</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Return to your TV, close the IBO Player app entirely, and reopen it. Your Zyminex channels and VODs will now begin loading.
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)', marginTop: 'var(--space-10)' }}>Troubleshooting</h2>
            <div style={{ background: 'var(--surface-container)', padding: 'var(--space-6)', borderRadius: 'var(--radius-md)' }}>
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>IBO Player Trial Expiration</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Note that IBO Player is a premium app that requires a one-time activation fee (usually around €8) to the app developer after a 7-day trial. This is separate from your Zyminex subscription.</p>
               
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Playlist Missing</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>If your channels do not show up, press the "Reload" button on the TV remote within the app, or double-check that your MAC address was entered without typos on the upload portal.</p>
            </div>
         </div>
      </section>

      {/* Outro CTA */}
      <section className="section" style={{ padding: 'var(--space-6) 0 var(--space-12)' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Ready to unlock amazing TV directly on your Smart screen?</p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
               <Link to="/buy-iptv-subscription" className="btn btn-primary">Get Your Subscription</Link>
            </div>
         </div>
      </section>
    </div>
  )
}

