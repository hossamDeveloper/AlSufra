import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Footer(){
  return (
    <footer className="mt-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"></div>
      {/* <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      }}></div> */}
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="h-4 w-full">

        </div>
        {/* Top Section */}
        <div className="container mx-auto px-8 py-16  rtl-text">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3">
                  <img src={logo} alt="السفرة" className="h-16 w-full" />
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                شركة السعر الرائع لتقديم الوجبات الشعبية الأصيلة منذ أكثر من 22 عامًا
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span>سجل تجاري رقم: 4030452939</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span>الرقم الضريبي: 311197460800003</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                روابط سريعة
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/about", text: "عن السفرة" },
                  { to: "/menu", text: "قائمة الطعام" },
                  { to: "/branches", text: "فروعنا" },
                  { to: "/contact", text: "تواصل معنا" },
                  { to: "/privacy-policy", text: "سياسة الخصوصية" },
                  { to: "/terms-and-conditions", text: "الشروط والأحكام" }
                ].map((link, index) => (
                  <li key={index} className="group">
                    <Link 
                      className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2" 
                      to={link.to}
                    >
                      <span className="w-1 h-1 bg-slate-400 rounded-full group-hover:bg-white transition-colors"></span>
                      <span className="text-sm text-gradient-to-r from-red-600 to-orange-500 font-bold">{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                معلومات التواصل
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">المركز الرئيسي</div>
                    <div className="text-slate-300 text-sm">جدة - حي الرويس</div>
                    <div className="text-xs text-slate-400">شارع قادة الفكر</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-lg">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a href="tel:+966122614440" className="text-gradient-to-r from-red-600 to-orange-500 font-bold transition-colors">
                    +966122614440
                  </a>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-lg">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a href="mailto:contact@alsufra.sa" className="text-gradient-to-r from-red-600 to-orange-500 font-bold transition-colors hover:text-white">
                    contact@alsufra.sa
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours & Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                أوقات الدوام
              </h3>
              
              <div className="space-y-3">
                <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="font-medium text-white text-sm">السبت - الخميس</div>
                  </div>
                  <div className="text-slate-300 text-sm">10:30 صباحاً - 1:30 فجراً</div>
                </div>
                
                <div className="bg-slate-800/40 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="font-medium text-white text-sm">الجمعة</div>
                  </div>
                  <div className="text-slate-300 text-sm">01 ظهراً - 1:30 فجراً</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-4 w-full">

        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 bg-slate-900/50 py-4">
          <div className="container mx-auto px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span>جميع الحقوق محفوظة لشركة السعر الرائع لتقديم الوجبات 2022</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span>صُنع في السعودية</span>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <span>Version 2.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
