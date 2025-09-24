import PageHeader from "../components/PageHeader.jsx"
import AboutImage1 from "../assets/AboutImage1.png"
import AboutImage2 from "../assets/AboutImage2.png"
import AboutImage3 from "../assets/AboutImage3.png"
import AboutImage4 from "../assets/AboutImage4.png"

export default function About(){
  return (
    <section className="rtl-text space-y-16">
      <PageHeader title="من نحن" subtitle="منذ أكثر من 22 عامًا نقدم النكهات الأصيلة بخبرة وجودة وخدمة سريعة." badge="نبذة" />

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="card p-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              قصتنا
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              بدأت حكايتنا من جدة لنوصل لكم الأطباق الشعبية بقيمة عالية وطعم أصيل. نؤمن بأن التفاصيل الصغيرة تصنع فرقًا كبيرًا في تجربة الضيف.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">قيمنا</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="card p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3"></div>
                  <h4 className="font-bold text-lg mb-2">الأصالة</h4>
                  <p className="text-sm text-gray-600">وصفات أصيلة وموروثة</p>
                </div>
                <div className="card p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3"></div>
                  <h4 className="font-bold text-lg mb-2">الجودة</h4>
                  <p className="text-sm text-gray-600">مكونات طازجة ومختارة</p>
                </div>
                <div className="card p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3"></div>
                  <h4 className="font-bold text-lg mb-2">السرعة</h4>
                  <p className="text-sm text-gray-600">خدمة سريعة وموثوقة</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg">المقر الرئيسي</h4>
              </div>
              <p className="text-gray-700">جدة  حي الرويس  شارع قادة الفكر</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="card overflow-hidden group hover:scale-105 transition-all duration-300">
              <img src={AboutImage1} alt="طبخ تقليدي" className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="card overflow-hidden group hover:scale-105 transition-all duration-300">
              <img src={AboutImage2} alt="نكهات أصيلة" className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="card overflow-hidden group hover:scale-105 transition-all duration-300">
              <img src={AboutImage3} alt="مشويات طازجة" className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="card overflow-hidden group hover:scale-105 transition-all duration-300">
              <img src={AboutImage4} alt="أرز بخاري" className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="card p-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">أرقامنا تتحدث</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
              22+
            </div>
            <div className="text-sm text-gray-600 font-medium">سنة من الخبرة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
              5
            </div>
            <div className="text-sm text-gray-600 font-medium">فروع في المملكة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
              100K+
            </div>
            <div className="text-sm text-gray-600 font-medium">عميل سعيد</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
              30+
            </div>
            <div className="text-sm text-gray-600 font-medium">صنف متنوع</div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="card p-8">
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            مهمتنا
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            نسعى لتقديم تجربة طعام استثنائية تجمع بين الأصالة والحداثة، مع الحفاظ على القيم التقليدية 
            والجودة العالية في كل طبق نقدمه لضيوفنا الكرام.
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="font-medium text-red-600">نلتزم بالجودة في كل تفصيل</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
