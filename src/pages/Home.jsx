import heroImg from "../assets/heroImageSection.png"
import { productsByCategory } from "../Data/Products.js"
import AboutImage2 from "../assets/AboutImage2.png"
import { Link } from "react-router-dom"
import { branches } from "../Data/Branches.js"
import { useEffect, useRef, useState } from "react"
import { testimonials } from "../Data/Testimonials.js"

const featured = [
  ...productsByCategory.shawaya.slice(0,2),
  ...productsByCategory.grills.slice(0,1),
  ...productsByCategory.charcoal.slice(0,1),
]

export default function Home(){
  const sliderRef = useRef(null)
  const scrollBy = (dx)=>{
    sliderRef.current?.scrollBy({left: dx, behavior: "smooth"})
  }

  const [tIndex, setTIndex] = useState(0)
  useEffect(()=>{
    const iv = setInterval(()=>{
      setTIndex(i => (i + 1) % testimonials.length)
    }, 3000)
    return ()=> clearInterval(iv)
  }, [])
  const tVisible = [
    testimonials[tIndex % testimonials.length],
    testimonials[(tIndex + 1) % testimonials.length],
    testimonials[(tIndex + 2) % testimonials.length],
  ]

  return (
    <section className="rtl-text space-y-16">
      {/* Hero Section */}
      <div className="hero rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-red-600 font-semibold">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              مطاعم السفرة البخاري
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                اشبع جوعك
              </span>
              <br />
              <span className="text-gray-800">واطلب الآن</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              إضغط على الزر أدناه لتحميل التطبيق وابدأ بطلب أشهى الأطباق الشعبية في دقائق.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="btn text-lg px-8 py-4" href="#">
                <span className="mr-2">📱</span>
                تحميل من App Store
              </a>
              <a className="btn btn-outline text-lg px-8 py-4" href="#">
                <span className="mr-2">📱</span>
                تحميل من Google Play
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
              <img src={heroImg} alt="أطباق السفرة" className="relative max-h-96 object-contain" />
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 md:px-12 pb-8">
          <div className="card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
              5
            </div>
            <div className="text-sm text-gray-600 font-medium">فروع</div>
          </div>
          <div className="card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
              22
            </div>
            <div className="text-sm text-gray-600 font-medium">عام من الخبرة</div>
          </div>
          <div className="card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
              100K+
            </div>
            <div className="text-sm text-gray-600 font-medium">عملاء سعداء</div>
          </div>
          <div className="card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
              30+
            </div>
            <div className="text-sm text-gray-600 font-medium">صنف متنوع</div>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="card p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">حمّل التطبيق الآن</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              يمكنكم تحميل التطبيق من خلال ابل ستور أو جوجل بلاي والتمتع بعروض خاصة وتجربة طلب سهلة.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="btn" href="#">App Store</a>
              <a className="btn btn-outline" href="#">Google Play</a>
            </div>
          </div>
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-xl opacity-20"></div>
              <img src={heroImg} alt="تنزيل التطبيق" className="relative h-48 w-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="card overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0 items-stretch">
          <div className="md:col-span-2 order-last md:order-first">
            <img src={AboutImage2} alt="نبذة عن السفرة" className="h-96 w-full object-cover" />
          </div>
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              عن السفرة
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              منذ أكثر من 22 عامًا ونحن نُتقن تقديم الأطباق الشعبية الأصيلة بنكهات شرقية عريقة.
              نختار مكوناتنا بعناية ونعدّ وجباتنا يوميًا لضمان جودة استثنائية وخدمة سريعة تليق بضيوفنا.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="card p-4 text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-medium text-gray-700">الأصالة في الوصفات</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-2xl mb-2">⭐</div>
                <div className="font-medium text-gray-700">جودة دون تنازل</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-medium text-gray-700">خدمة سريعة</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/about" className="btn">اكتشف قصتنا</Link>
              <Link to="/menu" className="btn btn-outline">تصفح القائمة</Link>
            </div>
          </div>
        </div>
      </div>


      {/* Best Sellers Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">الأكثر مبيعًا</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsByCategory.grills.map(d=> (
            <div key={`best-${d.id}`} className="card group hover:scale-105 transition-all duration-300">
              <img src={d.img} alt={d.name} className="h-48 w-full object-cover" />
              <div className="card-body">
                <div className="card-title">{d.name}</div>
                <div className="card-subtitle">{d.desc}</div>
                <div className="price">{d.price} ر.س</div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Branches Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">فروعنا في المملكة</h2>
          <div className="flex gap-2">
            <button className="btn btn-outline" onClick={()=>scrollBy(-320)} aria-label="سابق">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="btn btn-outline" onClick={()=>scrollBy(320)} aria-label="التالي">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-lg text-gray-600">
          تجدونا في عدة مدن داخل المملكة لتكون تجربتكم أقرب وأسهل. استكشف أقرب فرع واحصل على الاتجاهات مباشرة عبر خرائط جوجل.
        </p>
        <div ref={sliderRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4" style={{scrollbarWidth:"thin"}}>
          {branches.map((b)=> (
            <div key={b.id} className="min-w-[320px] snap-start card group hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <div className="card-title">{b.name}</div>
                <div className="card-subtitle">{b.city}</div>
                <a href={b.map} target="_blank" rel="noreferrer" className="btn mt-4 w-full text-center">
                  <span className="mr-2">📍</span>
                  الموقع على الخريطة
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">آراء عملائنا</h2>
          <div className="flex gap-2">
            <button className="btn btn-outline" onClick={()=>setTIndex(i => (i - 1 + testimonials.length) % testimonials.length)} aria-label="السابق">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="btn btn-outline" onClick={()=>setTIndex(i => (i + 1) % testimonials.length)} aria-label="التالي">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tVisible.map(t => (
            <div key={t.id} className="card p-8 h-full flex flex-col group hover:scale-105 transition-all duration-300">
              <div className="text-gray-600 mb-6 flex-1 text-lg leading-relaxed">"{t.text}"</div>
              <div className="font-bold text-xl bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}