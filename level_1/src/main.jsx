import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Increment,{Setting,Login} from './Increment.jsx'
import Task from './Task.jsx'
import ClickeventFunctioncall from './ClickeventFunctioncall.jsx'
import Important from './Important.jsx'
import State from './State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Setting/>
    <Login/>  
    <Increment/>
    <Task/>
    <ClickeventFunctioncall/>
    <Important/>    
    <State/>
  </StrictMode>,
)
