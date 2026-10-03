import React from 'react'
import { useState } from 'react'

const State = () => {

    const [fruit, setFruit] = useState("Apple");
    
    const handleClick = () => {
        setFruit("Banana");
        
      }
  return (
    <> 
    <h1>State</h1>
    <p>Selected Fruit: {fruit}</p>
  
    <button onClick={handleClick}>Change Fruit!</button>
    </>
  )
}

export default State