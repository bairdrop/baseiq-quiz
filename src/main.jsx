import React from 'react'
import ReactDOM from 'react-dom/client'
import QuizApp from './QuizApp'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

// Suppress external analytics errors
window.addEventListener('error', (e) => {
  if (e.message.includes('AnalyticsSDKApiError') || 
      e.message.includes('coinbase.com')) {
    e.preventDefault();
    console.warn('External analytics blocked, continuing app...');
  }
});

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
)
