import React from 'react'
import ReactDOM from 'react-dom/client'
import QuizApp from './QuizApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>,
)
```

**File 5: `src/QuizApp.jsx`** - Copy the entire React code from the artifact above

**File 6: `.gitignore`**
```
node_modules
dist
.env
