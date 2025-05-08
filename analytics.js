// Topast Analytics - Site-wide tracking script
// Add this script to all pages to track user behavior

(function() {
  // Configuration
  const CONFIG = {
    storageKey: 'topast_analytics',
    sessionTimeout: 30 * 60 * 1000, // 30 minutes in milliseconds
    visitorTimeout: 24 * 60 * 60 * 1000 // 24 hours in milliseconds
  };
  
  // Generate a visitor ID if none exists
  function getVisitorId() {
    let visitorId = localStorage.getItem('topast_visitor_id');
    const visitorTimestamp = localStorage.getItem('topast_visitor_timestamp');
    
    // If no visitor ID or it's expired, generate a new one
    if (!visitorId || !visitorTimestamp || (Date.now() - parseInt(visitorTimestamp)) > CONFIG.visitorTimeout) {
      visitorId = 'v_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('topast_visitor_id', visitorId);
      localStorage.setItem('topast_visitor_timestamp', Date.now().toString());
    }
    
    return visitorId;
  }
  
  // Generate a session ID if none exists or the existing one has expired
  function getSessionId() {
    let sessionId = sessionStorage.getItem('topast_session_id');
    const sessionTimestamp = sessionStorage.getItem('topast_session_timestamp');
    
    // If no session ID or it's expired, generate a new one
    if (!sessionId || !sessionTimestamp || (Date.now() - parseInt(sessionTimestamp)) > CONFIG.sessionTimeout) {
      sessionId = 's_' + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('topast_session_id', sessionId);
      sessionStorage.setItem('topast_session_timestamp', Date.now().toString());
      sessionStorage.setItem('topast_session_pages', '0');
      sessionStorage.setItem('topast_session_start', Date.now().toString());
      
      // Track a new session start
      trackEvent('session', 'start', { referrer: document.referrer || 'direct' });
    } else {
      // Update session timestamp
      sessionStorage.setItem('topast_session_timestamp', Date.now().toString());
    }
    
    return sessionId;
  }
  
  // Keep track of pages per session
  function incrementPagesInSession() {
    const currentPages = parseInt(sessionStorage.getItem('topast_session_pages') || '0');
    sessionStorage.setItem('topast_session_pages', (currentPages + 1).toString());
    return currentPages + 1;
  }
  
  // Save data to localStorage (merged with existing data)
  function saveData(data) {
    try {
      const existingData = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '{}');
      const mergedData = { ...existingData, ...data };
      
      if (!mergedData.firstVisit) {
        mergedData.firstVisit = new Date().toISOString();
      }
      
      mergedData.lastUpdated = new Date().toISOString();
      localStorage.setItem(CONFIG.storageKey, JSON.stringify(mergedData));
    } catch (e) {
      console.error('Error saving analytics data:', e);
    }
  }
  
  // Get device type
  function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }
  
  // Get traffic source
  function getTrafficSource() {
    const referrer = document.referrer;
    
    if (!referrer) {
      return 'direct';
    }
    
    const searchEngines = ['google', 'bing', 'yahoo', 'duckduckgo', 'baidu', 'yandex'];
    const socialMedia = ['facebook', 'instagram', 'twitter', 'linkedin', 'pinterest', 'tiktok', 'youtube'];
    
    const referrerHost = new URL(referrer).hostname.replace('www.', '');
    
    // Check search engines
    for (const engine of searchEngines) {
      if (referrerHost.includes(engine)) {
        return 'organic-search';
      }
    }
    
    // Check social media
    for (const platform of socialMedia) {
      if (referrerHost.includes(platform)) {
        return 'social-media';
      }
    }
    
    // Check email
    if (referrerHost.includes('mail') || document.location.search.includes('utm_medium=email')) {
      return 'email';
    }
    
    // Default to referral
    return 'referral';
  }
  
  // Track a page view
  function trackPageView() {
    const visitorId = getVisitorId();
    const sessionId = getSessionId();
    const pagesInSession = incrementPagesInSession();
    const path = window.location.pathname;
    const title = document.title;
    const now = new Date().toISOString();
    
    // Device and browser info
    const deviceType = getDeviceType();
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const language = navigator.language || 'unknown';
    
    // Referrer and traffic source
    const referrer = document.referrer;
    const trafficSource = getTrafficSource();
    
    // Load existing data
    let analyticsData = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '{}');
    
    // Initialize or update pageViews
    if (!analyticsData.pageViews) {
      analyticsData.pageViews = {};
    }
    if (!analyticsData.pageViews[path]) {
      analyticsData.pageViews[path] = {
        title,
        views: 0,
        visitors: [],
        lastView: null,
        timeOnPage: []
      };
    }
    
    // Update page views
    analyticsData.pageViews[path].views++;
    analyticsData.pageViews[path].lastView = now;
    analyticsData.pageViews[path].title = title;
    
    // Add visitor if new
    if (!analyticsData.pageViews[path].visitors.includes(visitorId)) {
      analyticsData.pageViews[path].visitors.push(visitorId);
    }
    
    // Track the current page for time on page calculation
    sessionStorage.setItem('topast_current_page', path);
    sessionStorage.setItem('topast_page_start', Date.now().toString());
    
    // Initialize or update visitor data
    if (!analyticsData.visitors) {
      analyticsData.visitors = {};
    }
    if (!analyticsData.visitors[visitorId]) {
      analyticsData.visitors[visitorId] = {
        firstSeen: now,
        lastSeen: now,
        sessions: [sessionId],
        devices: [deviceType],
        referrers: referrer ? [referrer] : [],
        trafficSources: [trafficSource]
      };
    } else {
      analyticsData.visitors[visitorId].lastSeen = now;
      if (!analyticsData.visitors[visitorId].sessions.includes(sessionId)) {
        analyticsData.visitors[visitorId].sessions.push(sessionId);
      }
      if (!analyticsData.visitors[visitorId].devices.includes(deviceType)) {
        analyticsData.visitors[visitorId].devices.push(deviceType);
      }
      if (referrer && !analyticsData.visitors[visitorId].referrers.includes(referrer)) {
        analyticsData.visitors[visitorId].referrers.push(referrer);
      }
      if (!analyticsData.visitors[visitorId].trafficSources.includes(trafficSource)) {
        analyticsData.visitors[visitorId].trafficSources.push(trafficSource);
      }
    }
    
    // Initialize or update session data
    if (!analyticsData.sessions) {
      analyticsData.sessions = {};
    }
    if (!analyticsData.sessions[sessionId]) {
      analyticsData.sessions[sessionId] = {
        visitorId,
        startTime: now,
        lastActive: now,
        pages: [path],
        referrer: referrer || 'direct',
        trafficSource,
        deviceType,
        screenWidth,
        screenHeight,
        language,
        bounced: true // Initially mark as bounced, update when they view a second page
      };
    } else {
      analyticsData.sessions[sessionId].lastActive = now;
      if (!analyticsData.sessions[sessionId].pages.includes(path)) {
        analyticsData.sessions[sessionId].pages.push(path);
      }
      // Not a bounce if they've viewed multiple pages
      if (analyticsData.sessions[sessionId].pages.length > 1 || pagesInSession > 1) {
        analyticsData.sessions[sessionId].bounced = false;
      }
    }
    
    // Initialize or update devices data
    if (!analyticsData.devices) {
      analyticsData.devices = {};
    }
    if (!analyticsData.devices[deviceType]) {
      analyticsData.devices[deviceType] = 1;
    } else {
      analyticsData.devices[deviceType]++;
    }
    
    // Initialize or update traffic sources data
    if (!analyticsData.trafficSources) {
      analyticsData.trafficSources = {};
    }
    if (!analyticsData.trafficSources[trafficSource]) {
      analyticsData.trafficSources[trafficSource] = { count: 1, lastVisit: now };
    } else {
      analyticsData.trafficSources[trafficSource].count++;
      analyticsData.trafficSources[trafficSource].lastVisit = now;
    }
    
    // Save updated data
    saveData(analyticsData);
    
    // Log for debugging
    console.log(`[Topast Analytics] Page view tracked: ${path}`);
    
    // Record time on previous page
    recordTimeOnPreviousPage();
  }
  
  // Record time spent on previous page before navigation
  function recordTimeOnPreviousPage() {
    const previousPage = sessionStorage.getItem('topast_previous_page');
    const previousPageStart = sessionStorage.getItem('topast_previous_page_start');
    
    if (previousPage && previousPageStart) {
      const timeSpent = Date.now() - parseInt(previousPageStart);
      
      // Only record if it's a reasonable amount of time (less than 30 minutes)
      if (timeSpent > 0 && timeSpent < 30 * 60 * 1000) {
        try {
          const analyticsData = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '{}');
          
          if (analyticsData.pageViews && analyticsData.pageViews[previousPage]) {
            analyticsData.pageViews[previousPage].timeOnPage.push(timeSpent);
            saveData(analyticsData);
          }
        } catch (e) {
          console.error('Error recording time on page:', e);
        }
      }
    }
    
    // Store current page as previous page for next navigation
    const currentPage = sessionStorage.getItem('topast_current_page');
    const currentPageStart = sessionStorage.getItem('topast_page_start');
    
    if (currentPage && currentPageStart) {
      sessionStorage.setItem('topast_previous_page', currentPage);
      sessionStorage.setItem('topast_previous_page_start', currentPageStart);
    }
  }
  
  // Track an event (e.g., button click, form submission)
  function trackEvent(category, action, label = null) {
    const visitorId = getVisitorId();
    const sessionId = getSessionId();
    const path = window.location.pathname;
    const now = new Date().toISOString();
    
    // Load existing data
    let analyticsData = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '{}');
    
    // Initialize or update events
    if (!analyticsData.events) {
      analyticsData.events = [];
    }
    
    // Add event
    analyticsData.events.push({
      timestamp: now,
      category,
      action,
      label: label ? (typeof label === 'object' ? JSON.stringify(label) : label) : null,
      visitorId,
      sessionId,
      path
    });
    
    // Limit stored events to prevent localStorage overflow
    if (analyticsData.events.length > 1000) {
      analyticsData.events = analyticsData.events.slice(-1000);
    }
    
    // Save updated data
    saveData(analyticsData);
    
    // Log for debugging
    console.log(`[Topast Analytics] Event tracked: ${category} - ${action}${label ? ' - ' + (typeof label === 'object' ? JSON.stringify(label) : label) : ''}`);
  }
  
  // Track session end when page is unloaded
  function trackSessionEnd() {
    const sessionId = sessionStorage.getItem('topast_session_id');
    if (!sessionId) return;
    
    const sessionStart = parseInt(sessionStorage.getItem('topast_session_start') || '0');
    const duration = Date.now() - sessionStart;
    
    if (sessionStart && duration > 0) {
      trackEvent('session', 'end', { duration: Math.round(duration / 1000) });
    }
    
    // Record time on current page
    const currentPage = sessionStorage.getItem('topast_current_page');
    const currentPageStart = sessionStorage.getItem('topast_page_start');
    
    if (currentPage && currentPageStart) {
      const timeSpent = Date.now() - parseInt(currentPageStart);
      
      // Only record if it's a reasonable amount of time (less than 30 minutes)
      if (timeSpent > 0 && timeSpent < 30 * 60 * 1000) {
        try {
          const analyticsData = JSON.parse(localStorage.getItem(CONFIG.storageKey) || '{}');
          
          if (analyticsData.pageViews && analyticsData.pageViews[currentPage]) {
            analyticsData.pageViews[currentPage].timeOnPage.push(timeSpent);
            saveData(analyticsData);
          }
        } catch (e) {
          console.error('Error recording time on page:', e);
        }
      }
    }
  }
  
  // Track clicks on links
  function trackClicks() {
    document.addEventListener('click', function(e) {
      // Find closest link
      const link = e.target.closest('a');
      if (!link) return;
      
      // Track external links
      if (link.hostname !== window.location.hostname && !link.getAttribute('href').startsWith('#')) {
        trackEvent('click', 'external_link', {
          url: link.href,
          text: link.textContent.trim()
        });
      }
      
      // Track internal navigation
      if (link.hostname === window.location.hostname && !link.getAttribute('href').startsWith('#')) {
        trackEvent('click', 'internal_link', {
          url: link.href,
          text: link.textContent.trim()
        });
      }
      
      // Track button clicks that look like CTAs
      if (link.classList.contains('btn') || 
          link.classList.contains('button') ||
          link.classList.contains('cta') ||
          link.tagName === 'BUTTON') {
        trackEvent('click', 'button', {
          text: link.textContent.trim()
        });
      }
    });
  }
  
  // Track form submissions
  function trackForms() {
    document.addEventListener('submit', function(e) {
      if (e.target.tagName === 'FORM') {
        // Identify the form
        let formId = e.target.id || 'unknown_form';
        let formName = e.target.getAttribute('name') || 'unnamed';
        let formAction = e.target.getAttribute('action') || 'none';
        
        trackEvent('form', 'submit', {
          id: formId,
          name: formName,
          action: formAction
        });
      }
    });
  }
  
  // Initialize tracking
  function initTracking() {
    // Track page view
    trackPageView();
    
    // Setup listeners
    trackClicks();
    trackForms();
    
    // Track session end on page unload
    window.addEventListener('beforeunload', trackSessionEnd);
    
    // For SPA navigation support, can be connected to router events if needed
    // This is a simple implementation that works for traditional page loads
  }
  
  // Expose the API
  window.TopastAnalytics = {
    trackEvent: trackEvent,
    trackPageView: trackPageView
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initTracking, 100);
  } else {
    document.addEventListener('DOMContentLoaded', initTracking);
  }
})();