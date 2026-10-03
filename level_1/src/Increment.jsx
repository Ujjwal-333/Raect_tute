import React from 'react'
import { useState } from 'react'
// import {createElement} from 'react'

// Default Export in a file we can import it with any name we want.
function Increment() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  return (
   <>
       <h1>Counter val :{count}</h1>
     <button onClick={() =>setCount(count+1)}>Increment</button>
     <button onClick={() =>setCount(0)}>Reset</button>

     <h1>Counter val :{count1} </h1>
     <button onClick={() =>setCount1(count1-1)}>decrement
    </button>
    <button onClick={() =>setCount1(0)}>Reset</button>
   </>
  )

// without JSX we can write the same code like this 
//   return createElement("div",{id:"rootDiv"},"hello dov");
}

//Multipe exports in a single file this is a named export we write the name of the function in curly braces when we import it in another file.{Setting}
export function Setting(){
    return(
        <>
        <h1>hello</h1>
        <p>this is setting component</p>
        </>
    )
}

//Another named export {Login} in main.jsx we can import it with the same name as it is written here.
export function Login(){
    return(
        <>
        <h1>hello</h1>
        <p>this is login component</p>
        </>
    )
}



export default Increment