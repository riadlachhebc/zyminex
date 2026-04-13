
export default function PrivacyPage() {
  return (
    <div className="legal-page" id="privacy-page">
      <section className="legal-hero">
        <div className="legal-hero__glow"></div>
        <div className="container">
          <h1 className="display-lg">Privacy Policy</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>Last updated: January 2025</p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-content">
          <h2 className="headline-md">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you register for an account, subscribe to our newsletter, request support, or otherwise communicate with us. This may include your name, email address, payment information, and device details necessary for providing the service.</p>

          <h2 className="headline-md">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, communicate with you about your account, process transactions, and send you technical notices and support messages.</p>

          <h2 className="headline-md">3. Information Sharing</h2>
          <p>We do not share your personal information with third parties except as necessary to process your payments or comply with legal obligations. Your privacy and data security are our top priorities.</p>

          <h2 className="headline-md">4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

          <h2 className="headline-md">5. Your Choices</h2>
          <p>You may update, correct, or delete your account information at any time by logging into your account or contacting us. You may also opt out of receiving promotional communications from us.</p>
        </div>
      </section>
    </div>
  )
}


