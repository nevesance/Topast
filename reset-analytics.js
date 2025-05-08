// Reset Analytics Script
// This script clears all analytics data from localStorage and sessionStorage
// and initializes them with zero values

// Helper function to create empty analytics data structure
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
      'direct': { count: 0, lastVisit: new Date().toISOString() },
      'organic-search': { count: 0, lastVisit: new Date().toISOString() },
      'social-media': { count: 0, lastVisit: new Date().toISOString() },
      'referral': { count: 0, lastVisit: new Date().toISOString() },
      'email': { count: 0, lastVisit: new Date().toISOString() }
    },
    firstVisit: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  };
}

// Helper function to create empty blog analytics data
function createEmptyBlogAnalyticsData() {
  return {
    pageViews: {},
    events: [],
    lastVisit: new Date().toISOString()
  };
}

// Clear and reset localStorage analytics data
localStorage.removeItem('topast_visitor_id');
localStorage.removeItem('topast_visitor_timestamp');
localStorage.removeItem('topast_blog_view_counts');
localStorage.removeItem('topast_blog_session');

// Reset main analytics with zero values instead of removing
localStorage.setItem('topast_analytics', JSON.stringify(createEmptyAnalyticsData()));
localStorage.setItem('topast_blog_analytics', JSON.stringify(createEmptyBlogAnalyticsData()));

// Clear sessionStorage data
sessionStorage.removeItem('topast_session_id');
sessionStorage.removeItem('topast_session_timestamp');
sessionStorage.removeItem('topast_session_pages');
sessionStorage.removeItem('topast_session_start');
sessionStorage.removeItem('topast_current_page');
sessionStorage.removeItem('topast_page_start');
sessionStorage.removeItem('topast_previous_page');
sessionStorage.removeItem('topast_previous_page_start');

// Special case for view counts - initialize with zeros for each post
const emptyViewCounts = {};
const blogPostsData = window.blogPostsData || [];
if (blogPostsData.length > 0) {
  blogPostsData.forEach(post => {
    if (post && post.id) {
      emptyViewCounts[`post_${post.id}`] = 0;
    }
  });
  localStorage.setItem('topast_blog_view_counts', JSON.stringify(emptyViewCounts));
}

console.log('All analytics data has been reset to zero.');
// Don't alert since it can be annoying on every page load
// alert('Analytics data has been successfully reset. All tracking will start from zero.');