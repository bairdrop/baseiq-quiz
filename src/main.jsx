import React from 'react'
import ReactDOM from 'react-dom/client'
import QuizApp from './QuizApp'

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <QuizApp />
  )
} else {
  console.error('Root element not found')
}
