import React from 'react'
import {useEffect,useState} from "react"

const Effectuse = () => {
    const [counter,setcounter] = useState(0);
    const [data,setData]=useState(0)
// jab hum couter button par click karenge tab update hoga
    useEffect(()=>{
//  callOnce();
counterFunction();
    },[counter])
// ek baar update hoga aur dependency array nahi use karenge tab jitni baar click karenge utni baar update hoga check in console
    useEffect(()=>{
        callOnce();
    },[])

    function callOnce(){
        console.log("Callonce funtion called")
    }
   function counterFunction(){
console.log("counter" ,counter);
   }
  return (
    <>
    <h1>useeffect hook</h1>
    <button onClick={()=>setcounter(counter+1)}>Counter {counter}</button>
    <button onClick={()=>setData(data+1)}> Data {data}</button>
    
    </>
  )
}

export default Effectuse