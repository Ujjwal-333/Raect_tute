import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Useformstatus from './Useformstatus.jsx'
import TransitionButt from './TransitionButt.jsx'
import DerivedState from './DerivedState.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Useformstatus/> */}
    {/* <TransitionButt/> */}
  <DerivedState/>
  </StrictMode>,
)
