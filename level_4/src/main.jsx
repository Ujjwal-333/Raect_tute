import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Inputfield from './Inputfield.jsx'
import Form from './Form.jsx' 
import Checkboxes from './Checkboxes.jsx'
import Radio from './Radio.jsx'
import Loop from './Loop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Inputfield />
    <Form/>
    <Checkboxes/>
    <Radio/>
    <Loop/>
  </StrictMode>,
)
