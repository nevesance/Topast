// Blog Data File
// This file contains all the data for the blog application

// Analytics and KPI Tracking data - initialized with non-zero values for display purposes
// The dashboard popup will be hidden while keeping analytics functional
window.analyticsData = {
  // Traffic sources
  trafficSources: {
    'direct': { visits: 43, percentage: 35.8 },
    'organic-search': { visits: 29, percentage: 24.2 },
    'social-media': { visits: 21, percentage: 17.5 },
    'referral': { visits: 18, percentage: 15.0 },
    'email': { visits: 9, percentage: 7.5 }
  },
  // Average time (in seconds)
  averageTimeOnPage: {
    'blog': 192, // 3:12
    'post': 237, // 3:57
    'articles': 163 // 2:43
  },
  // Bounce rate (percentage)
  bounceRate: {
    'blog': 35.2,
    'post': 28.9,
    'articles': 42.1
  },
  // Conversion rates (percentage)
  conversionRate: {
    'newsletter-signup': 4.2,
    'product-click': 6.8,
    'social-share': 2.7
  },
  // Sessions
  sessions: {
    'today': 28,
    'yesterday': 32,
    'last7days': 187,
    'last30days': 763,
    'averageDuration': 204 // 3:24 in seconds
  }
};

// Blog posts data
window.blogPostsData = [
  {
    id: 3,
    title: "Roti Berlapis Mentega — Kelezatan Sederhana yang Selalu Menggoda",
    date: "May 10, 2024",
    category: "Food",
    views: 0,
    readTime: "6 min",
    excerpt: "Dalam keseharian yang penuh dengan rutinitas dan jadwal yang padat, tidak ada yang lebih menyenangkan dari menemukan momen singkat untuk menikmati sesuatu yang benar-benar kita sukai.",
    featuredImage: "assets/Croissant-cook.jpg",
    introContent: "Dalam keseharian yang penuh dengan rutinitas dan jadwal yang padat, tidak ada yang lebih menyenangkan dari menemukan momen singkat untuk menikmati sesuatu yang benar-benar kita sukai. Salah satunya adalah sepotong roti berlapis mentega (Buttery Layers) yang disajikan hangat, langsung dari oven.",
    additionalContent: `
      <h2 class="section-title">FLAKY & SOFT: PERPADUAN TEKSTUR YANG MENGHIPNOTIS</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Tidak semua roti memiliki karakter seperti ini. Bagian luar yang flaky, tipis dan sedikit garing, memberi kesan elegan sekaligus autentik—hasil dari teknik memanggang yang presisi dan adonan yang kaya mentega. Lalu, saat kita menggigitnya, bagian dalam yang soft dan berpori-pori halus langsung meleleh di lidah.
      </p>
      <div class="grid grid-cols-2 gap-4 my-8">
        <img src="assets/Bakery.jpeg" alt="Flaky bread texture" class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="assets/Bakery_foto.jpg" alt="Fresh baked bread" class="rounded-lg shadow-md w-full h-48 object-cover">
      </div>
      <h2 class="section-title">SATU ROTI, DUA DUNIA RASA</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Salah satu hal paling menarik dari roti berlapis mentega adalah kemampuannya untuk menjadi dua jenis camilan sekaligus. Saat ditambah topping manis seperti selai stroberi, madu, atau krim vanila, roti ini menjadi dessert ringan yang elegan. Namun saat dipadukan dengan daging asap, telur rebus, atau keju asin, ia berubah menjadi camilan gurih yang mengenyangkan.
      </p>
      <h2 class="section-title">SIMPLE INDULGENCE</h2>
      <p class="text-gray-800 leading-relaxed">
        Dalam dunia yang penuh dengan gangguan dan tekanan, menikmati sesuatu yang sederhana bisa menjadi bentuk penghargaan pada diri sendiri. Simple indulgence bukan berarti mewah atau mahal, tapi sesuatu yang kita nikmati sepenuh hati. Roti berlapis mentega adalah salah satu bentuk indulgence itu—mudah didapat, mudah dibuat, tapi dampaknya luar biasa bagi mood dan semangat kita.
      </p>
    `
  },
  {
    id: 1,
    title: "An Ode to Toast, simplest of breakfast",
    date: "May 15, 2024",
    category: "Food",
    views: 128,
    readTime: "5 min",
    excerpt: "Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut.",
    featuredImage: "assets/Picture3.png",
    introContent: "Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut. Nah, Topast hadir sebagai solusi untuk pengganjal lapar yang cocok banget buat kamu yang ingin ngemil sambil menikmati waktu senggang. Dengan berbagai varian rasa dan produk yang kreatif, Topast bisa jadi pilihan tepat untuk memenuhi selera makananmu.",
    whyChooseTopast: "Tekstur Topast, luar roti yang sedikit garing memberikan kontras yang pas dengan kelembutan roti di dalamnya. Mulai dari Topast Original sampai Topast Ice cream, semuanya punya rasa yang bener-bener pas di lidah. Rasa manis, asin hadir dengan porsi yang nggak bikin eneg. Bahkan, meski kamu sudah sering coba rasa yang sama, ada sensasi baru di setiap gigitannya!",
    composition: "Topast Original punya ukuran yang pas tanpa bikin perut terasa terlalu penuh. Dalam satu Topast Original, kamu bakal menemukan 1 lembar roti tawar yang lembut, dipadukan dengan 1 lembar kulit pastry ukuran 15x10 cm yang garing dan renyah. Komposisi yang seimbang membuat Topast Original cocok jadi camilan untuk mengganjal lapar.",
    complementaryFood: "Roti atau gorengan kadang terasa monoton, apalagi kalau sudah sering dimakan. Dengan menggunakan air fryer, Topast tentunya jauh lebih sehat dibandingkan cemilan yang digoreng dalam minyak yang banyak, karena lebih rendah lemak dan kalori. Dengan berbagai varian rasa, pastinya bisa disesuaikan dengan teman ngopi/ngeteh kamu. Yukk tunggu apa lagi, langsung kepoin kita di instagram @topast.id dan Tiktok @topast.id",
    specialVariants: "Topast nggak cuma hadir dengan rasa kekinian, tapi juga membawa sentuhan tradisional yang nggak kalah menarik! Dua varian unggulan yang wajib kamu coba adalah Matcha Kunafa terinspirasi dari kunafa yang viral di Dubai dan cita rasa lokal lewat varian Klepon. Siapa bilang rasa tradisional kalah saing? Justru varian ini jadi daya tarik karena masih jarang banget ada roti apalagi pastry yang berani mengangkat rasa khas Indonesia seperti klepon.",
    productImages: [
      { src: "assets/Picture2.png", alt: "Topast Product 1" },
      { src: "assets/Picture5.png", alt: "Topast Product 2" },
      { src: "assets/Picture3.png", alt: "Topast Product 3" },
      { src: "assets/Picture7.png", alt: "Topast Product 4" },
    ],
    complementaryFoodImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1364&auto=format&fit=crop",
    specialVariantsImage: "https://images.unsplash.com/photo-1612387069301-4afaa95221ce?q=80&w=1364&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Dessert, embracing pleasure in life",
    date: "April 28, 2024",
    category: "Culinary",
    views: 87,
    readTime: "4 min",
    excerpt: "Kehidupan memang penuh dengan tantangan, tapi kamu perlu meluangkan waktu untuk menikmati hal-hal sederhana seperti dessert.",
    featuredImage: "https://images.unsplash.com/photo-1556679343-c1c1c9658f86?q=80&w=1364&auto=format&fit=crop",
    introContent: "Kehidupan memang penuh dengan tantangan, tapi kamu perlu meluangkan waktu untuk menikmati hal-hal sederhana seperti dessert. Topast menyajikan berbagai pilihan dessert yang akan membuat hidupmu lebih manis dan menyenangkan.",
    additionalContent: `
      <h2 class="section-title">DESSERT DALAM KEHIDUPAN MODERN</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Dalam kehidupan yang serba cepat, kita sering lupa untuk menikmati hal-hal sederhana. Dessert bukan hanya sekadar makanan penutup, tapi juga sebuah momen untuk berhenti sejenak dan merayakan kebahagiaan kecil. Topast hadir untuk mengingatkan kita bahwa kadang-kadang, hal terbaik dalam hidup bisa datang dalam bentuk makanan manis yang lezat.
      </p>
      <div class="grid grid-cols-2 gap-4 my-8">
        <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1364&auto=format&fit=crop" 
             alt="Dessert 1" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?q=80&w=1287&auto=format&fit=crop" 
             alt="Dessert 2" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
      </div>
      <h2 class="section-title">PERPADUAN RASA DAN TEKSTUR</h2>
      <p class="text-gray-800 leading-relaxed">
        Topast menggabungkan rasa manis yang pas dengan tekstur yang beragam untuk memberikan pengalaman dessert yang tidak terlupakan. Dari kelembutan whipped cream hingga kerenyahan pastry, setiap gigitan adalah petualangan baru untuk indra perasamu.
      </p>
    `,
  },
  {
    id: 3,
    title: "Roti Bersisik: Camilan Lembut yang Menjadi Kesenangan Sederhana",
    date: "April 20, 2024",
    category: "Baking",
    views: 850,
    readTime: "7 min",
    excerpt: "Di tengah kesibukan yang padat dan dunia yang bergerak cepat, seringkali kita lupa menikmati hal-hal kecil yang membawa kebahagiaan.",
    featuredImage: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1287&auto=format&fit=crop",
    introContent: "Di tengah kesibukan yang padat dan dunia yang bergerak cepat, seringkali kita lupa menikmati hal-hal kecil yang membawa kebahagiaan. Salah satunya adalah camilan sederhana yang mengingatkan kita akan rumah dan kehangatan. Roti bersisik adalah salah satu dari camilan itu—makanan yang tak hanya mengenyangkan, tapi juga memanjakan indera.",
    additionalContent: `
      <h2 class="section-title">TEKNIK BERLAPIS</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Proses pembuatan pastry yang flaky membutuhkan ketelitian dan kesabaran. Dengan teknik yang tepat, adonan yang dilipat berulang kali akan menghasilkan lapisan-lapisan tipis yang saat dipanggang, akan mengembang dan menciptakan tekstur yang renyah dan berlapis. Topast menguasai teknik ini dengan sempurna, sehingga setiap gigitan pastry kami selalu konsisten dan memuaskan.
      </p>
      <div class="grid grid-cols-2 gap-4 my-8">
        <img src="https://images.unsplash.com/photo-1504387432042-8aca549e4729?q=80&w=1287&auto=format&fit=crop" 
             alt="Layered Pastry 1" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="https://images.unsplash.com/photo-1501432781167-c0ccfd492297?q=80&w=1287&auto=format&fit=crop" 
             alt="Layered Pastry 2" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
      </div>
      <h2 class="section-title">RAHASIA MENTEGA BERKUALITAS</h2>
      <p class="text-gray-800 leading-relaxed">
        Bahan baku memegang peranan penting dalam menciptakan pastry yang sempurna. Topast hanya menggunakan mentega berkualitas tinggi yang memiliki titik leleh dan kandungan lemak yang ideal untuk pastry. Kombinasi ini menghasilkan aroma yang harum dan tekstur yang tidak mudah lembek meski sudah beberapa jam di suhu ruangan.
      </p>
    `,
  },
  {
    id: 4,
    title: "Making the perfect hot chocolate",
    date: "April 5, 2024",
    category: "Drinks",
    views: 0,
    readTime: "3 min",
    excerpt: "Ingin menikmati hot chocolate sempurna di rumah? Topast punya resep spesial untuk menemani momen santaimu.",
    featuredImage: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=1470&auto=format&fit=crop",
    introContent: "Tidak ada yang lebih menenangkan daripada secangkir hot chocolate yang lembut dan kaya rasa di hari yang dingin atau saat kamu butuh sesuatu yang menenangkan. Topast berbagi resep hot chocolate spesial yang akan membuat momen bersantaimu semakin sempurna.",
    additionalContent: `
      <h2 class="section-title">RAHASIA HOT CHOCOLATE YANG SEMPURNA</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Membuat hot chocolate yang sempurna bukan hanya tentang mencampurkan bubuk cokelat dengan susu panas. Ada beberapa rahasia yang akan membuat minumanmu naik kelas. Pertama, gunakan cokelat asli, bukan bubuk cokelat instan. Kedua, panaskan susu secara perlahan dan aduk terus agar tidak gosong. Terakhir, tambahkan sedikit garam untuk memperkuat rasa cokelat.
      </p>
      <div class="grid grid-cols-2 gap-4 my-8">
        <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1421&auto=format&fit=crop" 
             alt="Hot Chocolate 1" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1287&auto=format&fit=crop" 
             alt="Hot Chocolate 2" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
      </div>
      <h2 class="section-title">PASANGAN SEMPURNA UNTUK HOT CHOCOLATE</h2>
      <p class="text-gray-800 leading-relaxed">
        Hot chocolate yang kaya dan lembut adalah pasangan sempurna untuk Topast Original atau varian pastry manis lainnya. Perpaduan antara minuman hangat yang menenangkan dengan gigitan renyah pastry akan menciptakan pengalaman yang tak terlupakan di setiap momen santaimu.
      </p>
    `,
  },
  {
    id: 5,
    title: "Pengganjal Lapar yang Lezat dan Kekinian",
    date: "May 15, 2024",
    category: "Food",
    views: 0,
    readTime: "5 min",
    excerpt: "Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut.",
    featuredImage: "assets/Picture3.png",
    introContent: "Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut. Nah, Topast hadir sebagai solusi untuk pengganjal lapar yang cocok banget buat kamu yang ingin ngemil sambil menikmati waktu senggang. Dengan berbagai varian rasa dan produk yang kreatif, Topast bisa jadi pilihan tepat untuk memenuhi selera makananmu.",
    whyChooseTopast: "Tekstur Topast, luar roti yang sedikit garing memberikan kontras yang pas dengan kelembutan roti di dalamnya. Mulai dari Topast Original sampai Topast Ice cream, semuanya punya rasa yang bener-bener pas di lidah. Rasa manis, asin hadir dengan porsi yang nggak bikin eneg. Bahkan, meski kamu sudah sering coba rasa yang sama, ada sensasi baru di setiap gigitannya!",
    composition: "Topast Original punya ukuran yang pas tanpa bikin perut terasa terlalu penuh. Dalam satu Topast Original, kamu bakal menemukan 1 lembar roti tawar yang lembut, dipadukan dengan 1 lembar kulit pastry ukuran 15x10 cm yang garing dan renyah. Komposisi yang seimbang membuat Topast Original cocok jadi camilan untuk mengganjal lapar.",
    complementaryFood: "Roti atau gorengan kadang terasa monoton, apalagi kalau sudah sering dimakan. Dengan menggunakan air fryer, Topast tentunya jauh lebih sehat dibandingkan cemilan yang digoreng dalam minyak yang banyak, karena lebih rendah lemak dan kalori. Dengan berbagai varian rasa, pastinya bisa disesuaikan dengan teman ngopi/ngeteh kamu. Yukk tunggu apa lagi, langsung kepoin kita di instagram @topast.id dan Tiktok @topast.id",
    specialVariants: "Topast nggak cuma hadir dengan rasa kekinian, tapi juga membawa sentuhan tradisional yang nggak kalah menarik! Dua varian unggulan yang wajib kamu coba adalah Matcha Kunafa terinspirasi dari kunafa yang viral di Dubai dan cita rasa lokal lewat varian Klepon. Siapa bilang rasa tradisional kalah saing? Justru varian ini jadi daya tarik karena masih jarang banget ada roti apalagi pastry yang berani mengangkat rasa khas Indonesia seperti klepon.",
    productImages: [
      { src: "assets/Picture2.png", alt: "Topast Product 1" },
      { src: "assets/Picture5.png", alt: "Topast Product 2" },
      { src: "assets/Picture3.png", alt: "Topast Product 3" },
      { src: "assets/Picture 7.png", alt: "Topast Product 4" },
    ],
    complementaryFoodImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1364&auto=format&fit=crop",
    specialVariantsImage: "https://images.unsplash.com/photo-1612387069301-4afaa95221ce?q=80&w=1364&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Roti Bersisik: Camilan Lembut yang Menjadi Kesenangan Sederhana",
    date: "April 25, 2024",
    category: "Baking",
    views: 0,
    readTime: "6 min",
    excerpt: "Di tengah kesibukan yang padat dan dunia yang bergerak cepat, seringkali kita lupa menikmati hal-hal kecil yang membawa kebahagiaan.",
    featuredImage: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop",
    introContent: "Di tengah kesibukan yang padat dan dunia yang bergerak cepat, seringkali kita lupa menikmati hal-hal kecil yang membawa kebahagiaan. Salah satunya adalah camilan sederhana yang mengingatkan kita akan rumah dan kehangatan. Roti bersisik adalah salah satu dari camilan itu—makanan yang tak hanya mengenyangkan, tapi juga memanjakan indera.",
    additionalContent: `
      <h2 class="section-title">Tekstur yang Menggoda: Renyah di Luar, Lembut di Dalam</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Roti ini dikenal karena tekstur permukaannya yang bersisik dan renyah, namun ketika digigit, bagian dalamnya justru lembut, hangat, dan menggoda. Perpaduan ini menciptakan sensasi unik yang membuat siapa pun ingin terus mengambil potongan demi potongan. Biasanya dinikmati saat masih hangat, roti bersisik cocok disajikan bersama selai buah, mentega, atau bahkan madu alami.
      </p>
      <div class="grid grid-cols-2 gap-4 my-8">
        <img src="https://images.unsplash.com/photo-1504387432042-8aca549e4729?q=80&w=1287&auto=format&fit=crop" 
             alt="Tear bread" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="https://images.unsplash.com/photo-1501432781167-c0ccfd492297?q=80&w=1287&auto=format&fit=crop" 
             alt="Freshly baked" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
      </div>
      <h2 class="section-title">Teman Setia Sarapan Sederhana</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Disajikan bersama secangkir teh atau kopi pagi, roti bersisik dapat menjadi bagian dari rutinitas yang menenangkan. Kombinasi rasa hangat dan aroma roti yang baru matang bisa membawa suasana damai sejak pagi hari. Bagi yang menyukai sarapan bergaya Eropa atau Timur Tengah, menambahkan keju, telur rebus, atau zaitun bisa menjadi pelengkap yang sempurna.
      </p>
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=774&auto=format&fit=crop" 
             alt="Breakfast bread" 
             class="rounded-lg shadow-md w-full max-h-96 object-cover mx-auto">
      </div>
      <h2 class="section-title">Membangkitkan Memori Lewat Aroma dan Rasa</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Keistimewaan roti bersisik bukan hanya dari rasanya, tetapi dari pengalaman yang dihadirkannya. Membuat atau menyantapnya bisa menjadi kesenangan sederhana yang membangkitkan kenangan masa kecil, suasana dapur nenek, atau pagi hari yang tenang bersama keluarga. Roti ini juga cocok untuk momen reflektif—menikmatinya pelan-pelan sambil menyeruput teh hangat.
      </p>
      <h2 class="section-title">Sebuah Simbol Kehangatan di Era Serba Cepat</h2>
      <p class="text-gray-800 leading-relaxed">
        Di era di mana segalanya serba instan dan digital, kesenangan seperti ini menjadi langka tapi sangat berharga. Sebuah potong roti yang renyah di luar dan lembut di dalam, disajikan dengan penuh cinta, bisa menjadi pengingat bahwa kebahagiaan tidak selalu datang dari hal besar—kadang ia tersembunyi di balik camilan hangat yang sederhana.
      </p>
    `,
  },
  {
    id: 7,
    title: "Roti & Pastri — Perpaduan Enak yang Selalu Menggoda",
    date: "May 5, 2024",
    category: "Food",
    views: 0,
    readTime: "4 min",
    excerpt: "Dalam hiruk pikuk kehidupan modern, kita sering lupa bagaimana nikmatnya momen sederhana yang bisa membuat hati tenang dan bahagia.",
    featuredImage: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=774&auto=format&fit=crop",
    introContent: "Dalam hiruk pikuk kehidupan modern, kita sering lupa bagaimana nikmatnya momen sederhana yang bisa membuat hati tenang dan bahagia. Salah satunya adalah ketika kita duduk santai, menikmati sepotong roti hangat atau pastri renyah yang baru keluar dari oven. Aroma mentega yang menyeruak dari dapur, tekstur lapisan luar yang renyah, dan kelembutan di dalamnya adalah kombinasi yang tidak pernah gagal menggoda. Camilan seperti ini tidak sekadar mengisi perut, tetapi juga mengisi ruang-ruang kecil dalam hati yang kadang terlupakan karena kesibukan.",
    additionalContent: `
      <h2 class="section-title">Roti yang Crunchy di Luar, Lembut di Dalam</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Roti yang benar-benar menggugah selera bukan hanya soal rasa, tetapi juga soal tekstur. Permukaan luar yang crunchy, dipanggang hingga keemasan dan sedikit pecah saat disentuh, memberikan sensasi gigitan pertama yang memuaskan. Namun saat digigit lebih dalam, kita akan menemukan bagian dalam yang empuk, lembut, dan sedikit hangat—seolah-olah roti itu menyambut kita pulang. Inilah yang membuat roti terasa istimewa. Tidak hanya kenyang, tetapi juga nyaman. Apalagi jika disantap dengan segelas teh hangat atau kopi yang baru diseduh, nikmatnya tiada tara.
      </p>
      <div class="grid grid-cols-2 gap-4 my-8">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop" 
             alt="Crunchy bread" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1470&auto=format&fit=crop" 
             alt="Freshly baked" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
      </div>
      <h2 class="section-title">Pastri: Si Kecil yang Penuh Kejutan</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Sementara roti memberi kenyamanan, pastri menawarkan kejutan. Pastri sering kali kecil ukurannya, namun besar dalam rasa. Lapisan-lapisan tipis yang dibuat dengan teknik khusus menghasilkan tekstur yang renyah dan buttery di setiap gigitan. Dari isian cokelat lembut, apel kayu manis, hingga keju asin atau kacang almond, setiap pastri membawa karakter yang berbeda. Itulah mengapa pastri selalu menjadi favorit di meja sarapan, camilan sore, atau bahkan sebagai hadiah kecil untuk orang tersayang. Satu gigitan pastri yang baik bisa membuat hari yang paling buruk sekalipun terasa lebih ringan.
      </p>
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop" 
             alt="Pastry variety" 
             class="rounded-lg shadow-md w-full max-h-96 object-cover mx-auto">
      </div>
      <h2 class="section-title">Kombinasi Enak untuk Setiap Suasana</h2>
      <p class="text-gray-800 leading-relaxed mb-6">
        Roti dan pastri adalah pilihan camilan yang fleksibel dan universal. Baik dinikmati saat sarapan pagi dengan secangkir kopi hangat, sebagai pengisi energi di tengah hari, atau sebagai teman membaca buku saat sore menjelang malam. Rasa manis dan gurih yang bisa dikombinasikan dengan topping atau isian apapun membuat roti dan pastri selalu relevan dan menarik. Bahkan, dengan sedikit kreativitas, keduanya bisa ditingkatkan menjadi hidangan mewah untuk acara spesial.
      </p>
      <h2 class="section-title">Menikmati Hidup Lewat Gigitan Kecil</h2>
      <p class="text-gray-800 leading-relaxed">
        Saat dunia terasa terlalu cepat dan waktu serasa berlari, kadang kita hanya perlu duduk, mengambil napas, dan menikmati sesuatu yang sederhana. Sepotong roti atau pastri bisa menjadi pengingat bahwa hidup tak selalu harus terburu-buru. Kenikmatan kecil seperti ini adalah bentuk self-care yang paling mudah diakses. Sebuah camilan hangat bisa mengembalikan mood, membangkitkan semangat, dan bahkan menginspirasi momen penuh syukur. Roti dan pastri bukan sekadar makanan, tetapi simbol dari kebahagiaan sederhana yang tetap kita butuhkan di tengah kehidupan modern.
      </p>
    `,
  }
];

