import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function CompetitorPage() {
  return (
    <div className="competitor-page" id="competitor-page">
            <Helmet>
        <title>The Best iMax IPTV Alternative in 2026 | Zyminex</title>
        <meta name="description" content="Frustrated with iMax IPTV buffering or poor customer support? Discover why Zyminex is the #1 alternative for 4K streaming and reliable uptime." />
        <link rel="canonical" href="https://www.zyminex.pro" />
        
        <meta property="og:site_name" content="Zyminex" />
        <meta property="og:title" content="Zyminex — The Best iMax IPTV Alternative in 2026" />
        <meta property="og:description" content="Frustrated with iMax IPTV buffering or poor customer support? Discover why Zyminex is the #1 alternative for 4K streaming and reliable uptime." />
        <meta property="og:image" content="https://www.zyminex.pro/og-image.png" />
        <meta property="og:url" content="https://www.zyminex.pro" />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@zyminex" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zyminex — The Best iMax IPTV Alternative in 2026" />
        <meta name="twitter:description" content="Frustrated with iMax IPTV buffering or poor customer support? Discover why Zyminex is the #1 alternative for 4K streaming and reliable uptime." />
        <meta name="twitter:image" content="https://www.zyminex.pro/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: 'var(--space-12)' }}>
        <div className="hero__bg-effects">
           <div className="hero__glow hero__glow--2"></div>
        </div>
        <div className="container hero__content" style={{ textAlign: 'center' }}>
          <span className="label-md" style={{ color: 'var(--tertiary)', marginBottom: 'var(--space-4)', display: 'inline-block' }}>Provider Comparison</span>
          <h1 className="display-lg hero__title">Looking for an iMax IPTV Alternative? <br/><span className="hero__title-accent">Try Zyminex</span></h1>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '640px', margin: 'var(--space-4) auto var(--space-6)' }}>
            If you're tired of buffering during major sporting events or unresponsive customer support, it’s time to switch to the most stable network of 2026.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
             <Link to="/iptv-free-trial" className="btn btn-primary btn-lg">Get Your Free Test Trial</Link>
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="section">
         <div className="container">
            <h2 className="display-sm" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Why Users Are Switching to Zyminex</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
               <div className="card" style={{ padding: 'var(--space-6)', background: 'var(--surface-container-low)', borderRadius: 'var(--radius-xl)' }}>
                 <span className="material-icons-outlined" style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>sports_esports</span>
                 <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>No Big-Game Buffering</h3>
                 <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Other services collapse during the Super Bowl or Champions League. Our Load Balancing handles peak traffic effortlessly.</p>
               </div>
               <div className="card" style={{ padding: 'var(--space-6)', background: 'var(--surface-container-low)', borderRadius: 'var(--radius-xl)' }}>
                 <span className="material-icons-outlined" style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>support_agent</span>
                 <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Responsive Support</h3>
                 <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>Stop waiting 3 days for an email reply. Our technical support team responds within minutes via live chat or ticket.</p>
               </div>
               <div className="card" style={{ padding: 'var(--space-6)', background: 'var(--surface-container-low)', borderRadius: 'var(--radius-xl)' }}>
                 <span className="material-icons-outlined" style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>update</span>
                 <h3 className="title-md" style={{ marginBottom: 'var(--space-2)' }}>Constantly Updated VODs</h3>
                 <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>We don't leave dead links in our library. Series and movies are updated weekly in pristine 4K resolution.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Comparison Table */}
      <section className="section section-alt">
         <div className="container">
            <h2 className="display-sm" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Zyminex vs. iMax IPTV: Feature Comparison</h2>
            
            <div style={{ overflowX: 'auto', maxWidth: '800px', margin: '0 auto', background: 'var(--surface-container-lowest)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)' }}>
               <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: 'var(--on-surface)' }}>
                  <thead>
                     <tr style={{ borderBottom: '2px solid var(--surface-container)' }}>
                        <th style={{ padding: 'var(--space-3) var(--space-4)' }}>Feature</th>
                        <th style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--primary)', fontWeight: 800 }}>Zyminex</th>
                        <th style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--outline)', fontWeight: 400 }}>iMax IPTV</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr style={{ borderBottom: '1px solid var(--surface-container)' }}>
                        <td style={{ padding: 'var(--space-4)' }}>Anti-Freezing Technology</td>
                        <td style={{ padding: 'var(--space-4)' }}><span className="material-icons-outlined" style={{ color: 'var(--primary)', verticalAlign: 'middle' }}>check_circle</span> Yes, Server-Side</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--outline)' }}>Standard Load</td>
                     </tr>
                     <tr style={{ borderBottom: '1px solid var(--surface-container)' }}>
                        <td style={{ padding: 'var(--space-4)' }}>Support Response Time</td>
                        <td style={{ padding: 'var(--space-4)' }}>&lt; 5 Minutes</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--outline)' }}>24 - 48 Hours</td>
                     </tr>
                     <tr style={{ borderBottom: '1px solid var(--surface-container)' }}>
                        <td style={{ padding: 'var(--space-4)' }}>Payment Methods</td>
                        <td style={{ padding: 'var(--space-4)' }}>Crypto, PayPal, Cards</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--outline)' }}>Limited Processing</td>
                     </tr>
                     <tr>
                        <td style={{ padding: 'var(--space-4)' }}>Money-Back Guarantee</td>
                        <td style={{ padding: 'var(--space-4)' }}>7 Days</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--outline)' }}>None / Strict</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Tech spotlight */}
      <section className="section">
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="display-sm" style={{ marginBottom: 'var(--space-4)' }}>Better Anti-Freezing Technology</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
               Zyminex operates its own bare-metal servers. We do not oversell our bandwidth. When you tune into a 4K game, our unique Anti-Freezing hardware kicks in to provide a dedicated, buffer-free packet stream to your specific location.
            </p>
         </div>
      </section>

      {/* Outro */}
      <section className="section section-alt" style={{ paddingBottom: 'var(--space-20)' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="display-sm" style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>Make the Switch Today</h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto var(--space-6)' }}>
               Don't take our word for it. See the difference for yourself without spending a dime.
            </p>
            <Link to="/iptv-free-trial" className="btn btn-primary btn-lg">Start Your Free Test</Link>
         </div>
      </section>
    </div>
  )
}

