import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const trialFeatures = [
  { icon: 'timer', title: 'Free Test Trial access', desc: 'Complete access to our entire premium library.' },
  { icon: 'tv', title: '20,000+ channels', desc: 'Global coverage including sports and cinema.' },
  { icon: 'hd', title: '4K/8K quality', desc: 'Crystal clear streaming focusing on the Anti-Freezing experience.' },
  { icon: 'verified_user', title: 'No commitment', desc: 'No credit card required for the trial.' },
]

const steps = [
  { num: '01', title: 'Request', desc: 'Fill out the form with your correct device type.' },
  { num: '02', title: 'Receive', desc: 'Check your email for custom setup instructions.' },
  { num: '03', title: 'Stream', desc: 'Log in and enjoy the massive library of content.' },
]

export default function FreeTrialPage() {
  const [formData, setFormData] = useState({ name: '', email: '', device: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello Zyminex, I would like to request a Free Test Trial.\n\nName: ${formData.name}\nEmail: ${formData.email}\nDevice: ${formData.device}`
    const waUrl = `https://wa.me/212763569826?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
    setFormData({ name: '', email: '', device: '' })
  }

  return (
    <div className="trial-page" id="trial-page">
            <Helmet>
        <title>IPTV Free Test Trial — Test Our 22,000+ Channels | Zyminex</title>
        <meta name="description" content="Claim your IPTV Free Test Trial with Zyminex today. Test our buffer-free servers, 4K sports channels, and VOD library before you buy. Instant activation!" />
        <link rel="canonical" href="https://www.zyminex.pro/iptv-free-trial" />
        
        <meta property="og:site_name" content="Zyminex" />
        <meta property="og:title" content="Zyminex — IPTV Free Test Trial — Test Our 22,000+ Channels" />
        <meta property="og:description" content="Claim your IPTV Free Test Trial with Zyminex today. Test our buffer-free servers, 4K sports channels, and VOD library before you buy. Instant activation!" />
        <meta property="og:image" content="https://www.zyminex.pro/og-image.png" />
        <meta property="og:url" content="https://www.zyminex.pro/iptv-free-trial" />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@zyminex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zyminex — IPTV Free Test Trial — Test Our 22,000+ Channels" />
        <meta name="twitter:description" content="Claim your IPTV Free Test Trial with Zyminex today. Test our buffer-free servers, 4K sports channels, and VOD library before you buy. Instant activation!" />
        <meta name="twitter:image" content="https://www.zyminex.pro/og-image.png" />
      </Helmet>

      <section className="trial-hero" id="trial-hero">
        <div className="trial-hero__glow"></div>
        <div className="container">
          <span className="label-md" style={{ color: 'var(--tertiary)' }}>Risk-Free Testing</span>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-3)' }}>Claim Your Zyminex Free Test Trial</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: 'var(--space-4) auto 0' }}>
            Witness the pinnacle of streaming technology. Claim your Free Test Trial to test our anti-freezing technology before committing.
          </p>
        </div>
      </section>

      <section className="section" id="trial-content">
        <div className="container">
          <div className="trial-grid">
            {/* Form */}
            <form className="trial-form" onSubmit={handleSubmit} id="trial-form">
              <h2 className="headline-md">Request Free Test Trial Access</h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-5)' }}>
                Fill out the form below. You will be redirected to WhatsApp to send your request instantly to our support team.
              </p>
              <div className="trial-form__group">
                <label className="label-md" htmlFor="trial-name">Full Name</label>
                <input type="text" id="trial-name" name="name" className="input-field" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="trial-form__group">
                <label className="label-md" htmlFor="trial-email">Email Address</label>
                <input type="email" id="trial-email" name="email" className="input-field" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="trial-form__group">
                <label className="label-md" htmlFor="trial-device">Device Type</label>
                <select id="trial-device" name="device" className="input-field" value={formData.device} onChange={handleChange} required>
                  <option value="">Select your device</option>
                  <option value="firestick">Amazon Fire Stick</option>
                  <option value="android">Android Phone/Tablet</option>
                  <option value="ios">iPhone/iPad</option>
                  <option value="smarttv">Smart TV (Samsung/LG)</option>
                  <option value="androidtv">Android TV Box</option>
                  <option value="pc">Windows/Mac</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <span className="material-icons-outlined">play_circle</span>
                Start Your Free Test Trial
              </button>
            </form>

            {/* Features */}
            <div className="trial-features">
              <h2 className="headline-md" style={{ marginBottom: 'var(--space-6)' }}>Why Test Zyminex?</h2>
              <div className="trial-features-grid">
                {trialFeatures.map((f) => (
                  <div key={f.title} className="trial-feature-card">
                    <div className="trial-feature-card__icon">
                      <span className="material-icons-outlined">{f.icon}</span>
                    </div>
                    <h3 className="title-md">{f.title}</h3>
                    <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section section-alt" id="trial-how">
        <div className="container">
          <div className="section-header">
            <h2 className="display-sm">How to Get Your Free IPTV Trial in 3 Steps</h2>
          </div>
          <div className="trial-steps">
            {steps.map((s, i) => (
              <div key={s.num} className="trial-step">
                <div className="trial-step__num">{s.num}</div>
                <h3 className="title-md">{s.title}</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="section" id="trial-limitations">
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="display-sm">Trial Limitations & Rules</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: 'var(--space-4) auto var(--space-6)' }}>
              To ensure network stability for our paying customers, free trials are strictly limited to one per user/IP address. We employ advanced monitoring to prevent trial abuse.
            </p>
            <p className="body-md" style={{ color: 'var(--outline)' }}>
               Ready to commit? <Link to="/buy-iptv-subscription" style={{color: 'var(--primary)', textDecoration: 'underline'}}>View our Premium Subscription Plans</Link> and skip the trial.
            </p>
         </div>
      </section>
    </div>
  )
}


