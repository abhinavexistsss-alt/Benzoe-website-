import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CookiePolicyPage } from './pages/CookiePolicyPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { RefundPolicyPage } from './pages/RefundPolicyPage'
import { TermsPage } from './pages/TermsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
