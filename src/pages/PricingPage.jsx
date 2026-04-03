import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './PricingPage.css'

const plans = [
  {
    name: '3 Months',
    price: '29.99',
    period: '/ 3 months',
    perMonth: '~$10/mo',
    features: [
      '4K Quality',
      '20,000+ Channels',
      'All Devices',
      'VIP 24/7 Support',
      'Full VOD Library Access',
      'Live PPV Events Included'
    ],
    badge: null,
    highlighted: false,
  },
  {
    name: '12 Months',
    price: '59.99',
    period: '/ year',
    perMonth: '~$5/mo',
    features: [
      '4K Quality',
      '20,000+ Channels',
      'All Devices',
      'VIP 24/7 Support',
      'Full VOD Library Access',
      'Live PPV Events Included'
    ],
    badge: 'Best Value',
    highlighted: true,
  },
  {
    name: '6 Months',
    price: '44.99',
    period: '/ 6 months',
    perMonth: '~$7.50/mo',
    features: [
      '4K Quality',
      '20,000+ Channels',
      'All Devices',
      'VIP 24/7 Support',
      'Full VOD Library Access',
      'Live PPV Events Included'
    ],
    badge: 'Popular',
    highlighted: false,
  },
]

export default function PricingPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Forest IPTV Subscription",
    "description": "Premium 4K IPTV subscription featuring 20,000+ live channels, anti-freeze technology, and zero-buffering streaming. Compatible with Firestick, Smart TV, Android, and more.",
    "brand": {
      "@type": "Brand",
      "name": "Forest IPTV"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "29.99",
      "highPrice": "59.99",
      "priceCurrency": "USD",
      "offerCount": "3",
      "offers": plans.map(p => ({
        "@type": "Offer",
        "name": `Forest IPTV ${p.name} Plan`,
        "price": p.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.forestiptv.pro/buy-iptv-subscription"
      }))
    }
  };

  return (
    <div className="pricing-page" id="pricing-page">
      <Helmet>
        <title>Forest IPTV Pricing | Buy the Best Premium IPTV Subscription</title>
        <meta name="description" content="Explore affordable Forest IPTV pricing plans. Buy your 4K IPTV subscription today and enjoy a buffer-free IPTV provider with massive channel lists and live sports. Get a free trial now!" />
        <link rel="canonical" href="https://www.forestiptv.pro/buy-iptv-subscription" />
        <meta property="og:title" content="Forest IPTV Pricing | Best Premium 4K IPTV Plans" />
        <meta property="og:description" content="Explore affordable Forest IPTV pricing plans. Buy your 4K IPTV subscription today and enjoy buffer-free streaming with 22,000+ channels." />
        <meta property="og:image" content="https://www.forestiptv.pro/og-image.png" />
        <meta property="og:url" content="https://www.forestiptv.pro/buy-iptv-subscription" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forest IPTV Pricing | Premium 4K IPTV Subscription" />
        <meta name="twitter:description" content="Explore affordable Forest IPTV pricing plans starting today. Massive channel lists and buffer-free streaming." />
        <meta name="twitter:image" content="https://www.forestiptv.pro/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="pricing-hero" id="pricing-hero">
        <div className="pricing-hero__glow"></div>
        <div className="container">
          <span className="label-md" style={{ color: 'var(--primary)' }}>Pricing Plans</span>
          <h1 className="display-lg" style={{ marginTop: 'var(--space-3)' }}>Affordable Forest IPTV Pricing: Choose Your Perfect Plan</h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: 'var(--space-4) auto 0' }}>
            Are you tired of skyrocketing cable bills and restrictive, overpriced streaming bundles? You have finally found the ultimate solution. Welcome to the official Forest IPTV pricing page, where cutting the cord doesn’t mean cutting corners on quality. We believe that top-tier entertainment should be accessible and affordable for everyone. Whether you are a casual viewer looking to catch the evening news or a die-hard fan seeking global sports coverage, our transparent plans ensure you only pay for exactly what you need. Review our packages below and discover why so many users are ditching their old cable providers for the future of digital television.
          </p>

          <div className="plans-grid" style={{ marginTop: 'var(--space-12)' }}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card ${plan.highlighted ? 'plan-card--highlighted' : ''}`}
                id={`plan-${plan.name.replace(/\s/g, '-').toLowerCase()}`}
              >
                {plan.badge && (
                  <div className={`plan-card__badge ${plan.highlighted ? 'plan-card__badge--accent' : ''}`}>
                    {plan.highlighted && <span className="material-icons-outlined" style={{ fontSize: '14px' }}>stars</span>}
                    {plan.badge}
                  </div>
                )}
                <h3 className="headline-md">{plan.name}</h3>
                <div className="plan-card__price">
                  <span className="plan-card__currency">$</span>
                  <span className="plan-card__amount">{plan.price}</span>
                </div>
                <p className="body-md" style={{ color: 'var(--outline)' }}>{plan.perMonth}</p>
                <ul className="plan-card__features">
                  {plan.features.map((feat) => (
                    <li key={feat} className="plan-card__feature">
                      <span className="material-icons-outlined" style={{ fontSize: '18px', color: 'var(--primary)' }}>check_circle</span>
                      <span className="body-md">{feat}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/212763569826?text=${encodeURIComponent(`Hello Forest IPTV, I am interested in ordering the ${plan.name} plan for $${plan.price}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-lg ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`} 
                  style={{ width: '100%' }}
                >
                  {plan.highlighted ? 'Get Best Value' : 'Order Now'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="section" id="plans-section">
        <div className="container">
          <div className="section-header">
             <h2 className="display-sm">Flexible Forest IPTV Pricing for Every Budget</h2>
             <p className="body-md">
               Finding the right entertainment package shouldn't be complicated. Our Forest IPTV pricing structure is completely straightforward—no hidden fees, no hardware rentals, and absolutely no surprise cancellation charges.
               <br /><br />
               When you choose to buy Forest IPTV, you unlock instant access to a massive library of global content. We offer flexible durations to suit your specific needs. You can start small with a Forest IPTV 1 month package to test the waters, or you can maximize your savings by locking in our heavily discounted 6-month or 12-month annual plans. No matter which tier you select, every single package qualifies as a full 4K IPTV subscription, ensuring you get the absolute highest resolution available without paying extra for premium quality.
             </p>
          </div>
          <div className="comparison-container">
            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Total Price</th>
                    <th>Per Month</th>
                    <th>Savings vs 3-Month Rate</th>
                    <th>Connections</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-plan">3 Months</td>
                    <td className="col-price">$29.99</td>
                    <td>~$10/mo</td>
                    <td className="col-savings">— Baseline</td>
                    <td>1</td>
                    <td className="col-best-for">Short-term flexibility</td>
                  </tr>
                  <tr>
                    <td className="col-plan">6 Months <span className="plan-icon">⭐</span></td>
                    <td className="col-price">$44.99</td>
                    <td>~$7.50/mo</td>
                    <td className="col-savings">Save $15.00</td>
                    <td>1</td>
                    <td className="col-best-for">Best balance of price & value</td>
                  </tr>
                  <tr>
                    <td className="col-plan">12 Months <span className="plan-icon">🏆</span></td>
                    <td className="col-price">$59.99</td>
                    <td>~$5/mo</td>
                    <td className="col-savings">Save $60.00</td>
                    <td>1</td>
                    <td className="col-best-for">Maximum savings & value</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Multi Connection */}
      <section className="section section-alt" id="multi-connection">
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="display-sm">What Makes Us the Best Premium IPTV Service?</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: 'var(--space-4) auto var(--space-6)' }}>
              It’s not just about affordability; it’s about unbeatable reliability. When you purchase a Forest IPTV subscription, you are investing in top-of-the-line server architecture. We have meticulously built our network to be a 100% buffer-free IPTV provider, meaning you can say goodbye to the endless loading screens that plague lesser services.
              <br /><br />
              Thanks to our proprietary anti-freezing IPTV service technology, your streams remain stable even during peak viewing hours. This makes us the absolute best IPTV for live sports. You will never miss a crucial goal, a game-winning touchdown, or a highly anticipated pay-per-view fight again. Plus, your subscription grants you full access to our continuously updated Forest IPTV channel list, featuring tens of thousands of live global channels, blockbuster VODs, and complete TV series box sets.
            </p>
            <Link to="/contact" className="btn btn-secondary">Request Custom Package</Link>
         </div>
      </section>

      {/* Trust & Included */}
      <section className="section" id="pricing-trust">
         <div className="container">
            <h2 className="display-sm" style={{ textAlign: 'center' }}>Seamless Setup on All Your Favorite Devices</h2>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '800px', margin: 'var(--space-4) auto', textAlign: 'center' }}>
              We have made sure that accessing your content is as simple as turning on your television. Our service is incredibly versatile. If you prefer streaming on the big screen, you will find that we are the top-rated Forest IPTV for Firestick provider, and widely considered the best IPTV for Android TV boxes on the market.
              <br /><br />
              Setup is a breeze. After checkout, you will receive a comprehensive Forest IPTV setup guide directly to your email. This guide includes easy-to-follow instructions for popular applications, including a quick Forest IPTV Smarters Pro setup walkthrough and details on how to configure your playlist using Forest IPTV TiviMate.
            </p>
            <div className="pricing-trust-badges" style={{ marginTop: 'var(--space-8)' }}>
              <div className="pricing-trust-badge">
                <span className="material-icons-outlined">verified_user</span>
                <span className="label-lg">99.9% Uptime Server</span>
              </div>
              <div className="pricing-trust-badge">
                <span className="material-icons-outlined">timer</span>
                <span className="label-lg">Instant Activation</span>
              </div>
              <div className="pricing-trust-badge">
                <span className="material-icons-outlined">tv</span>
                <span className="label-lg">All Device Guides (<Link to="/setup-guides" style={{color: 'var(--primary)', textDecoration: 'underline'}}>View</Link>)</span>
              </div>
            </div>
         </div>
         <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <h2 className="display-sm">Not Ready to Commit? Try Before You Buy</h2>
            <p className="body-md" style={{color: 'var(--on-surface-variant)', marginTop: 'var(--space-3)'}}>
              We understand that you might have been burned by low-quality streaming providers in the past. If you are currently searching for a reliable Forest IPTV alternative because your last provider let you down, we want to prove our quality to you completely risk-free.
              <br /><br />
              Before you make a purchase, we invite you to claim a Forest IPTV free trial. This 24-hour IPTV trial gives you full, unrestricted access to our entire network. Test our sports channels, browse the VOD library, and experience our anti-buffering technology firsthand before you spend a single dime.
            </p>
            <div style={{ marginTop: 'var(--space-6)' }}>
               <span className="material-icons-outlined" style={{fontSize: '36px', margin: '0 10px', color: 'var(--outline)'}}>credit_card</span>
               <span className="material-icons-outlined" style={{fontSize: '36px', margin: '0 10px', color: 'var(--outline)'}}>payments</span>
               <span className="material-icons-outlined" style={{fontSize: '36px', margin: '0 10px', color: 'var(--outline)'}}>currency_bitcoin</span>
            </div>
            
            <p className="body-sm" style={{marginTop: 'var(--space-12)', color: 'var(--outline)'}}>Still unsure? <Link to="/iptv-free-trial" style={{color: 'var(--primary)', textDecoration: 'underline'}}>Grab a 24-hr trial here.</Link></p>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt" id="pricing-faq">
         <div className="container">
            <h2 className="display-sm" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Frequently Asked Questions</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
               <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 className="headline-sm">Q1: Is it safe to buy Forest IPTV online?</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--space-2)' }}>A: Absolutely. We use highly secure, encrypted payment gateways to ensure your personal and financial data is completely protected during checkout.</p>
               </div>
               <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 className="headline-sm">Q2: What happens after I purchase my Forest IPTV 1 month or annual plan?</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--space-2)' }}>A: Delivery is automated and instant! Within minutes of your payment being confirmed, you will receive an email containing your account credentials, playlist URLs, and a link to the Forest IPTV setup guide.</p>
               </div>
               <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 className="headline-sm">Q3: Can I watch on multiple devices at the same time?</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--space-2)' }}>A: Yes! While our standard Forest IPTV subscription comes with one connection, you have the option to add additional connections at checkout so your entire family can stream on different screens simultaneously.</p>
               </div>
               <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 className="headline-sm">Q4: Does the Forest IPTV channel list change?</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--space-2)' }}>A: We are constantly updating our library. Our team works daily to add new VODs, update television series episodes, and ensure that all live broadcasting links are fully functional.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" id="pricing-cta">
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="display-md">Ready to Transform Your Entertainment Experience?</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '700px', margin: 'var(--space-4) auto var(--space-8)' }}>
               The time to stop overpaying for subpar television is right now. Secure your access to the ultimate streaming hub and join thousands of satisfied cord-cutters worldwide.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
               <a href="https://wa.me/212763569826" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Buy Now</a>
               <Link to="/iptv-free-trial" className="btn btn-secondary btn-lg">Start Free Test 🎁</Link>
            </div>
         </div>
      </section>

    </div>
  )
}
