import { useState } from 'react'
import APIFetch from './APIFetch'
import Fetchall from './Fetchall'
import OwnAPI from './OwnAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <APIFetch/> */}
     {/* <Fetchall/> */}
     <OwnAPI/>
    </>
  )
}

export default App
