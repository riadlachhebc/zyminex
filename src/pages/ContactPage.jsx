import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hello Zyminex Support,\n\nName: ${formData.name}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/212763569826?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
    setFormData({ name: formData.name, email: formData.email, subject: '', message: '' })
  }

  return (
    <div className="contact-page" id="contact-page">
            <Helmet>
        <title>Contact24/7 Support via WhatsApp | Zyminex</title>
        <meta name="description" content="Get 24/7 support from Zyminex. Contact us via WhatsApp for instant help with setup, billing, or technical issues." />
        <link rel="canonical" href="https://www.zyminex.pro/contact" />
        
        <meta property="og:site_name" content="Zyminex" />
        <meta property="og:title" content="Zyminex — Contact24/7 Support via WhatsApp" />
        <meta property="og:description" content="Get 24/7 support from Zyminex. Contact us via WhatsApp for instant help with setup, billing, or technical issues." />
        <meta property="og:image" content="https://www.zyminex.pro/og-image.png" />
        <meta property="og:url" content="https://www.zyminex.pro/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@zyminex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zyminex — Contact24/7 Support via WhatsApp" />
        <meta name="twitter:description" content="Get 24/7 support from Zyminex. Contact us via WhatsApp for instant help with setup, billing, or technical issues." />
        <meta name="twitter:image" content="https://www.zyminex.pro/og-image.png" />
      </Helmet>

      <section className="contact-hero" id="contact-hero">
        <div className="contact-hero__glow"></div>
        <div className="container">
          <span className="label-md" style={{ color: 'var(--primary)' }}>Support</span>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-3)' }}>Contact Zyminex Support</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: 'var(--space-4) auto 0' }}>
            Our support team is available 24 hours a day, 7 days a week. Whether you need help with installation, have a billing question, or are experiencing technical issues — we are always just one message away.
          </p>
        </div>
      </section>

      <section className="section" id="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <span className="material-icons-outlined">schedule</span>
                </div>
                <div>
                  <h3 className="title-md">Response Times</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>We typically respond within 5–15 minutes during peak hours and within 30 minutes at night. Our goal is to get you streaming as fast as possible.</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <span className="material-icons-outlined">help_outline</span>
                </div>
                <div>
                  <h3 className="title-md">Before You Contact Us</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-4)' }}>Check our FAQ page first — many common questions are already answered there. If you still need help, we are happy to assist.</p>
                  <Link to="/faq" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                    View FAQ First
                  </Link>
                </div>
              </div>

              <div className="contact-whatsapp">
                <h3 className="headline-md">How to Reach Us</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-5)' }}>
                  We currently offer support through WhatsApp for the fastest response times. Simply send us a message and our team will respond within minutes.
                </p>
                <a 
                  href={`https://wa.me/212763569826?text=${encodeURIComponent('Hello Zyminex Support, I am contacting you from the contact page for assistance.')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-lg" 
                  id="contact-whatsapp-btn" 
                  style={{ width: '100%' }}
                >
                  <span className="material-icons-outlined">chat</span>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <h3 className="headline-md" style={{ marginBottom: 'var(--space-3)' }}>What We Can Help With</h3>
              <ul className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--space-6)', paddingLeft: 'var(--space-5)' }}>
                <li>Setting up IPTV on your device</li>
                <li>Troubleshooting buffering or connection issues</li>
                <li>Account activation and credentials</li>
                <li>Payment and subscription questions</li>
                <li>Upgrading or changing your plan</li>
                <li>General IPTV questions</li>
              </ul>
              
              <div className="contact-form__group">
                <label className="label-md" htmlFor="contact-name">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="input-field"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form__group">
                <label className="label-md" htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="input-field"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form__group">
                <label className="label-md" htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className="input-field"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form__group">
                <label className="label-md" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="input-field"
                  placeholder="Describe your issue or question..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <span className="material-icons-outlined">chat</span>
                Start Chat on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}


