// Reset Analytics Script
// This script clears all analytics data from localStorage and sessionStorage

// Clear localStorage analytics data
localStorage.removeItem('topast_analytics');
localStorage.removeItem('topast_visitor_id');
localStorage.removeItem('topast_visitor_timestamp');
localStorage.removeItem('topast_blog_analytics');
localStorage.removeItem('topast_blog_view_counts');

// Clear sessionStorage data
sessionStorage.removeItem('topast_session_id');
sessionStorage.removeItem('topast_session_timestamp');
sessionStorage.removeItem('topast_session_pages');
sessionStorage.removeItem('topast_session_start');
sessionStorage.removeItem('topast_current_page');
sessionStorage.removeItem('topast_page_start');
sessionStorage.removeItem('topast_previous_page');
sessionStorage.removeItem('topast_previous_page_start');

// Reset all analytics variables to default state
console.log('All analytics data has been reset to zero.');
alert('Analytics data has been successfully reset. All tracking will start from zero.');