/**
 * Topast Blog System
 * This file serves as the central data source for all blog posts and articles
 */

// Blog data store
const blogData = {
  // Internal blog posts
  blogPosts: {
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
    4: {
      id: 4,
      title: "Making the perfect hot chocolate",
      date: "April 5, 2024",
      category: "Drinks",
      views: 874,
      readTime: "3 min",
      excerpt: "Ingin menikmati hot chocolate sempurna di rumah? Topast punya resep spesial untuk menemani momen santaimu.",
      featuredImage: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=1470&auto=format&fit=crop",
      content: `
        <p class="mb-4 text-gray-800 leading-relaxed">Hot chocolate adalah minuman sempurna untuk menemani Topast saat cuaca dingin atau momen santai di rumah. Kombinasi coklat yang kaya dan krimi dengan manisnya Topast menciptakan pengalaman menikmati makanan yang tak terlupakan.</p>
        <p class="mb-8 text-gray-800 leading-relaxed">Berikut resep hot chocolate spesial ala Topast yang bisa kamu coba di rumah.</p>

        <img src="https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=1470&auto=format&fit=crop" 
             alt="Hot chocolate with marshmallows" 
             class="w-full h-auto object-cover rounded-lg shadow-md my-8">

        <h2 class="text-3xl font-bold text-gray-900 my-6 text-center font-sans">RESEP HOT CHOCOLATE TOPAST</h2>
        <p class="mb-2 text-gray-800 leading-relaxed">Bahan-bahan:</p>
        <ul class="list-disc pl-6 mb-6 text-gray-800">
          <li>2 sendok makan coklat bubuk berkualitas</li>
          <li>2 sendok makan gula (sesuaikan dengan selera)</li>
          <li>250 ml susu full cream</li>
          <li>50 gram dark chocolate, potong kecil</li>
          <li>Sejumput garam</li>
          <li>Marshmallow dan whipped cream untuk topping (opsional)</li>
        </ul>

        <p class="mb-2 text-gray-800 leading-relaxed">Cara membuat:</p>
        <ol class="list-decimal pl-6 mb-10 text-gray-800">
          <li>Campurkan coklat bubuk, gula, dan garam dalam panci.</li>
          <li>Tambahkan sedikit susu, aduk hingga menjadi pasta.</li>
          <li>Tuangkan sisa susu sambil diaduk.</li>
          <li>Panaskan dengan api kecil, jangan sampai mendidih.</li>
          <li>Masukkan potongan dark chocolate, aduk hingga meleleh.</li>
          <li>Angkat dan sajikan dengan marshmallow atau whipped cream.</li>
        </ol>

        <p class="mb-10 text-gray-800 leading-relaxed">Nikmati hot chocolate hangat ini bersama Topast Original atau Topast Cinnamon untuk perpaduan rasa yang sempurna!</p>
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
  },

  // External articles (from articles.html)
  externalArticles: {
    1: {
      id: 1,
      title: "The Complete Guide to Flexbox",
      date: "May 2, 2024",
      source: "CSS-Tricks",
      excerpt: "Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element.",
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop"
    },
    2: {
      id: 2,
      title: "Modern CSS Solutions for Common Problems",
      date: "April 28, 2024",
      source: "Smashing Magazine",
      excerpt: "This article explores modern CSS solutions to problems that web developers have been trying to solve with JavaScript for years.",
      url: "https://www.smashingmagazine.com/category/css/",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1471&auto=format&fit=crop"
    },
    3: {
      id: 3,
      title: "The State of JavaScript Frameworks in 2024",
      date: "April 15, 2024",
      source: "Dev.to",
      excerpt: "A comprehensive overview of the current landscape of JavaScript frameworks, their strengths, weaknesses, and when to use each one.",
      url: "https://dev.to/t/javascript",
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1476&auto=format&fit=crop"
    },
    4: {
      id: 4,
      title: "Core Web Vitals: The Ultimate Guide",
      date: "April 10, 2024",
      source: "Web.dev",
      excerpt: "Learn everything you need to know about Core Web Vitals, why they matter for SEO, and how to optimize your website to improve these critical metrics.",
      url: "https://web.dev/learn/performance/",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop"
    },
    5: {
      id: 5,
      title: "Frontend Development Best Practices for 2024",
      date: "April 5, 2024",
      source: "FreeCodeCamp",
      excerpt: "A detailed guide to the latest best practices in frontend development, covering everything from accessibility to performance optimization.",
      url: "https://www.freecodecamp.org/news/tag/front-end-development/",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
    },
    6: {
      id: 6,
      title: "Designing for Dark Mode: A Comprehensive Guide",
      date: "March 25, 2024",
      source: "UX Collective",
      excerpt: "Everything you need to know about designing for dark mode, from color selection to accessibility considerations and implementation tips.",
      url: "https://uxdesign.cc/",
      image: "https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=1470&auto=format&fit=crop"
    }
  },

  // View counts storage in localStorage (will be initialized in pageLoad function)
  viewCountStorage: "topast_blog_view_counts"
};

/**
 * Returns all blog posts
 */
function getAllBlogPosts() {
  return Object.values(blogData.blogPosts);
}

/**
 * Returns a specific blog post by ID
 * @param {number|string} id - The blog post ID
 */
function getBlogPost(id) {
  // Convert to number if it's a string
  if (typeof id === 'string') {
    id = parseInt(id, 10);
  }
  
  return blogData.blogPosts[id] || null;
}

/**
 * Get related blog posts (excluding the current post)
 * @param {number|string} currentId - The current blog post ID
 * @param {number} limit - Maximum number of posts to return
 */
function getRelatedBlogPosts(currentId, limit = 3) {
  // Convert to number if it's a string
  if (typeof currentId === 'string') {
    currentId = parseInt(currentId, 10);
  }
  
  return getAllBlogPosts()
    .filter(post => post.id != currentId)
    .slice(0, limit);
}

/**
 * Returns all external articles
 */
function getAllExternalArticles() {
  return Object.values(blogData.externalArticles);
}

/**
 * Returns a specific external article by ID
 * @param {number|string} id - The article ID
 */
function getExternalArticle(id) {
  // Convert to number if it's a string
  if (typeof id === 'string') {
    id = parseInt(id, 10);
  }
  
  return blogData.externalArticles[id] || null;
}

/**
 * Increments the view count for a blog post
 * @param {number|string} id - The blog post ID
 */
function incrementBlogPostViews(id) {
  // Convert to number if it's a string
  if (typeof id === 'string') {
    id = parseInt(id, 10);
  }
  
  const post = blogData.blogPosts[id];
  if (!post) return null;
  
  // First check if we have a view count in localStorage
  try {
    const viewCounts = getViewCounts();
    
    // Create a unique key for this post
    const postKey = `post_${id}`;
    
    // If we have a stored count, use that instead of the default
    if (viewCounts[postKey]) {
      viewCounts[postKey]++;
    } else {
      // Start with the default count + 1
      viewCounts[postKey] = post.views + 1;
    }
    
    // Update the post views
    post.views = viewCounts[postKey];
    
    // Save back to localStorage
    saveViewCounts(viewCounts);
    
    return post;
  } catch (e) {
    // If localStorage fails, just increment in memory
    post.views++;
    return post;
  }
}

/**
 * Gets the view counts from localStorage
 */
function getViewCounts() {
  try {
    const counts = localStorage.getItem(blogData.viewCountStorage);
    return counts ? JSON.parse(counts) : {};
  } catch (e) {
    console.error("Error accessing localStorage:", e);
    return {};
  }
}

/**
 * Saves the view counts to localStorage
 * @param {Object} counts - The view counts object
 */
function saveViewCounts(counts) {
  try {
    localStorage.setItem(blogData.viewCountStorage, JSON.stringify(counts));
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
}

/**
 * Initialize the blog system on page load
 */
function initBlogSystem() {
  const currentUrl = window.location.pathname;
  
  // Check which page we're on and initialize accordingly
  if (currentUrl.includes('blog-post.html')) {
    // We're on a blog post page
    initBlogPostPage();
  } else if (currentUrl.includes('blog.html')) {
    // We're on the blog listing page
    initBlogListingPage();
  } else if (currentUrl.includes('articles.html')) {
    // We're on the external articles page
    initArticlesPage();
  }
}

/**
 * Initialize the blog post page
 */
function initBlogPostPage() {
  // Get post ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id') || '5'; // Default to post 5 if none specified
  
  // Increment view count
  incrementBlogPostViews(postId);
  
  // Get post data
  const post = getBlogPost(postId);
  
  if (post) {
    // Update page title
    document.title = `Topast - ${post.title}`;
    
    // Load post content
    const blogContainer = document.getElementById('blog-post-container');
    if (blogContainer) {
      blogContainer.innerHTML = `
        <!-- Blog post header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">${post.title}</h1>
          <div class="flex items-center justify-center text-gray-600 text-sm mt-4">
            <span>${post.date}</span>
            <span class="mx-2">•</span>
            <span>${post.readTime} read</span>
            <span class="mx-2">•</span>
            <span><i class="fas fa-eye mr-1"></i> ${post.views} views</span>
          </div>
        </div>

        <!-- Blog post content -->
        <article class="prose prose-lg max-w-none">
          ${post.content}
        </article>
      `;
    }
    
    // Load related posts
    loadRelatedPosts(postId);
  } else {
    // Post not found
    const blogContainer = document.getElementById('blog-post-container');
    if (blogContainer) {
      blogContainer.innerHTML = `
        <div class="text-center py-12">
          <h1 class="text-3xl font-bold text-navy mb-4">Article Not Found</h1>
          <p class="text-gray-600 mb-6">Sorry, the article you're looking for doesn't exist or has been removed.</p>
          <a href="blog.html" class="inline-block px-6 py-3 bg-blue-700 text-white rounded shadow hover:bg-blue-800 transition-colors">
            View All Articles
          </a>
        </div>
      `;
    }
  }
}

/**
 * Load related posts for a blog post
 * @param {number|string} currentPostId - The current blog post ID
 */
function loadRelatedPosts(currentPostId) {
  const relatedPosts = getRelatedBlogPosts(currentPostId, 3);
  const relatedContainer = document.getElementById('related-posts-container');
  
  if (relatedPosts.length > 0 && relatedContainer) {
    let relatedPostsHTML = '';
    
    relatedPosts.forEach(post => {
      relatedPostsHTML += `
        <a href="blog-post.html?id=${post.id}" class="block group">
          <div class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg">
            <img src="${post.featuredImage}" 
                 alt="${post.title}" 
                 class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105">
            <div class="p-4">
              <h4 class="font-bold text-navy group-hover:text-blue-light transition-colors">${post.title}</h4>
              <p class="text-sm text-gray-600 mt-2">${post.date}</p>
            </div>
          </div>
        </a>
      `;
    });
    
    // Add a "View All" card as the last item if we have less than 3 related posts
    if (relatedPosts.length < 3) {
      relatedPostsHTML += `
        <a href="blog.html" class="block group">
          <div class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg">
            <div class="h-48 bg-blue-50 flex items-center justify-center">
              <div class="text-blue-500 text-5xl">
                <i class="fas fa-newspaper"></i>
              </div>
            </div>
            <div class="p-4">
              <h4 class="font-bold text-navy group-hover:text-blue-light transition-colors">View All Articles</h4>
              <p class="text-sm text-gray-600 mt-2">Explore our complete collection</p>
            </div>
          </div>
        </a>
      `;
    }
    
    relatedContainer.innerHTML = relatedPostsHTML;
  }
}

/**
 * Initialize the blog listing page
 */
function initBlogListingPage() {
  const posts = getAllBlogPosts();
  
  // Load article links
  const articleLinksContainer = document.getElementById('article-links-container');
  if (articleLinksContainer) {
    let linksHTML = '';
    posts.forEach(post => {
      linksHTML += `<a href="blog-post.html?id=${post.id}" class="article-link">${post.title}</a>`;
    });
    articleLinksContainer.innerHTML = linksHTML;
  }
  
  // Load featured articles
  const featuredContainer = document.getElementById('featured-posts-container');
  if (featuredContainer) {
    let featuredHTML = '';
    posts.slice(0, 3).forEach(post => {
      featuredHTML += `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="${post.featuredImage}" 
               alt="${post.title}" 
               class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <span>${post.date}</span>
              <span class="mx-2">•</span>
              <span>${post.category}</span>
            </div>
            <h3 class="text-xl font-bold text-navy mb-3">${post.title}</h3>
            <p class="text-gray-600 mb-4">${post.excerpt}</p>
            <a href="blog-post.html?id=${post.id}" class="text-blue-light font-medium flex items-center">
              Read More
              <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </a>
          </div>
        </div>
      `;
    });
    featuredContainer.innerHTML = featuredHTML;
  }
}

/**
 * Initialize the external articles page
 */
function initArticlesPage() {
  const articles = getAllExternalArticles();
  
  // Load articles grid
  const articlesGrid = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8');
  if (articlesGrid) {
    let articlesHTML = '';
    articles.forEach(article => {
      articlesHTML += `
        <div class="article-card bg-white rounded-lg shadow overflow-hidden">
          <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <span>${article.date}</span>
              <span class="mx-2">•</span>
              <span>${article.source}</span>
            </div>
            <h2 class="text-xl font-bold text-secondary mb-3">${article.title}</h2>
            <p class="text-gray-600 mb-4">${article.excerpt}</p>
            <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="text-primary font-medium flex items-center">
              Read on ${article.source}
              <i class="fas fa-external-link-alt ml-2 text-sm"></i>
            </a>
          </div>
        </div>
      `;
    });
    articlesGrid.innerHTML = articlesHTML;
  }
}

// Initialize the blog system when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initBlogSystem);