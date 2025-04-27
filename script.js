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
  const productCards = document.querySelectorAll('.bg-white.rounded-lg.shadow-md');
  
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
  const addToCartButtons = document.querySelectorAll('button:contains("Add to Cart")');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.bg-white.rounded-lg');
      const productName = productCard.querySelector('h3').textContent;
      
      showToast('Added to Cart', `${productName} has been added to your cart.`, 'success');
    });
  });
}

// Toast Notification
function showToast(title, message, type = 'success') {
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
    if (mobileMenu.classList.contains('max-h-60')) {
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

// Initialize the page
function init() {
  // Set current year in footer
  currentYearSpan.textContent = new Date().getFullYear();
  
  // Setup event listeners
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', validateNewsletterForm);
  }
  
  // Initialize interactive elements
  initProductHover();
  initButtonHoverEffects();
  initSearch();
  // Note: AddToCart buttons use a non-standard selector which might not work in some browsers
  // We'll use a different approach to select those buttons
  document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Add to Cart')) {
      button.addEventListener('click', function() {
        const productCard = this.closest('.bg-white.rounded-lg');
        if (productCard) {
          const productName = productCard.querySelector('h3').textContent;
          showToast('Added to Cart', `${productName} has been added to your cart.`, 'success');
        }
      });
    }
  });
  
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
    if (window.scrollY > 10) {
      header.classList.add('shadow-md');
      header.style.backgroundColor = 'rgba(248, 244, 232, 0.95)';
      header.style.backdropFilter = 'blur(8px)';
    } else {
      header.classList.remove('shadow-md');
      header.style.backgroundColor = 'transparent';
      header.style.backdropFilter = 'none';
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);