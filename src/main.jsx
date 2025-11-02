import React from 'react'
import ReactDOM from 'react-dom/client'
import QuizApp from './QuizApp'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

// Block all external analytics and tracking
if (typeof window !== 'undefined') {
  // Suppress fetch errors for analytics
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const url = args[0]?.toString() || '';
    if (url.includes('datadog') || 
        url.includes('coinbase.com/amp') || 
        url.includes('coinbase.com/metrics') ||
        url.includes('browser-intake')) {
      console.warn('Blocked analytics request:', url);
      return Promise.resolve(new Response(null, { status: 200 }));
    }
    return originalFetch(...args);
  };

  // Suppress console errors from blocked requests
  window.addEventListener('error', (e) => {
    if (e.message && (
      e.message.includes('ERR_BLOCKED_BY_CLIENT') ||
      e.message.includes('AnalyticsSDKApiError') ||
      e.message.includes('coinbase.com') ||
      e.message.includes('datadog')
    )) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, true);

  // Suppress unhandled promise rejections
  window.addEventListener('unhandledrejection', (e) => {
    if (e.reason && (
      e.reason.toString().includes('ERR_BLOCKED_BY_CLIENT') ||
      e.reason.toString().includes('coinbase.com') ||
      e.reason.toString().includes('datadog')
    )) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
)
