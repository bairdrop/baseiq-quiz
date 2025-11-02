import React from 'react'
import ReactDOM from 'react-dom/client'
import QuizApp from './QuizApp'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

// CRITICAL: Tell Base Mini App that we're ready
if (typeof window !== 'undefined') {
  // Check if SDK exists (when running in Base app)
  if (window.sdk && window.sdk.actions && window.sdk.actions.ready) {
    window.sdk.actions.ready();
  }
  
  // Also try this format
  if (window.parent && window.parent.postMessage) {
    window.parent.postMessage({ type: 'ready' }, '*');
  }
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
)
