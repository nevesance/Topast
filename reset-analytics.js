// Reset Analytics Script - Enhanced Version
// This script properly clears all analytics data from localStorage and sessionStorage
// and initializes them with zero values to prevent any issues

// Helper functions to create empty data structures
function createEmptyAnalyticsData() {
  return {
    pageViews: {},
    visitors: {},
    sessions: {},
    events: [],
    devices: {
      desktop: 0,
      mobile: 0,
      tablet: 0
    },
    trafficSources: {
      'direct': { count: 0, lastVisit: new Date().toISOString(), percentage: 0 },
      'organic-search': { count: 0, lastVisit: new Date().toISOString(), percentage: 0 },
      'social-media': { count: 0, lastVisit: new Date().toISOString(), percentage: 0 },
      'referral': { count: 0, lastVisit: new Date().toISOString(), percentage: 0 },
      'email': { count: 0, lastVisit: new Date().toISOString(), percentage: 0 }
    },
    firstVisit: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  };
}

function createEmptyBlogAnalyticsData() {
  return {
    pageViews: {},
    events: [],
    lastVisit: new Date().toISOString()
  };
}

function createEmptyViewCounts() {
  const counts = {};
  // Check if window.blogPostsData is available
  try {
    const posts = window.blogPostsData || [];
    if (Array.isArray(posts) && posts.length > 0) {
      posts.forEach(post => {
        if (post && post.id) {
          counts[`post_${post.id}`] = 0;
        }
      });
    }
  } catch (e) {
    console.error("Error initializing blog view counts:", e);
  }
  return counts;
}

// STEP 1: Clear ALL localStorage items that might contain analytics data
const keysToRemove = [
  'topast_analytics', 
  'topast_visitor_id',
  'topast_visitor_timestamp',
  'topast_blog_analytics',
  'topast_blog_view_counts',
  'topast_blog_session',
  'analytics_data',
  'topast_last_visit'
];

keysToRemove.forEach(key => {
  localStorage.removeItem(key);
});

// STEP 2: Initialize with fresh zero-value data
try {
  localStorage.setItem('topast_analytics', JSON.stringify(createEmptyAnalyticsData()));
  localStorage.setItem('topast_blog_analytics', JSON.stringify(createEmptyBlogAnalyticsData()));
  localStorage.setItem('topast_blog_view_counts', JSON.stringify(createEmptyViewCounts()));
} catch (e) {
  console.error("Error setting up empty analytics data:", e);
}

// STEP 3: Clear ALL sessionStorage items
const sessionKeysToRemove = [
  'topast_session_id',
  'topast_session_timestamp',
  'topast_session_pages',
  'topast_session_start',
  'topast_current_page',
  'topast_page_start',
  'topast_previous_page',
  'topast_previous_page_start'
];

sessionKeysToRemove.forEach(key => {
  sessionStorage.removeItem(key);
});

// STEP 4: Reset analytics-related global variables if they exist
if (window.analyticsData) {
  // Reset traffic sources
  if (window.analyticsData.trafficSources) {
    Object.keys(window.analyticsData.trafficSources).forEach(source => {
      window.analyticsData.trafficSources[source].visits = 0;
      window.analyticsData.trafficSources[source].percentage = 0;
    });
  }
  
  // Reset average time on page
  if (window.analyticsData.averageTimeOnPage) {
    Object.keys(window.analyticsData.averageTimeOnPage).forEach(page => {
      window.analyticsData.averageTimeOnPage[page] = 0;
    });
  }
  
  // Reset bounce rates
  if (window.analyticsData.bounceRate) {
    Object.keys(window.analyticsData.bounceRate).forEach(page => {
      window.analyticsData.bounceRate[page] = 0;
    });
  }
  
  // Reset conversion rates
  if (window.analyticsData.conversionRate) {
    Object.keys(window.analyticsData.conversionRate).forEach(conversion => {
      window.analyticsData.conversionRate[conversion] = 0;
    });
  }
  
  // Reset sessions
  if (window.analyticsData.sessions) {
    Object.keys(window.analyticsData.sessions).forEach(period => {
      window.analyticsData.sessions[period] = 0;
    });
  }
}

// STEP 5: Reset blog post view counts if they exist
if (window.blogPostsData && Array.isArray(window.blogPostsData)) {
  window.blogPostsData.forEach(post => {
    if (post && typeof post.views !== 'undefined') {
      post.views = 0;
    }
  });
}

console.log('All analytics data has been reset to zero.');