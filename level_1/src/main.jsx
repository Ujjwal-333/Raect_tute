import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Increment,{Setting,Login} from './Increment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Setting/>
    <Login/>  
    <Increment/>
  </StrictMode>,
)
