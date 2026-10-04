import { useState } from 'react'
import Task2clock from './Task2clock.jsx'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
<h1>Digital Clock in react js React Js</h1>
<select onChange={(event)=>setColor(event.target.value)}>
  <option value={"red"}>Red</option>
   <option value={"blue"}>Blue</option>
    <option value={"aqua"}>Aqua</option>
     <option value={"orange"}>Orange</option>
</select>
<Task2clock color={color}/>
     
    </>
  )
}

export default App
