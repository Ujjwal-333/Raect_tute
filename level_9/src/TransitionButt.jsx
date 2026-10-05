import React,{useState,useTransition} from 'react'

const TransitionButt = () => {
     const [pending, startTransition] = useTransition();

    const handleButton= ()=>{
        // pahle async support nahi karta tha ab karta hai version 19
       startTransition(async ()=>{
        await new Promise(res=>setTimeout(res,4000))
       })
     
    }
  return (
    <>
    <h1>useTransition Hook in Raect js 19</h1>
    {pending?
        <img style={{width:"200px"}} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/bea83775357853.5c4a1808c8a7b.gif' alt='Loadingimage'></img>:null
    }
    <button onClick={handleButton}>Click</button>
    </>
  )
}

export default TransitionButt