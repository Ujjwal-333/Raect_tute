import React,{useRef} from 'react'

const Uncontrolledcomp = () => {

    const userRef=useRef();
    const passwordRef=useRef();


    const handleForm=(event)=>{
event.preventDefault();
const user= document.querySelector("#user").value;
const password=document.querySelector("#password").value;
console.log(user,password);
    }

    const handleFormRef=(event)=>{
        event.preventDefault()
        const user=userRef.current.value;
        const password=passwordRef.current.value;
        console.log("handleFormRef")
    }
  return (
    <>
    <h1>Uncontrolled Component</h1>
    <form action="" method="post" onSubmit={handleForm}>
        <input type="text"  id="user" placeholder='enter user name'></input>
        <br/>
        <br/>
        <input type="password" id="password" placeholder='enter user name'></input>
        <br/>
        <button>Submit</button>
    </form>   

    <h1>Uncontrolled Component</h1>
    <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id="userRef" placeholder='enter user name'></input>
        <br/>
        <br/>
        <input type="password" ref={passwordRef} id="passwordRef" placeholder='enter user name'></input>
        <br/>
        <button>Submit</button>
    </form>    
    </>
  )
}

export default Uncontrolledcomp