import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Task2clock from './Task2clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   
  </StrictMode>,
)
