import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import Ref from './Ref.jsx';
import Uncontrolledcomp from './Uncontrolledcomp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Ref/> */}
    <Uncontrolledcomp/>
  </StrictMode>,
)
