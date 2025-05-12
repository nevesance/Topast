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
    id: 1,
      title: "Pengganjal Lapar yang Lezat dan Kekinian",
        date: "April 10, 2025",
        category: "Food",
        views: 1200,
        readTime: "5 min",
        excerpt: "Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut.",
        featuredImage: "assets/blog_1/Picture3.png",
        introContent: "Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut. Nah, Topast hadir sebagai solusi untuk pengganjal lapar yang cocok banget buat kamu yang ingin ngemil sambil menikmati waktu senggang. Dengan berbagai varian rasa dan produk yang kreatif, Topast bisa jadi pilihan tepat untuk memenuhi selera makananmu.",
        whyChooseTopast: "Tekstur Topast, luar roti yang sedikit garing memberikan kontras yang pas dengan kelembutan roti di dalamnya. Mulai dari Topast Original sampai Topast Ice cream, semuanya punya rasa yang bener-bener pas di lidah. Rasa manis, asin hadir dengan porsi yang nggak bikin eneg. Bahkan, meski kamu sudah sering coba rasa yang sama, ada sensasi baru di setiap gigitannya!",
        composition: "Topast Original punya ukuran yang pas tanpa bikin perut terasa terlalu penuh. Dalam satu Topast Original, kamu bakal menemukan 1 lembar roti tawar yang lembut, dipadukan dengan 1 lembar kulit pastry ukuran 15x10 cm yang garing dan renyah. Komposisi yang seimbang membuat Topast Original cocok jadi camilan untuk mengganjal lapar.",
        complementaryFood: "Roti atau gorengan kadang terasa monoton, apalagi kalau sudah sering dimakan. Dengan menggunakan air fryer, Topast tentunya jauh lebih sehat dibandingkan cemilan yang digoreng dalam minyak yang banyak, karena lebih rendah lemak dan kalori. Dengan berbagai varian rasa, pastinya bisa disesuaikan dengan teman ngopi/ngeteh kamu. Yukk tunggu apa lagi, langsung kepoin kita di instagram @topast.id dan Tiktok @topast.id",
        specialVariants: "Topast nggak cuma hadir dengan rasa kekinian, tapi juga membawa sentuhan tradisional yang nggak kalah menarik! Dua varian unggulan yang wajib kamu coba adalah Matcha Kunafa terinspirasi dari kunafa yang viral di Dubai dan cita rasa lokal lewat varian Klepon. Siapa bilang rasa tradisional kalah saing? Justru varian ini jadi daya tarik karena masih jarang banget ada roti apalagi pastry yang berani mengangkat rasa khas Indonesia seperti klepon.",
        productImages: [
          { src: "assets/blog_1/Picture2.png", alt: "Topast Product 1" },
          { src: "assets/blog_1/Picture5.png", alt: "Topast Product 2" },
          { src: "assets/blog_1/Picture3.png", alt: "Topast Product 3" },
          { src: "assets/blog_1/Picture7.png", alt: "Topast Product 4" },
        ],
        complementaryFoodImage: "assets/Topast_Matcha.jpg",
        specialVariantsImage: "assets/Topast_klepon.jpg",
      },
      {
        id: 2,
        title: "Roti & Pastri — Perpaduan Enak yang Selalu Menggoda",
        date: "April 16, 2025",
        category: "Food",
        views: 980,
        readTime: "5 min",
        excerpt: "Dalam hiruk pikuk kehidupan modern, kita sering lupa bagaimana nikmatnya momen sederhana yang bisa membuat hati tenang dan bahagia.",
        featuredImage: "assets/Blog_2/top_photo.png",
        introContent: "Dalam hiruk pikuk kehidupan modern, kita sering lupa bagaimana nikmatnya momen sederhana yang bisa membuat hati tenang dan bahagia. Salah satunya adalah ketika kita duduk santai, menikmati sepotong roti hangat atau pastri renyah yang baru keluar dari oven. Aroma mentega yang menyeruak dari dapur, tekstur lapisan luar yang renyah, dan kelembutan di dalamnya adalah kombinasi yang tidak pernah gagal menggoda. Camilan seperti ini tidak sekadar mengisi perut, tetapi juga mengisi ruang-ruang emosional yang kadang kita abaikan—mengingatkan kita pada rumah, kenangan bersama keluarga, dan kenyamanan yang sulit dijelaskan dengan kata-kata.",
        additionalContent: `
          <h2 class="section-title">ROTI YANG CRUNCHY DI LUAR, LEMBUT DI DALAM</h2>
          <p class="text-gray-800 leading-relaxed mb-6">
            Roti yang benar-benar menggugah selera bukan hanya soal rasa, tetapi juga soal tekstur. Permukaan luar yang crunchy, dipanggang hingga keemasan dan sedikit pecah saat disentuh, memberikan sensasi gigitan pertama yang memuaskan. Namun saat digigit lebih dalam, kita akan menemukan bagian dalam yang empuk, lembut, dan sedikit hangat—seolah-olah roti itu menyambut kita pulang. Inilah yang membuat roti terasa istimewa. Tidak hanya kenyang, tetapi juga nyaman. Apalagi jika disantap dengan tambahan mentega yang meleleh di permukaan atau madu yang meresap sempurna ke dalam lapisannya.
          </p>
          <div class="grid grid-cols-2 gap-4 my-8">
            <img src="https://www.tastingtable.com/img/gallery/why-you-shouldnt-slice-into-fresh-baked-bread-before-its-cool/intro-1652472978.jpg" 
                 alt="Crunchy bread" 
                 class="rounded-lg shadow-md w-full h-48 object-cover">
            <img src="https://i.ytimg.com/vi/vKf6DAjaHIM/maxresdefault.jpg" 
                 alt="Freshly baked" 
                 class="rounded-lg shadow-md w-full h-48 object-cover">
          </div>
          <h2 class="section-title">PASTRI: SI KECIL YANG PENUH KEJUTAN</h2>
          <p class="text-gray-800 leading-relaxed mb-6">
            Sementara roti memberi kenyamanan, pastri menawarkan kejutan. Pastri sering kali kecil ukurannya, namun besar dalam rasa. Lapisan-lapisan tipis yang dibuat dengan teknik khusus menghasilkan tekstur yang renyah dan buttery di setiap gigitan. Dari isian cokelat lembut, apel kayu manis, hingga keju asin atau kacang almond, setiap pastri membawa karakter yang berbeda. Itulah mengapa pastri selalu menjadi favorit di meja sarapan, camilan sore, atau bahkan sebagai hadiah kecil untuk orang tercinta. Di balik tampilannya yang mungil, pastri menyimpan rasa yang kompleks dan mewah.
          </p>
          <div class="my-8">
            <img src="https://www.lushplatters.com/wp-content/uploads/2024/03/19f3b4ec-9516-4468-a37b-f2bad79fa6cb.jpg" 
                 alt="Pastry variety" 
                 class="rounded-lg shadow-md w-full max-h-96 object-cover mx-auto">
          </div>
          <h2 class="section-title">KOMBINASI ENAK UNTUK SETIAP SUASANA</h2>
          <p class="text-gray-800 leading-relaxed mb-6">
            Roti dan pastri adalah pilihan camilan yang fleksibel dan universal. Baik dinikmati saat sarapan pagi dengan secangkir kopi hangat, sebagai pengisi energi di tengah hari, atau sebagai teman membaca buku saat sore menjelang malam. Rasa manis dan gurih yang bisa dikombinasikan dengan topping atau isian apapun membuat roti dan pastri selalu relevan dan menarik. Bahkan, dengan sedikit kreativitas, keduanya bisa ditingkatkan menjadi hidangan mewah untuk acara spesial.
          </p>
          <h2 class="section-title">MENIKMATI HIDUP LEWAT GIGITAN KECIL</h2>
          <p class="text-gray-800 leading-relaxed">
            Saat dunia terasa terlalu cepat dan waktu serasa berlari, kadang kita hanya perlu duduk, mengambil napas, dan menikmati sesuatu yang sederhana. Sepotong roti atau pastri bisa menjadi pengingat bahwa hidup tak selalu harus terburu-buru. Kenikmatan kecil seperti ini adalah bentuk self-care yang paling mudah diakses. Sebuah camilan hangat bisa mengembalikan mood, membangkitkan semangat, dan bahkan menginspirasi momen penuh syukur. Roti dan pastri bukan sekadar makanan, tetapi simbol dari perhatian kecil kepada diri sendiri.
          </p>
        `
      },

      {
        id: 3,
        title: "Roti Berlapis Mentega — Kelezatan Sederhana yang Selalu Menggoda",
        date: "March 3, 2025",
        category: "Food",
        views: 750,
        readTime: "6 min",
        excerpt: "Dalam keseharian yang penuh dengan rutinitas dan jadwal yang padat, tidak ada yang lebih menyenangkan dari menemukan momen singkat untuk menikmati sesuatu yang benar-benar kita sukai.",
        featuredImage: "https://www.tastingtable.com/img/gallery/transform-your-morning-toast-by-giving-it-a-literal-twist/l-intro-1699067555.jpg",
        introContent: "Dalam keseharian yang penuh dengan rutinitas dan jadwal yang padat, tidak ada yang lebih menyenangkan dari menemukan momen singkat untuk menikmati sesuatu yang benar-benar kita sukai. Salah satunya adalah sepotong roti berlapis mentega (Buttery Layers) yang disajikan hangat, langsung dari oven. Setiap lapisan yang terlihat mengilap karena mentega yang meleleh memberikan pengalaman visual yang menggoda sebelum kita mencicipinya. Gigitan pertama pun menghadirkan sensasi lembut yang terasa menyatu sempurna dengan rasa gurih, sedikit manis, dan aroma khas roti panggang yang menenangkan.",
        additionalContent: `
          <h2 class="section-title">FLAKY & SOFT: PERPADUAN TEKSTUR YANG MENGHIPNOTIS</h2>
          <p class="text-gray-800 leading-relaxed mb-6">
            Tidak semua roti memiliki karakter seperti ini. Bagian luar yang flaky, tipis dan sedikit garing, memberi kesan elegan sekaligus autentik—hasil dari teknik memanggang yang presisi dan adonan yang kaya mentega. Lalu, saat kita menggigitnya, bagian dalam yang soft dan berpori-pori halus langsung meleleh di lidah. Sensasi kontras ini menghadirkan pengalaman makan yang lebih dalam dan menggugah. Roti seperti ini bukan sekadar makanan ringan; ia adalah karya seni dalam bentuk makanan.
          </p>
          <div class="https://img.freepik.com/free-photo/man-breaking-loaf-bread_23-2148719003.jpg" 
                 alt="Crunchy bread" 
                 class="rounded-lg shadow-md w-full h-48 object-cover">
            <img src="https://www.allrecipes.com/thmb/2GKWhc_9XIMB_bvQc1tx_F4rfbA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6178439-149330d63e9c467a8985e1ec814c18f5.jpg" 
                 alt="Freshly baked" 
                 class="rounded-lg shadow-md w-full h-48 object-cover">
          </div>
          <h2 class="section-title">PASTRI: SI KECIL YANG PENUH KEJUTAN</h2>
          <p class="text-gray-800 leading-relaxed mb-6">
            Sementara roti memberi kenyamanan, pastri menawarkan kejutan. Pastri sering kali kecil ukurannya, namun besar dalam rasa. Lapisan-lapisan tipis yang dibuat dengan teknik khusus menghasilkan tekstur yang renyah dan buttery di setiap gigitan. Dari isian cokelat lembut, apel kayu manis, hingga keju asin atau kacang almond, setiap pastri membawa karakter yang berbeda. Itulah mengapa pastri selalu menjadi favorit di meja sarapan, camilan sore, atau bahkan sebagai hadiah kecil untuk orang tersayang. Satu gigitan pastri yang baik bisa membuat hari yang paling buruk sekalipun terasa lebih ringan.
          </p>
          <div class="my-8">
            <img src="https://cdn.prod.website-files.com/667621531549e628ba255b5c/66e9c3930090d42e98933f3c_weeknight-package-inn-little-washington.jpg" 
                 alt="Pastry variety" 
                 class="rounded-lg shadow-md w-full max-h-96 object-cover mx-auto">
          </div>
          <h2 class="section-title">KOMBINASI ENAK UNTUK SETIAP SUASANA</h2>
          <p class="text-gray-800 leading-relaxed mb-6">
            Roti dan pastri adalah pilihan camilan yang fleksibel dan universal. Baik dinikmati saat sarapan pagi dengan secangkir kopi hangat, sebagai pengisi energi di tengah hari, atau sebagai teman membaca buku saat sore menjelang malam. Rasa manis dan gurih yang bisa dikombinasikan dengan topping atau isian apapun membuat roti dan pastri selalu relevan dan menarik. Bahkan, dengan sedikit kreativitas, keduanya bisa ditingkatkan menjadi hidangan mewah untuk acara spesial.
          </p>
          <h2 class="section-title">MENIKMATI HIDUP LEWAT GIGITAN KECIL</h2>
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