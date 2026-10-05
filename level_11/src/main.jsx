import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import UpdatingObjinState from './UpdatingObjinState.jsx'
import UpdatingArrayinState from './UpdatingArrayinState.jsx'
import ActionStatehook from './ActionStatehook.jsx'
import UseId from './UseId.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <UpdatingObjinState/> */}
    {/* <UpdatingArrayinState/> */}
    {/* <ActionStatehook/> */}
    <UseId/>
  </StrictMode>,
)
