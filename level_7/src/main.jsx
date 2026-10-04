import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import Cards from "./Cards.jsx"
import Externalstyle from './Externalstyle.jsx'
import Boots from "./Boots.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Cards/> */}
    {/* <Externalstyle/> */}
  <Boots/>
  </StrictMode>,
)
