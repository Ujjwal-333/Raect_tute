import React from 'react'
import { useState } from 'react'

const Inputfield = () => {
  const [value, setValue] = useState('Ujjwal')

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
       <button onClick={() => setValue('')}>Clear</button> 
      <h1>{value}</h1>  
       
    </div>
  )
}

export default Inputfield