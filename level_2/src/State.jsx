import React from 'react'
import { useState } from 'react'

const State = () => {

    const [displayText, setDisplayText] = useState("Hello World");
    const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>State</h1>
      <p>{displayText   }</p>
      {display ? <p>This is a conditional rendering example.</p> : null}
      <button onClick={() => setDisplayText("Button Clicked!")}>Change Text</button>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>  
    </>
  )
}

export default State