import React from 'react'
import ReactDOM from 'react-dom/client'
import QuizApp from './QuizApp'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(root).render(<QuizApp />)
