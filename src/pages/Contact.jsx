import PageHeader from "../components/PageHeader.jsx"

export default function Contact(){
  return (
    <section className="rtl-text space-y-16">
      <PageHeader title="اتصل بنا" subtitle="نحن هنا لخدمتكم في أي وقت. تواصلوا معنا للحصول على أفضل تجربة طعام." badge="تواصل" />

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card p-8 text-center group hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">هاتف</h3>
          <p className="text-gray-600 mb-4">اتصلوا بنا مباشرة</p>
          <a href="tel:+966122614440" className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors">
            +966122614440
          </a>
        </div>

        <div className="card p-8 text-center group hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">بريد إلكتروني</h3>
          <p className="text-gray-600 mb-4">أرسلوا لنا رسالة</p>
          <a href="mailto:contact@alsufra.sa" className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors">
            contact@alsufra.sa
          </a>
        </div>

        <div className="card p-8 text-center group hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">الموقع</h3>
          <p className="text-gray-600 mb-4">المركز الرئيسي</p>
          <p className="text-gray-800 font-medium">
            جدة - حي الرويس<br />
            شارع قادة الفكر
          </p>
        </div>
      </div>

      {/* Working Hours */}
      <div className="card p-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">أوقات الدوام</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-lg">السبت - الخميس</h4>
            </div>
            <p className="text-gray-700 font-medium">10:30 صباحاً - 1:30 فجراً</p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-lg">الجمعة</h4>
            </div>
            <p className="text-gray-700 font-medium">01 ظهراً - 1:30 فجراً</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="card p-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">أرسلوا لنا رسالة</h3>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الاسم</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                placeholder="أدخل اسمكم"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                placeholder="أدخل بريدكم الإلكتروني"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">الموضوع</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
              placeholder="موضوع الرسالة"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
            <textarea 
              rows={6}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 resize-none"
              placeholder="اكتبوا رسالتكم هنا..."
            ></textarea>
          </div>
          
          <div className="text-center">
            <button type="submit" className="btn text-lg px-8 py-4">
              <span className="mr-2"></span>
              إرسال الرسالة
            </button>
          </div>
        </form>
      </div>

      {/* Social Media */}
      <div className="card p-8 text-center">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">تابعونا على وسائل التواصل</h3>
        <p className="text-gray-600 mb-8">ابقوا على اطلاع بأحدث العروض والأطباق الجديدة</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
