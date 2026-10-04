import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Effectuse from './Effectuse.jsx'
import Inline from "./Inlinestyle.jsx"
import Inlinestyle from './Inlinestyle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Effectuse/> */}
   <Inlinestyle/>
  </StrictMode>,
)
