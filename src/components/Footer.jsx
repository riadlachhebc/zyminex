import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      {/* CTA Band */}
      <div className="footer__cta-band">
        <div className="container footer__cta-inner">
          <h2 className="display-sm">Ready to upgrade your streaming?</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '520px', margin: '0 auto' }}>
            Join over 50,000 users who have ditched traditional cable for the future of streaming.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
            <Link to="/buy-iptv-subscription" className="btn btn-primary btn-lg">Choose Your Plan</Link>
            <Link to="/iptv-free-trial" className="btn btn-secondary btn-lg">Start Free Test 🎁</Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="material-icons-outlined" style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>play_circle</span>
              <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: '1.25rem' }}>
                Zyminex
              </span>
            </div>
            <p className="body-md" style={{ color: 'var(--outline)', marginTop: 'var(--space-3)' }}>
              Premium 4K IPTV streaming. Blazing-fast delivery, rock-solid uptime.
            </p>
            <div className="footer__socials">
              <a 
                href="https://wa.me/212763569826" 
                className="footer__social-link" 
                aria-label="WhatsApp" 
                id="footer-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-icons-outlined">chat</span>
              </a>
              <a 
                href="mailto:contact@zyminex.pro" 
                className="footer__social-link" 
                aria-label="Email" 
                id="footer-email"
              >
                <span className="material-icons-outlined">email</span>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="label-md footer__col-title">Navigate</h4>
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/buy-iptv-subscription" className="footer__link">Pricing</Link>
            <Link to="/setup-guides" className="footer__link">Installation</Link>
            <Link to="/faq" className="footer__link">FAQ</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
            <Link to="/iptv-reseller-panel" className="footer__link">Reseller Program</Link>
          </div>

          <div className="footer__col">
            <h4 className="label-md footer__col-title">Support</h4>
            <Link to="/iptv-free-trial" className="footer__link">Free Test Trial</Link>
            <Link to="/faq" className="footer__link">Help Center</Link>
            <Link to="/setup-guides" className="footer__link">Setup Guides</Link>
            <Link to="/contact" className="footer__link">Support Ticket</Link>
          </div>

          <div className="footer__col">
            <h4 className="label-md footer__col-title">Legal</h4>
            <Link to="/terms" className="footer__link">Terms of Service</Link>
            <Link to="/privacy" className="footer__link">Privacy Policy</Link>
            <Link to="/refund" className="footer__link">Refund Policy</Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="body-md" style={{ color: 'var(--outline)' }}>
            © 2026 Zyminex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

