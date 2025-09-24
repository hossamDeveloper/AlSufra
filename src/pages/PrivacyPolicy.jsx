import PageHeader from "../components/PageHeader"

export default function PrivacyPolicy(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <PageHeader 
        title="سياسة الخصوصية"
        subtitle="نحن ملتزمون بحماية خصوصيتك وأمان بياناتك الشخصية"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">سياسة الخصوصية</h1>
              <p className="text-lg text-gray-600">آخر تحديث: 11 يناير 2023</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                {/* مقدمة */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    مقدمة
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    تصف سياسة الخصوصية هذه سياساتنا وإجراءاتنا المتعلقة بجمع معلوماتك واستخدامها والكشف عنها عند استخدامك للخدمة وتخبرك بحقوق الخصوصية الخاصة بك وكيف يحميك القانون.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    نستخدم بياناتك الشخصية لتوفير الخدمة وتحسينها. باستخدام الخدمة، فإنك توافق على جمع واستخدام المعلومات وفقًا لسياسة الخصوصية هذه.
                  </p>
                </section>

                {/* التعريفات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    التعريفات
                  </h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">الشركة</h3>
                        <p className="text-gray-700 text-sm">مطاعم السفرة والتابعة لشركة السعر الرائع في المملكة العربية السعودية - جدة</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">الخدمة</h3>
                        <p className="text-gray-700 text-sm">التطبيق أو الموقع الإلكتروني أو كليهما</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">البيانات الشخصية</h3>
                        <p className="text-gray-700 text-sm">أي معلومات تتعلق بفرد محدد أو يمكن التعرف عليه</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">الجهاز</h3>
                        <p className="text-gray-700 text-sm">أي جهاز يمكنه الوصول إلى الخدمة مثل جهاز كمبيوتر أو هاتف محمول</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* جمع البيانات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
                    جمع واستخدام بياناتك الشخصية
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="font-semibold text-blue-900 mb-3">البيانات الشخصية التي نجمعها:</h3>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          عنوان البريد الإلكتروني
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          الاسم الأول واسم العائلة
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          رقم الهاتف
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          العنوان والموقع
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="font-semibold text-green-900 mb-3">بيانات الاستخدام:</h3>
                      <p className="text-green-800">
                        يتم جمع بيانات الاستخدام تلقائيًا عند استخدام الخدمة، بما في ذلك عنوان IP، نوع المتصفح، 
                        الصفحات التي تزورها، وقت الزيارة، ومعرفات الجهاز الفريدة.
                      </p>
                    </div>
                  </div>
                </section>

                {/* استخدام البيانات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">4</span>
                    استخدام بياناتك الشخصية
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                      <h3 className="font-semibold text-red-900 mb-3">أغراض الخدمة</h3>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li> توفير وصيانة خدمتنا</li>
                        <li> إدارة حسابك</li>
                        <li> تنفيذ العقود</li>
                        <li> التواصل معك</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h3 className="font-semibold text-blue-900 mb-3">التحسين والتطوير</h3>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li> تحليل البيانات</li>
                        <li> تحديد اتجاهات الاستخدام</li>
                        <li> تحسين خدماتنا</li>
                        <li> تجربة أفضل للمستخدم</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* مشاركة البيانات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">5</span>
                    مشاركة معلوماتك الشخصية
                  </h2>
                  
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h3 className="font-semibold text-yellow-900 mb-3">نشارك معلوماتك في الحالات التالية:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-2">مع مزودي الخدمة</h4>
                        <p className="text-yellow-700 text-sm">لمراقبة وتحليل استخدام خدمتنا</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-2">مع الشركات التابعة</h4>
                        <p className="text-yellow-700 text-sm">لتحسين خدماتنا المشتركة</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-2">بموافقتك</h4>
                        <p className="text-yellow-700 text-sm">لأي غرض آخر بموافقتك الصريحة</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-2">لنقل الأعمال</h4>
                        <p className="text-yellow-700 text-sm">في حالة الاندماج أو بيع الأصول</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* أمان البيانات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">6</span>
                    أمان بياناتك الشخصية
                  </h2>
                  
                  <div className="bg-red-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-900 mb-2">حماية البيانات</h3>
                        <p className="text-red-800">
                          يعد أمان بياناتك الشخصية أمرًا مهمًا بالنسبة لنا. بينما نسعى جاهدين لاستخدام وسائل مقبولة تجاريًا لحماية بياناتك الشخصية، لا يمكننا ضمان أمنها المطلق.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* خصوصية الأطفال */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">7</span>
                    خصوصية الأطفال
                  </h2>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-900 mb-2">حماية الأطفال</h3>
                        <p className="text-purple-800">
                          لا تخاطب خدمتنا أي شخص يقل عمره عن 13 عامًا. نحن لا نجمع عن قصد معلومات تعريف شخصية من أي شخص يقل عمره عن 13 عامًا.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* التغييرات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">8</span>
                    التغييرات على سياسة الخصوصية
                  </h2>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700">
                      قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة.
                    </p>
                  </div>
                </section>

                {/* التواصل */}
                <section className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
                  <p className="mb-6">إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>contact@alsufra.sa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>+966122614440</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
