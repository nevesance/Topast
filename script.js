// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const newsletterForm = document.getElementById('newsletter-form');
const currentYearSpan = document.getElementById('current-year');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toast-title');
const toastMessage = document.getElementById('toast-message');
const toastIcon = document.getElementById('toast-icon');
const toastIconContainer = document.getElementById('toast-icon-container');

// Mobile Menu Toggle
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

// Product Hover Effects
function initProductHover() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-lg', 'translate-y-[-5px]');
      card.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-lg', 'translate-y-[-5px]');
    });
  });
}

// Form Validation
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateNewsletterForm(event) {
  event.preventDefault();
  
  const email = document.getElementById('newsletter-email');
  
  if (!email.value.trim() || !validateEmail(email.value.trim())) {
    showToast('Subscription failed', 'Please enter a valid email address.', 'error');
  } else {
    // Simulate form submission
    newsletterForm.reset();
    showToast('Subscribed!', 'Thank you for subscribing to ToPast news.', 'success');
  }
}

// Add to Cart Functionality
function initAddToCartButtons() {
  document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Add to Cart') || button.textContent.includes('Add To Cart')) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const productCard = this.closest('.product-card') || this.closest('.bg-white.rounded-lg.shadow-md');
        if (productCard) {
          const productName = productCard.querySelector('h3').textContent;
          showToast('Added to Cart', `${productName} has been added to your cart.`, 'success');
        }
      });
    }
  });
}

// Toast Notification
function showToast(title, message, type = 'success') {
  if (!toast) return;
  
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  
  if (type === 'success') {
    toastIconContainer.className = 'flex-shrink-0 w-8 h-8 bg-navy/10 text-navy rounded-full flex items-center justify-center mr-4';
    toastIcon.className = 'fas fa-check';
  } else if (type === 'error') {
    toastIconContainer.className = 'flex-shrink-0 w-8 h-8 bg-tomato/10 text-tomato rounded-full flex items-center justify-center mr-4';
    toastIcon.className = 'fas fa-times';
  } else if (type === 'info') {
    toastIconContainer.className = 'flex-shrink-0 w-8 h-8 bg-gold/10 text-gold rounded-full flex items-center justify-center mr-4';
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
    const headerOffset = 120; // Adjusted for the header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (mobileMenu && mobileMenu.classList.contains('max-h-60')) {
      toggleMobileMenu();
    }
  }
}

// Search Functionality
function initSearch() {
  const searchInputs = document.querySelectorAll('input[placeholder="SEARCH & SHOP"]');
  
  searchInputs.forEach(input => {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const searchTerm = this.value.trim();
        
        if (searchTerm) {
          showToast('Search', `Searching for "${searchTerm}"...`, 'info');
          this.value = '';
        }
      }
    });
  });
}

// Fancy Button Hover Effects
function initButtonHoverEffects() {
  const navButtons = document.querySelectorAll('.nav-button');
  
  navButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.transition = 'all 0.2s ease';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });
}

// Parallax Effect on Scroll
function initParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('img.rounded-lg.shadow-lg, img.rounded-lg.shadow-xl');
    
    parallaxElements.forEach(element => {
      // Get the element's distance from the top of the page
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (elementTop < scrollPosition + viewportHeight && 
          elementTop + elementHeight > scrollPosition) {
        
        // Calculate how far the element is from the center of the viewport
        const distanceFromCenter = (elementTop + elementHeight / 2) - (scrollPosition + viewportHeight / 2);
        
        // Apply parallax effect (subtle movement)
        const parallaxOffset = distanceFromCenter * 0.05;
        element.style.transform = `translateY(${parallaxOffset}px)`;
      }
    });
  });
}

// Event View Counter Functionality
function initEventViewCounter() {
  const eventCards = document.querySelectorAll('.event-card');
  
  if (eventCards.length === 0) return;
  
  // Load view counts from localStorage or initialize if not present
  const eventViewCounts = JSON.parse(localStorage.getItem('eventViewCounts')) || {
    'booth': 10000,
    'bazaar': 10000,
    'gading': 10000
  };
  
  // Update view counters on the page
  document.querySelectorAll('.event-views').forEach(counter => {
    const id = counter.id.split('-')[0];
    const count = eventViewCounts[id];
    counter.textContent = count >= 1000 
      ? `${(count / 1000).toFixed(1)}K` 
      : count.toString();
  });
  
  // Add click event to event cards to track views
  eventCards.forEach(card => {
    card.addEventListener('click', function() {
      const titleElement = this.querySelector('h3');
      if (titleElement) {
        const title = titleElement.textContent.toLowerCase();
        // Increment view count
        eventViewCounts[title] = (eventViewCounts[title] || 0) + 1;
        
        // Save to localStorage
        localStorage.setItem('eventViewCounts', JSON.stringify(eventViewCounts));
        
        // Update display
        const counterElement = document.getElementById(`${title}-views`);
        if (counterElement) {
          const newCount = eventViewCounts[title];
          counterElement.textContent = newCount >= 1000 
            ? `${(newCount / 1000).toFixed(1)}K` 
            : newCount.toString();
        }
      }
    });
  });
}

