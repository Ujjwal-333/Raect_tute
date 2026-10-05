import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import Customhook from './Customhook.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Customhook />
  </StrictMode>
);