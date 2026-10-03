import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import State from './State.jsx'
import User from './User.jsx'
// import College from './College.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <State/>
    <User/>
    {/* <College/> */}
  </StrictMode>,
)
