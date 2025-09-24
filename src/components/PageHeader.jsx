
export default function PageHeader({ title, subtitle, badge, children }){
  return (
    <div className="card p-8 md:p-12 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-100 to-red-100 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            {badge}
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
        )}
        
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
