// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const featuresGrid = document.getElementById('features-grid');
const gallerySlides = document.getElementById('gallery-slides');
const galleryIndicators = document.getElementById('gallery-indicators');
const prevSlideButton = document.getElementById('prev-slide');
const nextSlideButton = document.getElementById('next-slide');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');
const currentYearSpan = document.getElementById('current-year');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toast-title');
const toastMessage = document.getElementById('toast-message');
const toastIcon = document.getElementById('toast-icon');
const toastIconContainer = document.getElementById('toast-icon-container');

// Data
const features = [
  {
    icon: "fas fa-palette",
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-primary dark:text-blue-400",
    title: "Responsive Design",
    description: "Create websites that look perfect on any device, from mobile phones to desktop computers."
  },
  {
    icon: "fas fa-code",
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500 dark:text-green-400",
    title: "Modern JavaScript",
    description: "Add interactive features with clean, modern JavaScript that enhances user experience."
  },
  {
    icon: "fas fa-paint-brush",
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500 dark:text-violet-400",
    title: "Tailwind Styling",
    description: "Utilize the power of Tailwind CSS for rapid styling without leaving your HTML."
  },
  {
    icon: "fas fa-moon",
    iconBg: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-500 dark:text-yellow-400",
    title: "Dark/Light Mode",
    description: "Support both dark and light themes with smooth transitions between modes."
  },
  {
    icon: "fas fa-check-circle",
    iconBg: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500 dark:text-red-400",
    title: "Form Validation",
    description: "Implement client-side validation for contact forms and user input with clear feedback."
  },
  {
    icon: "fas fa-images",
    iconBg: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500 dark:text-indigo-400",
    title: "Image Gallery",
    description: "Display your images in an interactive gallery with smooth transitions and controls."
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    alt: "Modern website design on laptop",
    title: "E-commerce Redesign",
    description: "A modern shopping experience with intuitive navigation"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    alt: "Dashboard interface design",
    title: "Analytics Dashboard",
    description: "Data visualization with interactive charts and filters"
  },
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    alt: "Mobile app interface",
    title: "Portfolio Website",
    description: "Showcasing creative work with an elegant design"
  }
];

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark' || (savedTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    document.documentElement.classList.remove('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
}

// Mobile Menu
function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.contains('max-h-60');
  
  if (isOpen) {
    mobileMenu.classList.remove('max-h-60');
    mobileMenu.classList.add('max-h-0');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
  } else {
    mobileMenu.classList.remove('max-h-0');
    mobileMenu.classList.add('max-h-60');
    mobileMenuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
  }
}

// Features Section
function renderFeatures() {
  featuresGrid.innerHTML = features.map((feature, index) => `
    <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300">
      <div class="w-12 h-12 ${feature.iconBg} rounded-full flex items-center justify-center mb-6">
        <i class="${feature.icon} ${feature.iconColor} text-xl"></i>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">${feature.title}</h3>
      <p class="text-gray-600 dark:text-gray-300">
        ${feature.description}
      </p>
    </div>
  `).join('');
}

// Gallery Section
let currentSlide = 0;
let slideWidth = 0;

function renderGallery() {
  // Render slides
  gallerySlides.innerHTML = galleryImages.map((image, index) => `
    <div class="min-w-full relative">
      <img 
        src="${image.src}"
        alt="${image.alt}"
        class="w-full h-[500px] object-cover"
      />
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <h3 class="text-white text-xl font-bold">${image.title}</h3>
        <p class="text-gray-200">${image.description}</p>
      </div>
    </div>
  `).join('');
  
  // Render indicators
  galleryIndicators.innerHTML = galleryImages.map((_, index) => `
    <button
      data-slide="${index}"
      class="w-3 h-3 rounded-full focus:outline-none ${
        index === 0 
          ? 'bg-primary opacity-100' 
          : 'bg-gray-300 dark:bg-gray-600 opacity-50 hover:opacity-75'
      }"
      aria-label="Go to slide ${index + 1}"
    ></button>
  `).join('');
  
  // Add event listeners to indicators
  document.querySelectorAll('#gallery-indicators button').forEach(button => {
    button.addEventListener('click', () => {
      goToSlide(parseInt(button.getAttribute('data-slide')));
    });
  });
  
  // Update slideWidth
  updateSlideWidth();
}

function updateSlideWidth() {
  slideWidth = document.getElementById('gallery-slider').clientWidth;
  updateSlidePosition();
}

