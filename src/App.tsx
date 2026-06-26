import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CookiePolicyPage } from './pages/CookiePolicyPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { RefundPolicyPage } from './pages/RefundPolicyPage'
import { TermsPage } from './pages/TermsPage'
import { AIVoiceAssistant } from './pages/AIVoiceAssistant'
import { SiteHeader } from './components/SiteHeader'
import { ForPatientsPage } from './pages/ForPatientsPage'
import { ForDoctorsPage } from './pages/ForDoctorsPage'
import { HowItWorksPage } from './pages/HowItWorksPage'

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-patients" element={<ForPatientsPage />} />
        <Route path="/for-doctors" element={<ForDoctorsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/assistant" element={<AIVoiceAssistant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
