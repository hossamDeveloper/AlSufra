export const categories = [
  { key: 'starters', title: 'المقبلات' },
  { key: 'grills', title: 'المشويات' },
  { key: 'shawaya', title: 'الشواية' },
  { key: 'charcoal', title: 'الفحم' },
  { key: 'meat', title: 'اللحم' },
  { key: 'fried', title: 'المقلي' },
  { key: 'stews', title: 'الإيدامات' },
  { key: 'pastry', title: 'المعجنات' },
  { key: 'salad', title: 'السلطات' },
  { key: 'dessert', title: 'الحلى' },
  { key: 'drinks', title: 'المشروبات' },
]

export const productsByCategory = {
  starters: [
    { id:'st1', name:'سمبوسة لحم', price:10, img:'https://plus.unsplash.com/premium_photo-1695297516710-854716c51121?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftb3NhfGVufDB8fDB8fHww', desc:'مقرمشة ولذيذة' },
    { id:'st2', name:'حمص', price:12, img:'https://images.unsplash.com/photo-1603133872497-f29809b750bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVtbXVzfGVufDB8fDB8fHww', desc:'حمص بالطحينة' },
    { id:'st3', name:'متبل', price:12, img:'https://plus.unsplash.com/premium_photo-1664647841204-ecbdd9f93bc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWdncGxhbnR8ZW58MHx8MHx8fDA%3D', desc:'باذنجان مشوي' },
    { id:'st4', name:'بطاطس مقلية', price:9, img:'https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D', desc:'طازجة وساخنة' },
  ],
  grills: [
    { id:'gr1', name:'كباب لحم', price:38, img:'https://images.unsplash.com/photo-1633436375795-12b3b339712f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2ViYWJ8ZW58MHx8MHx8fDA%3D', desc:'متبل ومشوي' },
    { id:'gr2', name:'شيش طاووق', price:34, img:'https://images.unsplash.com/photo-1748864221046-95a3ae8192cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNoaXNoJTIwdGF3b29rJTIwbWVhdHxlbnwwfHwwfHx8MA%3D%3D', desc:'مشوي على الفحم' },
    { id:'gr3', name:'أوصال لحم', price:44, img:'https://images.unsplash.com/photo-1708597521669-f7312f312b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtYiUyMHNrZXdlcnN8ZW58MHx8MHx8fDA%3D', desc:'قطع لحم طرية' },
    { id:'gr4', name:'مشويات مشكلة', price:55, img:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdyaWxsaW5nfGVufDB8fDB8fHww', desc:'تشكيلة متنوعة' },
  ],
  shawaya: [
    { id:'sh1', name:'دجاج شواية', price:28, img:'https://images.unsplash.com/photo-1630564510761-a560db92a09b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm90aXNzZXJpZSUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D', desc:'نصف/كامل' },
    { id:'sh2', name:'دجاج مسحب', price:32, img:'https://images.unsplash.com/photo-1597652096872-658bf24731ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyaWxsZWQlMjBjaGlja2VufGVufDB8fDB8fHww', desc:'متبل ولذيذ' },
    { id:'sh3', name:'دجاج مع أرز', price:36, img:'https://images.unsplash.com/photo-1603496987674-79600a000f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGFuZCUyMHJpY2V8ZW58MHx8MHx8fDA%3D', desc:'وجبة كاملة' },
    { id:'sh4', name:'أرز بخاري', price:18, img:'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGthYnNhJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D', desc:'أرز أصيل' },
  ],
  charcoal: [
    { id:'ch1', name:'دجاج على الفحم', price:34, img:'https://images.unsplash.com/photo-1676471977139-315014bed47e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcmNvYWwlMjBjaGlja2VufGVufDB8fDB8fHww', desc:'نكهة مميزة' },
    { id:'ch2', name:'نصف دجاج فحم', price:19, img:'https://images.unsplash.com/photo-1597652096872-658bf24731ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyaWxsZWQlMjBjaGlja2VufGVufDB8fDB8fHww', desc:'طري ومشوي' },
    { id:'ch3', name:'ربع دجاج فحم', price:12, img:'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D', desc:'مناسب للوجبات' },
    { id:'ch4', name:'رز شعبي', price:10, img:'https://images.unsplash.com/photo-1609570324378-ec0c4c9b6ba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFyYWJpYyUyMHJpY2V8ZW58MHx8MHx8fDA%3D', desc:'مرافق مثالي' },
  ],
  meat: [
    { id:'m1', name:'مقلقل لحم', price:42, img:'https://images.unsplash.com/photo-1575900365671-6b67e2265d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZWYlMjBzdGlyJTIwZnJ5fGVufDB8fDB8fHww', desc:'بلحم طازج' },
    { id:'m2', name:'قلابة كبدة', price:30, img:'https://images.unsplash.com/photo-1683989415586-75691b11ab14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGxpdmVyJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D', desc:'نكهة قوية' },
    { id:'m3', name:'لحم صاج', price:46, img:'https://images.unsplash.com/photo-1628497622763-36456bb4d56b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZWYlMkNncmlkZGxlfGVufDB8fDB8fHww', desc:'شرائح لحم' },
    { id:'m4', name:'مندي لحم', price:55, img:'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQxfHxtYW5kaSUyMG1lYXR8ZW58MHx8MHx8fDA%3D', desc:'ناضج ومبهّر' },
  ],
  fried: [
    { id:'f1', name:'دجاج بروست', price:29, img:'https://plus.unsplash.com/premium_photo-1683139916670-38113db90cb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyaWVkJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D', desc:'مقرمش' },
    { id:'f2', name:'مسحب مقلي', price:27, img:'https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMG51Z2dldHN8ZW58MHx8MHx8fDA%3D', desc:'مفضل للصغار' },
    { id:'f3', name:'جمبري مقلي', price:39, img:'https://images.unsplash.com/photo-1718522200359-96a72b8994b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZWQlMjBzaHJpbXxlbnwwfHwwfHx8MA%3D%3D', desc:'طعم بحري' },
    { id:'f4', name:'فيليه مقلي', price:33, img:'https://plus.unsplash.com/premium_photo-1683657860084-5f9723dcac0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyaWVkJTIwZmlzaHxlbnwwfHwwfHx8MA%3D%3D', desc:'ذهبي ومقرمش' },
  ],
  stews: [
    { id:'stew1', name:'قرصان', price:22, img:'https://images.unsplash.com/photo-1693530238368-20706826d197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RldyUyQ2JyZWFkfGVufDB8fDB8fHww', desc:'أكلة شعبية' },
    { id:'stew2', name:'جريش', price:20, img:'https://plus.unsplash.com/premium_photo-1669559809547-6e4c4fe41371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ycmlkZ2V8ZW58MHx8MHx8fDA%3D', desc:'تقليدي' },
    { id:'stew3', name:'مرقوق', price:24, img:'https://plus.unsplash.com/premium_photo-1713087472522-9ebe85e736bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlJTIwc3Rld3xlbnwwfHwwfHx8MA%3D%3D', desc:'لذيذ ومشبع' },
    { id:'stew4', name:'خضار باللحم', price:28, img:'https://images.unsplash.com/photo-1608500218861-01091cdc501e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVlZiUyMHN0ZXd8ZW58MHx8MHx8fDA%3D', desc:'تتبيلة خاصة' },
  ],
  pastry: [
    { id:'p1', name:'فطيرة جبن', price:12, img:'https://images.unsplash.com/photo-1737700088884-139707baf863?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNoZWVzZSUyMHBhc3RyeXxlbnwwfHwwfHx8MA%3D%3D', desc:'ساخنة وطازجة' },
    { id:'p2', name:'مناقيش زعتر', price:10, img:'https://images.unsplash.com/photo-1708782343717-be4ea260249a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hbmFraXNoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D', desc:'عجينة خفيفة' },
    { id:'p3', name:'بيتزا صغيرة', price:15, img:'https://images.unsplash.com/photo-1679310290400-53df391fae3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG1pbmklMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D', desc:'للأطفال' },
    { id:'p4', name:'صفيحة لحم', price:14, img:'https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIxfHxzZmloYSUyMG1lYXR8ZW58MHx8MHx8fDA%3D', desc:'نكهة شامية' },
  ],
  salad: [
    { id:'sa1', name:'تبولة', price:12, img:'https://images.unsplash.com/photo-1542528180-1c2803fa048c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFiYm91bGVofGVufDB8fDB8fHww', desc:'طازجة' },
    { id:'sa2', name:'فتوش', price:12, img:'https://images.unsplash.com/photo-1640041776929-af1fd1920178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk3fHxmYXR0b3VzaHxlbnwwfHwwfHx8MA%3D%3D', desc:'مقرمش' },
    { id:'sa3', name:'سلطة خضراء', price:10, img:'https://plus.unsplash.com/premium_photo-1690561082560-3e60cf3123ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxncmVlbiUyMHNhbGFkfGVufDB8fDB8fHww', desc:'منوعة' },
    { id:'sa4', name:'سلطة زبادي', price:8, img:'https://plus.unsplash.com/premium_photo-1663853489984-7efe68dab370?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VjdW1iZXIlMjB5b2d1cnR8ZW58MHx8MHx8fDA%3Dhttps://loremflickr.com/600/400/food,cucumber-yogurt?lock=904', desc:'منعشة' },
  ],
  dessert: [
    { id:'d1', name:'أم علي', price:16, img:'https://images.unsplash.com/photo-1621236704929-54444f7f09ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHVtbSUyMGFsaSUyMGRpc2h8ZW58MHx8MHx8fDA%3D', desc:'ساخنة' },
    { id:'d2', name:'كنافة', price:18, img:'https://images.unsplash.com/photo-1728099701677-29746d653597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIwfHxrdW5hZmElMjBzd2VldHxlbnwwfHwwfHx8MA%3D%3D', desc:'جبن/قشطة' },
    { id:'d3', name:'لقيمات', price:12, img:'https://images.unsplash.com/photo-1623244840072-bb28a27d0183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbmV5JTIwYW5kJTIwc2Vtc20lMjBkaXNofGVufDB8fDB8fHww', desc:'عسل وسمسم' },
    { id:'d4', name:'مهلبية', price:10, img:'https://images.unsplash.com/photo-1682692094951-2972f739cc6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxtdWhhbGxlYmklMjBkaXNofGVufDB8fDB8fHww', desc:'كلاسيكية' },
  ],
  drinks: [
    { id:'dr1', name:'ماء', price:2, img:'https://images.unsplash.com/photo-1638688569176-5b6db19f9d2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww', desc:'بارد' },
    { id:'dr2', name:'لبن', price:6, img:'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbGt8ZW58MHx8MHx8fDA%3D', desc:'منعش' },
    { id:'dr3', name:'عصير برتقال', price:8, img:'https://images.unsplash.com/photo-1618046364546-81e9d03d39a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9yYW5nZSUyMGp1aWNlfGVufDB8fDB8fHww', desc:'طبيعي' },
    { id:'dr4', name:'مشروب غازي', price:6, img:'https://plus.unsplash.com/premium_photo-1661370085023-16bf34456bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNvZGF8ZW58MHx8MHx8fDA%3D', desc:'متنوع' },
  ],
}

export const allProducts = Object.values(productsByCategory).flat() 