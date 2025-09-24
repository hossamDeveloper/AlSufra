import { useMemo, useState } from "react"
import { categories, productsByCategory } from "../Data/Products.js"
import PageHeader from "../components/PageHeader.jsx"

const PAGE_SIZE = 9

export default function Menu(){
  const [selectedKey, setSelectedKey] = useState("all")
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const allWithCategory = useMemo(()=>{
    return categories.flatMap(cat => (productsByCategory[cat.key] || []).map(p => ({...p, categoryKey: cat.key, categoryTitle: cat.title})))
  }, [])

  const filtered = useMemo(()=>{
    const base = selectedKey === "all" ? allWithCategory : allWithCategory.filter(p => p.categoryKey === selectedKey)
    const q = query.trim()
    if(!q) return base
    const lower = q.toLowerCase()
    return base.filter(p => p.name.includes(q) || p.desc.includes(q) || p.categoryTitle.includes(q) || (p.name.toLowerCase?.().includes(lower)))
  }, [allWithCategory, selectedKey, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const pageItems = filtered.slice(start, start + PAGE_SIZE)

  function changeCategory(key){ setSelectedKey(key); setPage(1) }
  function onSearch(e){ setQuery(e.target.value); setPage(1) }
  function goTo(p){ if(p<1 || p>totalPages) return; setPage(p) }

  return (
    <section className="rtl-text space-y-12">
      <PageHeader title="قائمة الوجبات لدينا" subtitle="اختر من تشكيلتنا المتنوعة من المقبلات والمشويات والأرز والحلى والمزيد." badge="القائمة" />

      {/* Search and Filter Section */}
      <div className="card p-8">
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            <button 
              className={`btn ${selectedKey==="all" ? "" : "btn-outline"}`} 
              onClick={()=>changeCategory("all")}
            >
               الكل
            </button>
            {categories.map(cat => (
              <button 
                key={cat.key} 
                className={`btn ${selectedKey===cat.key ? "" : "btn-outline"}`} 
                onClick={()=>changeCategory(cat.key)}
              >
                {cat.title}
              </button>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                value={query} 
                onChange={onSearch} 
                placeholder="ابحث باسم المنتج..." 
                className="w-full pr-10 pl-4 py-3 rounded-2xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300" 
              />
            </div>
            <div className="bg-gradient-to-r from-red-100 to-orange-100 px-4 py-2 rounded-xl">
              <span className="text-sm font-medium text-red-600">نتائج: {filtered.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageItems.map((it)=> (
          <div key={it.id} className="card group hover:scale-105 transition-all duration-300">
            <div className="relative overflow-hidden">
              <img src={it.img} alt={it.name} className="h-72  w-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-bold text-red-600">{it.price} ر.س</span>
              </div>
            </div>
            <div className="card-body">
              <div className="card-title">{it.name}</div>
              <div className="card-subtitle">{it.desc}</div>
              <div className="flex items-center justify-between mt-4">
                <div className="price">{it.price} ر.س</div>
                <button className="btn text-sm px-4 py-2">
                  <span className="mr-1"></span>
                  أضف للسلة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4">
        <button 
          className="btn btn-outline" 
          onClick={()=>goTo(currentPage-1)} 
          disabled={currentPage===1}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          السابق
        </button>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">صفحة</span>
          <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full font-bold">
            {currentPage}
          </span>
          <span className="text-gray-600">من</span>
          <span className="font-bold text-gray-800">{totalPages}</span>
        </div>
        <button 
          className="btn btn-outline" 
          onClick={()=>goTo(currentPage+1)} 
          disabled={currentPage===totalPages}
        >
          التالي
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
