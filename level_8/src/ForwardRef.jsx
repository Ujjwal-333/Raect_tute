import React,{useRef} from 'react'
import WorkforwardRef from './WorkforwardRef'

// forwardRef ka use tab karte hain jab parent component ko child component ke
// kisi DOM element (jaise input) ka direct reference chahiye.
//
// Yahan useRef() se parent mein inputRef banaya hai aur ref={inputRef} ke through
// WorkforwardRef child component ko bheja hai.
//
// forwardRef() child component ko parent se aaya hua ref receive karne deta hai.
// Isliye child mein ref ko <input> par attach kiya gaya hai.
//
// Ab parent inputRef.current ke through child ke input ko directly access kar sakta hai,
// jaise value change karna ya input ko focus karna.


const ForwardRef = () => {
    const inputRef = useRef(null)
    const updateInput=()=>{
        inputRef.current.value=1000
        inputRef.current.focus()
        inputRef.current.style.color="red"
    }
  return (
    <>
    <h1>Forward Ref</h1>
    <WorkforwardRef ref={inputRef}/>
    <button onClick={updateInput}>Update Input Field</button>
    
    </>
  )
}

export default ForwardRef