function updateSlidePosition() {
  gallerySlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  
  // Update indicators
  document.querySelectorAll('#gallery-indicators button').forEach((button, index) => {
    if (index === currentSlide) {
      button.classList.add('bg-primary', 'opacity-100');
      button.classList.remove('bg-gray-300', 'dark:bg-gray-600', 'opacity-50');
    } else {
      button.classList.remove('bg-primary', 'opacity-100');
      button.classList.add('bg-gray-300', 'dark:bg-gray-600', 'opacity-50');
    }
  });
}

function goToSlide(index) {
  currentSlide = index;
  updateSlidePosition();
}

function goToPrevSlide() {
  currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
  updateSlidePosition();
}

function goToNextSlide() {
  currentSlide = (currentSlide + 1) % galleryImages.length;
  updateSlidePosition();
}

// Form Validation
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateContactForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');
  
  let isValid = true;
  
  // Reset errors
  [nameError, emailError, subjectError, messageError].forEach(el => {
    el.classList.add('hidden');
  });
  
  // Validate name
  if (!name.value.trim()) {
    nameError.textContent = 'Please enter your name';
    nameError.classList.remove('hidden');
    isValid = false;
  }
  
  // Validate email
  if (!email.value.trim()) {
    emailError.textContent = 'Please enter your email';
    emailError.classList.remove('hidden');
    isValid = false;
  } else if (!validateEmail(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email address';
    emailError.classList.remove('hidden');
    isValid = false;
  }
  
  // Validate subject
  if (!subject.value.trim()) {
    subjectError.textContent = 'Please enter a subject';
    subjectError.classList.remove('hidden');
    isValid = false;
  }
  
  // Validate message
  if (!message.value.trim()) {
    messageError.textContent = 'Please enter your message';
    messageError.classList.remove('hidden');
    isValid = false;
  }
  
  if (isValid) {
    // Simulate form submission
    const submitText = document.getElementById('submit-text');
    submitText.textContent = 'Sending...';
    
    setTimeout(() => {
      // Reset form
      contactForm.reset();
      submitText.textContent = 'Send Message';
      
      // Show success toast
      showToast('Message sent!', 'Thank you for your message. We will get back to you soon.', 'success');
    }, 1000);
  }
}

function validateNewsletterForm(event) {
  event.preventDefault();
  
  const email = document.getElementById('newsletter-email');
  
  if (!email.value.trim() || !validateEmail(email.value.trim())) {
    showToast('Subscription failed', 'Please enter a valid email address.', 'error');
  } else {
    // Simulate form submission
    newsletterForm.reset();
    showToast('Subscribed!', 'Thank you for subscribing to our newsletter.', 'success');
  }
}

// Toast Notification
function showToast(title, message, type = 'success') {
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  
  if (type === 'success') {
    toastIconContainer.className = 'flex-shrink-0 w-8 h-8 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-4';
    toastIcon.className = 'fas fa-check';
  } else if (type === 'error') {
    toastIconContainer.className = 'flex-shrink-0 w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-4';
    toastIcon.className = 'fas fa-times';
  } else if (type === 'info') {
    toastIconContainer.className = 'flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mr-4';
    toastIcon.className = 'fas fa-info';
  }
  
  // Show toast
  toast.classList.remove('translate-y-10', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  
  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3000);
}

// Smooth Scrolling
function smoothScrollToElement(elementId) {
  const element = document.getElementById(elementId);
  
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (mobileMenu.classList.contains('max-h-60')) {
      toggleMobileMenu();
    }
  }
}

// Initialize the page
function init() {
  // Set current year in footer
  currentYearSpan.textContent = new Date().getFullYear();
  
  // Initialize theme
  initTheme();
  
  // Render sections
  renderFeatures();
  renderGallery();
  
  // Setup event listeners
  themeToggle.addEventListener('click', toggleTheme);
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  prevSlideButton.addEventListener('click', goToPrevSlide);
  nextSlideButton.addEventListener('click', goToNextSlide);
  contactForm.addEventListener('submit', validateContactForm);
  newsletterForm.addEventListener('submit', validateNewsletterForm);
  
  // Add smooth scrolling to all in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      smoothScrollToElement(targetId);
    });
  });
  
  // Add window resize event for gallery
  window.addEventListener('resize', updateSlideWidth);
  
  // Auto-advance gallery slides every 5 seconds
  setInterval(goToNextSlide, 5000);
  
  // Add scroll event to header for shadow
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 10) {
      header.classList.add('shadow-sm');
    } else {
      header.classList.remove('shadow-sm');
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);