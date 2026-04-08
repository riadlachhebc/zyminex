import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import ScrollToTop from './components/ScrollToTop'
const HomePage = lazy(() => import('./pages/HomePage'))

// Standard Lazy loaded pages
const PricingPage = lazy(() => import('./pages/PricingPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FreeTrialPage = lazy(() => import('./pages/FreeTrialPage'))
const InstallationPage = lazy(() => import('./pages/InstallationPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const RefundPage = lazy(() => import('./pages/RefundPage'))
const FirestickPage = lazy(() => import('./pages/FirestickPage'))
const ResellerPage = lazy(() => import('./pages/ResellerPage'))
const CompetitorPage = lazy(() => import('./pages/CompetitorPage'))
const TutorialTivimatePage = lazy(() => import('./pages/TutorialTivimatePage'))
const TutorialSmartersPage = lazy(() => import('./pages/TutorialSmartersPage'))
const TutorialIBOPage = lazy(() => import('./pages/TutorialIBOPage'))
const TutorialDownloaderPage = lazy(() => import('./pages/TutorialDownloaderPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogBufferingPage = lazy(() => import('./pages/articles/BlogBufferingPage'))
const FirestickSetupPage = lazy(() => import('./pages/articles/FirestickSetupPage'))
const CordCuttingPage = lazy(() => import('./pages/articles/CordCuttingPage'))
const IPTVCrackdown2026Page = lazy(() => import('./pages/articles/IPTVCrackdown2026Page'))
const IPTVGuideBlankPage = lazy(() => import('./pages/articles/IPTVGuideBlankPage'))
const ISPBlockingIPTVPage = lazy(() => import('./pages/articles/ISPBlockingIPTVPage'))
const ChannelPage = lazy(() => import('./pages/ChannelPage'))

import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<div style={{minHeight:'100vh',background:'#121411'}}></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buy-iptv-subscription" element={<PricingPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/iptv-free-trial" element={<FreeTrialPage />} />
            <Route path="/setup-guides" element={<InstallationPage />} />
            <Route path="/iptv-for-firestick" element={<FirestickPage />} />
            <Route path="/iptv-reseller-panel" element={<ResellerPage />} />
            <Route path="/imax-iptv-alternative" element={<CompetitorPage />} />
            <Route path="/tutorials/how-to-setup-tivimate" element={<TutorialTivimatePage />} />
            <Route path="/tutorials/how-to-setup-smarters-pro" element={<TutorialSmartersPage />} />
            <Route path="/tutorials/how-to-setup-ibo-player" element={<TutorialIBOPage />} />
            <Route path="/tutorials/how-to-set-up-downloader" element={<TutorialDownloaderPage />} />
            <Route path="/channel-list" element={<ChannelPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/why-is-my-iptv-buffering-5-easy-fixes-to-stop-freezing-in-2026" element={<BlogBufferingPage />} />
            <Route path="/how-to-setup-iptv-on-amazon-firestick-2026-guide" element={<FirestickSetupPage />} />
            <Route path="/top-5-benefits-cutting-the-cord-premium-iptv" element={<CordCuttingPage />} />
            <Route path="/2026-iptv-crackdown-dodgy-firestick-safety" element={<IPTVCrackdown2026Page />} />
            <Route path="/iptv-guide-blank-buffering-fix-2026" element={<IPTVGuideBlankPage />} />
            <Route path="/isp-blocking-iptv-how-to-bypass" element={<ISPBlockingIPTVPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund" element={<RefundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}

export default App
