import PageHeader from "../components/PageHeader.jsx"
import { branches } from "../Data/Branches.js"

export default function Branches(){
  return (
    <section className="rtl-text space-y-16">
      <PageHeader title="فروعنا" subtitle="تجدونا في عدة مدن داخل المملكة لتكون تجربتكم أقرب وأسهل." badge="الفروع" />

      {/* Branches Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {branches.map((branch) => (
          <div key={branch.id} className="card group hover:scale-105 transition-all duration-300">
            <div className="card-body space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{branch.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{branch.city}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">الموقع</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">متاح الآن</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <a 
                  href={branch.map} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn w-full text-center group"
                >
                  <span className="mr-2"></span>
                  الموقع على الخريطة
                </a>
                
                <button className="btn btn-outline w-full text-center group">
                  <span className="mr-2"></span>
                  اتصل بالفرع
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Working Hours */}
      <div className="card p-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">أوقات الدوام</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-xl">السبت - الخميس</h4>
            </div>
            <p className="text-lg text-gray-700 font-medium">10:30 صباحاً - 1:30 فجراً</p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-xl">الجمعة</h4>
            </div>
            <p className="text-lg text-gray-700 font-medium">01 ظهراً - 1:30 فجراً</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="card p-8 text-center">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">معلومات التواصل</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">هاتف</h4>
            <a href="tel:+966122614440" className="text-red-600 font-medium hover:text-red-700 transition-colors">
              +966122614440
            </a>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">بريد إلكتروني</h4>
            <a href="mailto:contact@alsufra.sa" className="text-red-600 font-medium hover:text-red-700 transition-colors">
              contact@alsufra.sa
            </a>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">الموقع</h4>
            <p className="text-gray-700 font-medium">جدة - حي الرويس</p>
          </div>
        </div>
      </div>
    </section>
  )
}
