import React from 'react'
import RecieveProp from './RecieveProp'
// code baar baar na repeat ho uske liye hum mein function likh dete hai usko props ki madad se child mein call kar lete hai
const PassFuncasProps = () => {
    const displayName=(name)=>{
        alert(name);
    }

    const getUser=()=>{
        alert("User details are fetching...")
    }
  return (
    <>
    <h1>Call Parent component function from child component</h1>
    <RecieveProp displayName={displayName} name="Rahul" getUser={getUser}/>
    <RecieveProp displayName={displayName} name="Vinod" getUser={getUser}/>
    <RecieveProp displayName={displayName} name="Rakesh" getUser={getUser}/>
    <RecieveProp displayName={displayName} name="Tyagi" getUser={getUser}/>
    <RecieveProp displayName={displayName} name="Abhijeet" getUser={getUser}/>
    
    </>
  )
}

export default PassFuncasProps