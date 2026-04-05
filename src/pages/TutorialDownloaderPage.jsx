import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function TutorialDownloaderPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install Apps Using Downloader on Firestick",
    "description": "Learn how to easily sideload Forest IPTV Apps using the Downloader App on your Amazon Fire TV Stick.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enable Developer Options",
        "text": "Go to Settings > My Fire TV > Developer Options and turn on Apps from Unknown Sources for Downloader."
      },
      {
        "@type": "HowToStep",
        "name": "Get Downloader App",
        "text": "From the Home screen, find the Amazon App Store and search for 'Downloader'. Install and open it."
      },
      {
        "@type": "HowToStep",
        "name": "Enter Direct Code",
        "text": "Open Downloader, allow permissions, and enter the fast-download code provided by the Forest IPTV team."
      },
      {
        "@type": "HowToStep",
        "name": "Install App",
        "text": "Click Go, wait for the APK to download, and click Install. Then proceed to launch your IPTV app."
      }
    ]
  };

  return (
    <div className="tutorial-page">
      <Helmet>
        <title>How to Sideload Apps on Firestick using Downloader</title>
        <meta name="description" content="Step-by-step guide to sideloading the Forest IPTV Android app or TiviMate on Amazon Firestick via the Downloader App." />
        <link rel="canonical" href="https://www.forestiptv.pro/tutorials/how-to-set-up-downloader" />
        <meta property="og:title" content="Firestick Sideloading Guide | Forest IPTV" />
        <meta property="og:description" content="Learn how to sideload the Forest IPTV app on Amazon Firestick via Downloader." />
        <meta property="og:image" content="https://www.forestiptv.pro/og-image.png" />
        <meta property="og:url" content="https://www.forestiptv.pro/tutorials/how-to-set-up-downloader" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Firestick Setup Guide | Forest IPTV" />
        <meta name="twitter:description" content="Step-by-step sideloading instructions for your Firestick." />
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "How to Setup Downloader",
                "item": "https://www.forestiptv.pro/tutorials/how-to-set-up-downloader"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: 'var(--space-12)' }}>
        <div className="hero__bg-effects">
           <div className="hero__glow hero__glow--1"></div>
        </div>
        <div className="container hero__content" style={{ textAlign: 'center' }}>
          <span className="label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)', display: 'inline-block' }}>Installation Guide</span>
          <h1 className="display-lg hero__title">How to Install Apps via Downloader <span className="hero__title-accent">(Firestick)</span></h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '640px', margin: 'var(--space-4) auto var(--space-6)' }}>
            The Amazon Fire TV Stick restricts non-Amazon apps by default. Learn how to bypass this and sideload our premium streaming client instantly.
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
               <li>An Amazon Firestick connected to your TV.</li>
               <li>An active Amazon account signed in to the Firestick.</li>
               <li>The numerical Downloader code given in your Forest IPTV portal.</li>
            </ul>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 1: Prep Your Firestick Settings</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               On your Firestick home screen, go to the <strong>Settings</strong> icon on the far right.<br/><br/>
               Select <strong>My Fire TV</strong> &gt; <strong>Developer Options</strong>. Make sure "ADB Debugging" is turned ON, and under "Install Unknown Apps", turn it ON for Downloader (you might need to install Downloader first before seeing this exact menu, see Step 2).
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 2: Get the Downloader App</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Press the Home button to return to the main screen. Click on "Find" and then "Search".<br/><br/>
               Type "Downloader". The app should look like a prominent orange icon. Download and install it. If you couldn't enable Developer Options in Step 1, do so now.
            </p>
            
            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 3: Enter the Direct Code</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               Open the Downloader app. Allow access to photos/media if prompted. Click OK on the welcome pop-up.<br/><br/>
               On the Home tab of Downloader, select the URL box where it says <code>http://</code>. Clear it out and enter the <strong>numerical code</strong> provided by our team (for example: <code>123456</code>) and click Go.
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)' }}>Step 4: Install and Delete APK</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>
               The APK file will download automatically. When prompted, select <strong>"Install"</strong>.<br/><br/>
               After successful installation, select "Done". You will return to the Downloader app. Now, choose "Delete" to remove the APK file to free up storage space on your Firestick. You can now launch the newly installed player from the main menu!
            </p>

            <h2 className="headline-md" style={{ marginBottom: 'var(--space-4)', marginTop: 'var(--space-10)' }}>Troubleshooting</h2>
            <div style={{ background: 'var(--surface-container)', padding: 'var(--space-6)', borderRadius: 'var(--radius-md)' }}>
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Developer Options Missing</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Amazon has hidden Developer Options on newer updates. Go to Settings &gt; My Fire TV &gt; About. Click on your Fire TV Stick name exactly 7 times to reveal Developer Options.</p>
               
               <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>"Forbidden" Error or Failed Download</h3>
               <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Ensure you have disabled any ISP shield blocks online or ensure your VPN isn't blocking the download link.</p>
            </div>
         </div>
      </section>

      {/* Outro CTA */}
      <section className="section" style={{ padding: 'var(--space-6) 0 var(--space-12)' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Firestick ready to go?</p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
               <Link to="/buy-iptv-subscription" className="btn btn-primary">Grab Your Subscription</Link>
            </div>
         </div>
      </section>
    </div>
  )
}
