import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Data from './Data'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Data/>
    </>
  )
}

export default App
