import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Branches from './pages/Branches.jsx'
import AppPage from './pages/AppPage.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
