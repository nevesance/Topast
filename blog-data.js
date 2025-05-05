// Blog Posts Data
const blogPosts = {
  1: {
    id: 1,
    title: "An Ode to Toast, simplest of breakfast",
    date: "May 15, 2024",
    category: "Food",
    views: 1250,
    readTime: "5 min",
    excerpt: "Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut.",
    featuredImage: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop",
    content: `
      <p class="mb-4 text-gray-800 leading-relaxed">Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut. Nah, Topast hadir sebagai solusi untuk pengganjal lapar yang cocok banget buat kamu yang ingin ngemil sambil menikmati waktu senggang.</p>
      <p class="mb-8 text-gray-800 leading-relaxed">Dengan berbagai varian rasa dan produk yang kreatif, Topast bisa jadi pilihan tepat untuk memenuhi selera makananmu.</p>

      <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop" 
           alt="Baking ingredients banner" 
           class="w-full h-auto object-cover rounded-lg shadow-md my-8">

      <div class="grid grid-cols-2 gap-4 my-8">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop" 
             alt="Topast Product 1" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1470&auto=format&fit=crop" 
             alt="Topast Product 2" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
      </div>

      <h2 class="text-3xl font-bold text-gray-900 my-6 text-center font-sans">KENAPA HARUS PILIH TOPAST?</h2>
      <p class="mb-10 text-gray-800 leading-relaxed">Tekstur Topast, luar roti yang sedikit garing memberikan kontras yang pas dengan kelembutan roti di dalamnya. Mulai dari Topast Original sampai Topast Ice cream, semuanya punya rasa yang bener-bener pas di lidah. Rasa manis, asin hadir dengan porsi yang nggak bikin eneg. Bahkan, meski kamu sudah sering coba rasa yang sama, ada sensasi baru di setiap gigitannya!</p>

      <h2 class="text-3xl font-bold text-gray-900 my-6 text-center font-sans">KOMPOSISI</h2>
      <p class="mb-10 text-gray-800 leading-relaxed">Topast Original punya ukuran yang pas tanpa bikin perut terasa terlalu penuh. Dalam satu Topast Original, kamu bakal menemukan 1 lembar roti tawar yang lembut, dipadukan dengan 1 lembar kulit pastry ukuran 15x10 cm yang garing dan renyah. Komposisi yang seimbang membuat Topast Original cocok jadi camilan untuk mengganjal lapar.</p>
    `
  },
  2: {
    id: 2,
    title: "Dessert, embracing pleasure in life",
    date: "April 28, 2024",
    category: "Culinary",
    views: 986,
    readTime: "4 min",
    excerpt: "Kehidupan memang penuh dengan tantangan, tapi kamu perlu meluangkan waktu untuk menikmati hal-hal sederhana seperti dessert.",
    featuredImage: "https://images.unsplash.com/photo-1556679343-c1c1c9658f86?q=80&w=1364&auto=format&fit=crop",
    content: `
      <p class="mb-4 text-gray-800 leading-relaxed">Kehidupan memang penuh dengan tantangan, tapi kamu perlu meluangkan waktu untuk menikmati hal-hal sederhana seperti dessert. Nikmati afternoon tea ala café dengan kombinasi teh dan Topast favoritmu di rumah.</p>
      <p class="mb-8 text-gray-800 leading-relaxed">Varian dessert dari Topast hadir dengan berbagai rasa manis yang membuat hari-harimu lebih berwarna.</p>

      <img src="https://images.unsplash.com/photo-1556679343-c1c1c9658f86?q=80&w=1364&auto=format&fit=crop" 
           alt="Various dessert options" 
           class="w-full h-auto object-cover rounded-lg shadow-md my-8">

      <h2 class="text-3xl font-bold text-gray-900 my-6 text-center font-sans">SENSASI DESSERT TOPAST</h2>
      <p class="mb-10 text-gray-800 leading-relaxed">Varian dessert dari Topast tidak hanya menawarkan cita rasa yang lezat, tapi juga pengalaman menikmati makanan manis yang berbeda. Dengan tekstur yang sempurna, kamu akan merasakan kenikmatan dessert premium dengan harga yang terjangkau.</p>
    `
  },
  3: {
    id: 3,
    title: "Super flaky pastry",
    date: "April 20, 2024",
    category: "Recipe",
    views: 1500,
    readTime: "6 min",
    excerpt: "Apa rahasia di balik kulit pastry Topast yang super flaky? Yuk, kenali proses pembuatan pastry yang sempurna dari Topast.",
    featuredImage: "https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?q=80&w=1470&auto=format&fit=crop",
    content: `
      <p class="mb-4 text-gray-800 leading-relaxed">Apa rahasia di balik kulit pastry Topast yang super flaky? Yuk, kenali proses pembuatan pastry yang sempurna dari Topast. Variasikan Topast Original dengan berbagai macam topping yang bisa kamu buat sendiri di rumah.</p>
      <p class="mb-8 text-gray-800 leading-relaxed">Pastry yang flaky atau berlapis-lapis adalah hasil dari teknik pembuatan yang khusus dan bahan-bahan premium yang kami gunakan.</p>

      <img src="https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?q=80&w=1470&auto=format&fit=crop" 
           alt="Flaky pastry closeup" 
           class="w-full h-auto object-cover rounded-lg shadow-md my-8">

      <h2 class="text-3xl font-bold text-gray-900 my-6 text-center font-sans">RAHASIA PASTRY YANG FLAKY</h2>
      <p class="mb-10 text-gray-800 leading-relaxed">Pastry Topast yang flaky adalah hasil dari teknik pelipatan berulang (laminating) yang menciptakan lapisan-lapisan tipis dari adonan dan mentega. Proses ini membutuhkan kesabaran dan ketelitian, tapi hasilnya adalah pastry yang renyah, berlapis, dan lumer di mulut.</p>
    `
  },
  5: {
    id: 5,
    title: "Pengganjal Lapar yang Lezat dan Kekinian",
    date: "May 15, 2024",
    category: "Food",
    views: 102,
    readTime: "5 min",
    excerpt: "Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut.",
    featuredImage: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop",
    content: `
      <p class="mb-4 text-gray-800 leading-relaxed">Di tengah kesibukan dan rutinitas yang padat, kadang kita butuh sesuatu yang praktis, enak, dan mengenyangkan untuk mengisi perut. Nah, Topast hadir sebagai solusi untuk pengganjal lapar yang cocok banget buat kamu yang ingin ngemil sambil menikmati waktu senggang.</p>
      <p class="mb-8 text-gray-800 leading-relaxed">Dengan berbagai varian rasa dan produk yang kreatif, Topast bisa jadi pilihan tepat untuk memenuhi selera makananmu.</p>

      <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop" 
           alt="Baking ingredients banner" 
           class="w-full h-auto object-cover rounded-lg shadow-md my-8">

      <div class="grid grid-cols-2 gap-4 my-8">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop" 
             alt="Topast Product 1" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1470&auto=format&fit=crop" 
             alt="Topast Product 2" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=1480&auto=format&fit=crop" 
             alt="Topast Product 3" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
        <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1470&auto=format&fit=crop" 
             alt="Topast Product 4" 
             class="rounded-lg shadow-md w-full h-48 object-cover">
      </div>

      <h2 class="text-3xl font-bold text-gray-900 my-6 text-center font-sans">KENAPA HARUS PILIH TOPAST?</h2>
      <p class="mb-10 text-gray-800 leading-relaxed">Tekstur Topast, luar roti yang sedikit garing memberikan kontras yang pas dengan kelembutan roti di dalamnya. Mulai dari Topast Original sampai Topast Ice cream, semuanya punya rasa yang bener-bener pas di lidah. Rasa manis, asin hadir dengan porsi yang nggak bikin eneg. Bahkan, meski kamu sudah sering coba rasa yang sama, ada sensasi baru di setiap gigitannya!</p>

      <h2 class="text-3xl font-bold text-gray-900 my-6 text-center font-sans">KOMPOSISI</h2>
      <p class="mb-10 text-gray-800 leading-relaxed">Topast Original punya ukuran yang pas tanpa bikin perut terasa terlalu penuh. Dalam satu Topast Original, kamu bakal menemukan 1 lembar roti tawar yang lembut, dipadukan dengan 1 lembar kulit pastry ukuran 15x10 cm yang garing dan renyah. Komposisi yang seimbang membuat Topast Original cocok jadi camilan untuk mengganjal lapar.</p>

      <h2 class="text-3xl font-bold text-gray-900 my-6 font-sans">MAKANAN PENDAMPING KAMU</h2>
      <p class="mb-10 text-gray-800 leading-relaxed">Roti atau gorengan kadang terasa monoton, apalagi kalau sudah sering dimakan. Dengan menggunakan air fryer, Topast tentunya jauh lebih sehat dibandingkan cemilan yang digoreng dalam minyak yang banyak, karena lebih rendah lemak dan kalori. Dengan berbagai varian rasa, pastinya bisa disesuaikan dengan teman ngopi/ngeteh kamu. Yukk tunggu apa lagi, langsung kepoin kita di instagram @topast.id dan Tiktok @topast.id</p>

      <h2 class="text-3xl font-bold text-gray-900 my-6 font-sans">MATCHA KUNAFA VS KLEPON</h2>
      <p class="mb-4 text-gray-800 leading-relaxed">Topast nggak cuma hadir dengan rasa kekinian, tapi juga membawa sentuhan tradisional yang nggak kalah menarik! Dua varian unggulan yang wajib kamu coba adalah Matcha Kunafa terinspirasi dari kunafa yang viral di Dubai dan cita rasa lokal lewat varian Klepon. Siapa bilang rasa tradisional kalah saing? Justru varian ini jadi daya tarik karena masih jarang banget ada roti apalagi pastry yang berani mengangkat rasa khas Indonesia seperti klepon.</p>

      <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1364&auto=format&fit=crop" 
           alt="Matcha Kunafa Topast" 
           class="rounded-lg shadow-md my-8 mx-auto max-w-md w-full h-auto">

      <div class="text-center my-8">
        <a href="#" class="inline-block px-6 py-3 bg-blue-700 text-white rounded shadow hover:bg-blue-800 transition-colors font-medium text-lg">
          Click here to see other Variants
        </a>
      </div>
    `
  }
};

// Functions to work with blog posts
function getAllPosts() {
  return Object.values(blogPosts);
}

function getPost(id) {
  return blogPosts[id] || null;
}

function getRelatedPosts(currentId, limit = 3) {
  return getAllPosts()
    .filter(post => post.id != currentId)
    .slice(0, limit);
}