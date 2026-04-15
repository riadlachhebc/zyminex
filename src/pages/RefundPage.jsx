
export default function RefundPage() {
  return (
    <div className="legal-page" id="refund-page">
      <section className="legal-hero">
        <div className="legal-hero__glow"></div>
        <div className="container">
          <h1 className="display-lg">Refund Policy</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>Last updated: January 2025</p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-content">
          <h2 className="headline-md">1. Money-Back Guarantee</h2>
          <p>We stand behind the quality of Zyminex. If you are not completely satisfied with our service, we offer a 7-day money-back guarantee for all new subscriptions.</p>

          <h2 className="headline-md">2. Eligibility</h2>
          <p>To be eligible for a refund, you must request it within 7 days of your initial purchase. This policy applies strictly to the first purchase of a subscription and does not apply to renewals or subsequent purchases.</p>

          <h2 className="headline-md">3. How to Request a Refund</h2>
          <p>To request a refund, please contact our support team at support@zyminex.pro or open a ticket through your account dashboard. Include your order number and the email address associated with your account.</p>

          <h2 className="headline-md">4. Processing Time</h2>
          <p>Refunds will be processed back to the original method of payment. Please allow 5-10 business days for the credit to appear on your statement, depending on your financial institution.</p>

          <h2 className="headline-md">5. Exceptions</h2>
          <p>We reserve the right to refuse a refund if we detect abuse of our policy, such as repeated refund requests or violations of our Terms of Service.</p>
        </div>
      </section>
    </div>
  )
}


