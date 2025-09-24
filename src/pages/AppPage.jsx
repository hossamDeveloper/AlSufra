import PageHeader from "../components/PageHeader.jsx"
import appImage from "../assets/appImage.png"

export default function AppPage(){
  return (
    <section className="rtl-text space-y-16">
      <PageHeader title="تطبيق السفرة" subtitle="حمّل التطبيق الآن واستمتع بتجربة طلب سهلة ومريحة مع عروض حصرية." badge="التطبيق" />

      {/* Hero Section */}
      <div className="card overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  حمّل التطبيق
                </span>
                <br />
                <span className="text-gray-800">واستمتع بالعروض</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                تطبيق السفرة يوفر لك تجربة طلب سهلة ومريحة مع عروض حصرية وخصومات خاصة. 
                اطلب الآن واستمتع بأشهى الأطباق الشعبية في أي وقت.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">طلب سهل وسريع</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">عروض حصرية</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">تتبع الطلب</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a className="btn text-lg px-8 py-4" href="#">
                <span className="mr-2"></span>
                تحميل من App Store
              </a>
              <a className="btn btn-outline text-lg px-8 py-4" href="#">
                <span className="mr-2"></span>
                تحميل من Google Play
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
              <img src={appImage} alt="تطبيق السفرة" className="relative max-h-96 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card p-8 text-center group hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">واجهة سهلة</h3>
          <p className="text-gray-600">
            تصميم بسيط وسهل الاستخدام يمكنك من طلب الطعام في خطوات قليلة
          </p>
        </div>
        
        <div className="card p-8 text-center group hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">عروض حصرية</h3>
          <p className="text-gray-600">
            احصل على خصومات وعروض خاصة متاحة فقط لمستخدمي التطبيق
          </p>
        </div>
        
        <div className="card p-8 text-center group hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">تتبع الطلب</h3>
          <p className="text-gray-600">
            تابع حالة طلبك من البداية حتى وصوله إليك في الوقت المحدد
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="card p-8 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">حمّل التطبيق الآن</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          انضم إلى آلاف العملاء الذين يثقون في تطبيق السفرة لطلب الطعام المفضل لديهم
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="group">
            <div className="flex items-center gap-4 bg-white border-2 border-gray-200 rounded-2xl p-4 hover:border-red-500 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">تحميل من</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </div>
          </a>
          
          <a href="#" className="group">
            <div className="flex items-center gap-4 bg-white border-2 border-gray-200 rounded-2xl p-4 hover:border-red-500 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.545-2.302-2.302 10.937-6.545zm3.199-3.198l2.807 2.808a.996.996 0 010 1.414L12.318 21.65a.996.996 0 01-1.414 0L8.097 19.436l10.937-6.545 2.302-2.302zM8.736 1.814L18.919 12 8.736 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.61-.92z"/>
                </svg>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">تحميل من</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