// Like Counter Functionality
function initLikeCounter() {
  // Load like counts from localStorage or initialize if not present
  const likeCounts = JSON.parse(localStorage.getItem('eventLikeCounts')) || {
    'booth': 500,
    'bazaar': 500,
    'gading': 500
  };
  
  // Add click handlers to like buttons
  document.querySelectorAll('.fa-heart').forEach(heartIcon => {
    const likeCounterId = heartIcon.parentElement.id?.split('-')[0];
    const likeCounterElement = document.getElementById(`${likeCounterId}-likes`);
    
    heartIcon.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle active state
      const isActive = this.classList.contains('text-tomato');
      
      if (likeCounterId && likeCounterElement) {
        if (!isActive) {
          // Like
          likeCounts[likeCounterId]++;
          this.classList.add('text-tomato');
        } else {
          // Unlike
          likeCounts[likeCounterId]--;
          this.classList.remove('text-tomato');
        }
        
        // Update display
        likeCounterElement.textContent = likeCounts[likeCounterId] > 500 
          ? `${likeCounts[likeCounterId]}` 
          : '500+';
        
        // Save to localStorage
        localStorage.setItem('eventLikeCounts', JSON.stringify(likeCounts));
      }
    });
  });
}

// Blog View Counter Synchronization
function initBlogViewCounters() {
  // Load view counts from localStorage or initialize if not present
  const viewCounts = JSON.parse(localStorage.getItem('blogViewCounts')) || {
    'article-1': 1200,
    'article-2': 986,
    'article-3': 1500,
    'article-4': 2300
  };
  
  // Update homepage article view counters
  const homepageViewCounters = document.querySelectorAll('[id^="article-"][id$="-index-views"]');
  if (homepageViewCounters.length > 0) {
    homepageViewCounters.forEach(counter => {
      const id = counter.id.split('-index-views')[0];
      const count = viewCounts[id];
      if (count !== undefined) {
        counter.textContent = count >= 1000 
          ? `${(count / 1000).toFixed(1)}K` 
          : count.toString();
      }
    });
  }
  
  // Add click event on homepage article links to track views
  document.querySelectorAll('a[href="blog.html"]').forEach(link => {
    const article = link.closest('div.bg-white.rounded-lg');
    if (article) {
      const headingElement = article.querySelector('h3');
      if (headingElement) {
        link.addEventListener('click', function() {
          const title = headingElement.textContent;
          let articleId;
          
          // Determine which article this is
          if (title.includes("Toast")) {
            articleId = 'article-1';
          } else if (title.includes("Benefits")) {
            articleId = 'article-2';
          } else if (title.includes("flaky")) {
            articleId = 'article-4';
          } else {
            return; // Unknown article
          }
          
          // Increment view count
          viewCounts[articleId] = (viewCounts[articleId] || 0) + 1;
          
          // Save to localStorage
          localStorage.setItem('blogViewCounts', JSON.stringify(viewCounts));
        });
      }
    }
  });
}

// Initialize the page
function init() {
  // Set current year in footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  
  // Setup event listeners
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', validateNewsletterForm);
  }
  
  // Initialize interactive elements
  initProductHover();
  initButtonHoverEffects();
  initSearch();
  initAddToCartButtons();
  initEventViewCounter();
  initLikeCounter();
  initBlogViewCounters();
  
  // Add smooth scrolling to all in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.getAttribute('href') !== '#') {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
          smoothScrollToElement(targetId);
        }
      });
    }
  });
  
  // Initialize parallax effect
  initParallaxEffect();
  
  // Add subtle shadow to header on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('shadow-md');
        header.style.backgroundColor = 'rgba(248, 244, 232, 0.95)';
        header.style.backdropFilter = 'blur(8px)';
      } else {
        header.classList.remove('shadow-md');
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
      }
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);