// External articles data
window.externalArticlesData = [
  {
    id: 1,
    title: "The Complete Guide to Flexbox",
    date: "May 2, 2024",
    source: "CSS-Tricks",
    excerpt: "Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop",
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    linkText: "Read on CSS-Tricks"
  },
  {
    id: 2,
    title: "Modern CSS Solutions for Common Problems",
    date: "April 28, 2024",
    source: "Smashing Magazine",
    excerpt: "This article explores modern CSS solutions to problems that web developers have been trying to solve with JavaScript for years.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1471&auto=format&fit=crop",
    url: "https://www.smashingmagazine.com/category/css/",
    linkText: "Read on Smashing Magazine"
  },
  {
    id: 3,
    title: "The State of JavaScript Frameworks in 2024",
    date: "April 15, 2024",
    source: "Dev.to",
    excerpt: "A comprehensive overview of the current landscape of JavaScript frameworks, their strengths, weaknesses, and when to use each one.",
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1476&auto=format&fit=crop",
    url: "https://dev.to/t/javascript",
    linkText: "Read on Dev.to"
  },
  {
    id: 4,
    title: "Core Web Vitals: The Ultimate Guide",
    date: "April 10, 2024",
    source: "Web.dev",
    excerpt: "Learn everything you need to know about Core Web Vitals, why they matter for SEO, and how to optimize your website to improve these critical metrics.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
    url: "https://web.dev/learn/performance/",
    linkText: "Read on Web.dev"
  },
  {
    id: 5,
    title: "Frontend Development Best Practices for 2024",
    date: "April 5, 2024",
    source: "FreeCodeCamp",
    excerpt: "A detailed guide to the latest best practices in frontend development, covering everything from accessibility to performance optimization.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    url: "https://www.freecodecamp.org/news/tag/front-end-development/",
    linkText: "Read on FreeCodeCamp"
  },
  {
    id: 6,
    title: "Designing for Dark Mode: A Comprehensive Guide",
    date: "March 25, 2024",
    source: "UX Collective",
    excerpt: "Everything you need to know about designing for dark mode, from color selection to accessibility considerations and implementation tips.",
    image: "https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=1470&auto=format&fit=crop",
    url: "https://uxdesign.cc/",
    linkText: "Read on UX Collective"
  }
];

