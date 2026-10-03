import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Increment,{Setting,Login} from './Increment.jsx'
import Task from './Task.jsx'
import ClickeventFunctioncall from './ClickeventFunctioncall.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Setting/>
    <Login/>  
    <Increment/>
    <Task/>
    <ClickeventFunctioncall/>
  </StrictMode>,
)
