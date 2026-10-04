import React from 'react'
import { useRef } from 'react'

const Ref = () => {
    const inputRef=useRef(null);
    const inputHandler=()=>{
        console.log(useRef);
        inputRef.current.focus();
        inputRef.current.style.color="red"
        inputRef.current.placeholder="enter password"
    }

    const h1Ref=useRef();

    const h1Handler=()=>{
h1Ref.current.style.color="green"
    }


    const toggleHandler=()=>{
        if(inputRef.current.style.display!="none"){
            inputRef.current.style.display="none"
        }else{
            inputRef.current.style.display="inline"
        }
    }
  return (
    <>
    <h1>useRef</h1>
    <button onClick={toggleHandler}>Toggle</button>
    <input ref={inputRef} type='text' placeholder='Enter user name'/>
    <button onClick={inputHandler}>Focus on Input field</button>

    <h1 ref={h1Ref}>Code step by step</h1>
    <button onClick={h1Handler}>Handler</button>
    
    </>
  )
}

export default Ref