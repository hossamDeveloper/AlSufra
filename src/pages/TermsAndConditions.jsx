import PageHeader from "../components/PageHeader"

export default function TermsAndConditions(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <PageHeader 
        title="الشروط والأحكام"
        subtitle="الشروط والأحكام التي تحكم استخدامك لخدماتنا"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2h2v4h-2v-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">الشروط والأحكام</h1>
              <p className="text-lg text-gray-600">تاريخ النفاذ: 22 ديسمبر 2022</p>
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
                    تحكم هذه الشروط والأحكام استخدامك أو زيارتك لموقعنا الإلكتروني والتطبيق. 
                    شركة السعر الرائع لتقديم الوجبات تقوم بإدارة وتشغيل الخدمات.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 mt-4">
                    <p className="text-blue-800 font-medium">
                      من خلال زيارتك للخدمات أو استخدامها فإنك تؤكد موافقتك على الالتزام بهذه الشروط وسياسة الخصوصية الخاصة بنا.
                    </p>
                  </div>
                </section>

                {/* المدفوعات والمشتريات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    المدفوعات والمشتريات
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="font-semibold text-green-900 mb-3">معلومات الدفع المطلوبة:</h3>
                      <ul className="space-y-2 text-green-800">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          رقم البطاقة الائتمانية وتاريخ انتهاء الصلاحية
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          الاسم ورقم الهاتف
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          عنوان إرسال الفواتير ومعلومات الشحن
                        </li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 rounded-xl p-6">
                      <h3 className="font-semibold text-yellow-900 mb-3">التزاماتك:</h3>
                      <p className="text-yellow-800">
                        أنت تؤكد وتضمن أن لديك الحق القانوني في استخدام أي بطاقة ائتمان أو طريقة دفع أخرى 
                        وأن المعلومات التي تزودنا بها صحيحة وكاملة.
                      </p>
                    </div>
                  </div>
                </section>

                {/* التوافر والأخطاء */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
                    التوافر والأخطاء وعدم الدقة
                  </h2>
                  
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="font-semibold text-orange-900 mb-3">حقوقنا في التصحيح:</h3>
                    <p className="text-orange-800">
                      نحتفظ بالحق في تصحيح أي أخطاء أو عدم دقة أو سهو أو تغيير أو تحديث معلومات أو إلغاء طلبات 
                      إذا كانت أي معلومات في الخدمة غير دقيقة في أي وقت دون إشعار مسبق.
                    </p>
                  </div>
                </section>

                {/* العروض الترويجية */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">4</span>
                    العروض الترويجية
                  </h2>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="font-semibold text-purple-900 mb-3">المسابقات والعروض:</h3>
                    <p className="text-purple-800">
                      قد تخضع أي مسابقات أو يانصيب أو عروض ترويجية أخرى متاحة عبر الخدمة بقواعد منفصلة عن هذه الشروط. 
                      إذا كانت قواعد الترويج تتعارض مع هذه الشروط فسيتم تطبيق قواعد الترويج.
                    </p>
                  </div>
                </section>

                {/* المنتجات والخدمات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">5</span>
                    المنتجات والخدمات
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                      <h3 className="font-semibold text-red-900 mb-3">دقة المعلومات</h3>
                      <p className="text-red-800 text-sm">
                        لقد بذلنا كل جهد ممكن لنعكس بأكبر قدر ممكن من الدقة في وصف منتجاتنا وخدماتنا. 
                        لا يمكننا ولا نضمن دقة أو اكتمال أي معلومات.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h3 className="font-semibold text-blue-900 mb-3">حق التعديل</h3>
                      <p className="text-blue-800 text-sm">
                        نحتفظ بالحق في أي وقت بتعديل أو إيقاف الخدمة (أو أي جزء أو محتوى منها) دون إشعارك.
                      </p>
                    </div>
                  </div>
                </section>

                {/* الحسابات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">6</span>
                    الحسابات
                  </h2>
                  
                  <div className="bg-indigo-50 rounded-xl p-6">
                    <h3 className="font-semibold text-indigo-900 mb-3">مسؤولياتك</h3>
                    <ul className="space-y-2 text-indigo-800">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        تزويدنا بمعلومات دقيقة وكاملة وحديثة
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        حماية حسابك باستخدام كلمة مرور قوية
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        عدم استخدام أسماء أو محتوى مسيء أو مبتذل
                      </li>
                    </ul>
                  </div>
                </section>

                {/* الملكية الفكرية */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">7</span>
                    الملكية الفكرية
                  </h2>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">حقوق الطبع والنشر</h3>
                    <p className="text-gray-700">
                      الخدمة وجميع النصوص والرسومات والمحتوى التحريري والبيانات والتنسيق والرسوم البيانية والمظهر والأسلوب 
                      والصور والموسيقى والأصوات والصور والبرامج ومقاطع الفيديو والتصاميم والعلامات التجارية والشعارات 
                      هي ملكية حصرية لنا والمرخصين لنا.
                    </p>
                  </div>
                </section>

                {/* التنصل من الضمانات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">8</span>
                    التنصل من الضمانات وتحديد المسؤولية
                  </h2>
                  
                  <div className="bg-red-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-900 mb-2">حدود المسؤولية</h3>
                        <p className="text-red-800">
                          نحن لا نضمن أن استخدامك للخدمة لن ينقطع أو يكون آمنا أو خاليا من الأخطاء. 
                          لن تكون المسؤولية الإجمالية أكثر من 1875 ريال سعودي أو أكثر من المبلغ المدفوع من جانبك لنا خلال الستة أشهر السابقة.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* التعويض */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">9</span>
                    التعويض
                  </h2>
                  
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <p className="text-yellow-800">
                      أنت توافق على تعويضنا والدفاع عننا وعدم إلحاق الضرر بنا من وضد أي وجميع المطالبات والأضرار والمصروفات 
                      والخسائر والالتزامات الحكومية والدعاوى والخلافات من جميع الأنواع.
                    </p>
                  </div>
                </section>

                {/* قانون الدولة */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">10</span>
                    قانون الدولة
                  </h2>
                  
                  <div className="bg-green-50 rounded-xl p-6">
                    <p className="text-green-800">
                      تخضع هذه الشروط وتفسر وفقا لقوانين المملكة العربية السعودية بغض النظر عن تعارضها مع أحكام القانون.
                    </p>
                  </div>
                </section>

                {/* التعديلات */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">11</span>
                    التعديلات
                  </h2>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <p className="text-blue-800">
                      قد نقوم بمراجعة هذه الشروط من وقت لآخر. لن تكون التغييرات بأثر رجعي وستحكم علاقتنا معك أحدث إصدار من الشروط.
                    </p>
                  </div>
                </section>

                {/* التواصل */}
                <section className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
                  <p className="mb-6">إذا كان لديك أي أسئلة حول هذه الشروط يرجى التواصل معنا:</p>
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
                  <div className="mt-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      <span>https://alsufra.sa</span>
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
