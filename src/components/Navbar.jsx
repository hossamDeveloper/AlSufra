import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-red-100 sticky top-0 z-50 shadow-lg mb-4  ">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2">
              <img src={logo} alt="السفرة" className="h-16 w-full" />
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-red-100">
          <NavLink  to="/" end className={({isActive})=>`nav-link ${isActive?"active":""}`}>
            الرئيسية
          </NavLink>
          <NavLink to="/about" className={({isActive})=>`nav-link ${isActive?"active":""}`}>
            من نحن
          </NavLink>
          <NavLink to="/menu" className={({isActive})=>`nav-link ${isActive?"active":""}`}>
            القائمة
          </NavLink>
          <NavLink to="/branches" className={({isActive})=>`nav-link ${isActive?"active":""}`}>
            الفروع
          </NavLink>
          <NavLink to="/app" className={({isActive})=>`nav-link ${isActive?"active":""}`}>
            التطبيق
          </NavLink>
          <NavLink to="/contact" className={({isActive})=>`nav-link ${isActive?"active":""}`}>
            اتصل بنا
          </NavLink>
        </nav>
        
        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <Link to="/menu" className="btn group">
            <span className="mr-2"></span>
            اشبع جوعك واطلب الآن
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-red-100 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                end 
                className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </NavLink>
              <NavLink 
                to="/about" 
                className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </NavLink>
              <NavLink 
                to="/menu" 
                className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                القائمة
              </NavLink>
              <NavLink 
                to="/branches" 
                className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الفروع
              </NavLink>
              <NavLink 
                to="/app" 
                className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                التطبيق
              </NavLink>
              <NavLink 
                to="/contact" 
                className="text-gray-700 hover:text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </NavLink>
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link 
                  to="/menu" 
                  className="btn w-full text-center block mb-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2"></span>
                  اشبع جوعك واطلب الآن
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