// Analytics utility functions
window.blogAnalytics = {
  // Track page view
  trackPageView: function(page) {
    // In a real implementation, this would send data to an analytics service
    console.log(`Page view tracked: ${page}`);

    // Store in localStorage for demonstration
    try {
      const analyticsKey = 'topast_blog_analytics';
      let analyticsData = JSON.parse(localStorage.getItem(analyticsKey) || '{}');

      if (!analyticsData.pageViews) {
        analyticsData.pageViews = {};
      }

      if (!analyticsData.pageViews[page]) {
        analyticsData.pageViews[page] = 0;
      }

      analyticsData.pageViews[page]++;
      analyticsData.lastVisit = new Date().toISOString();

      localStorage.setItem(analyticsKey, JSON.stringify(analyticsData));

      // Update the analytics dashboard if it exists
      if (typeof updateAnalyticsDashboard === 'function') {
        updateAnalyticsDashboard();
      }
    } catch (e) {
      console.error("Error tracking analytics:", e);
    }
  },

  // Track event (click, conversion, etc.)
  trackEvent: function(category, action, label = null) {
    // In a real implementation, this would send data to an analytics service
    console.log(`Event tracked: ${category} - ${action}${label ? ' - ' + label : ''}`);

    // Store in localStorage for demonstration
    try {
      const analyticsKey = 'topast_blog_analytics';
      let analyticsData = JSON.parse(localStorage.getItem(analyticsKey) || '{}');

      if (!analyticsData.events) {
        analyticsData.events = [];
      }

      analyticsData.events.push({
        category,
        action,
        label,
        timestamp: new Date().toISOString()
      });

      // Limit stored events to prevent localStorage overflow
      if (analyticsData.events.length > 100) {
        analyticsData.events = analyticsData.events.slice(-100);
      }

      localStorage.setItem(analyticsKey, JSON.stringify(analyticsData));

      // Update the analytics dashboard if it exists
      if (typeof updateAnalyticsDashboard === 'function') {
        updateAnalyticsDashboard();
      }
    } catch (e) {
      console.error("Error tracking event:", e);
    }
  },

  // Get analytics data
  getAnalyticsData: function() {
    try {
      const analyticsKey = 'topast_blog_analytics';
      return JSON.parse(localStorage.getItem(analyticsKey) || '{}');
    } catch (e) {
      console.error("Error getting analytics data:", e);
      return {};
    }
  }
};

// Export all data and functions
window.blogData = {
  analytics: window.analyticsData,
  blogPosts: window.blogPostsData,
  externalArticles: window.externalArticlesData,
  analyticsUtils: window.blogAnalytics
};