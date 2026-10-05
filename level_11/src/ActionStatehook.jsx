import React,{useActionState} from 'react'

const ActionStatehook = () => {
    const handleSubmit= async(previousData,formData)=>{
        const name=formData.get("name");
        const password=formData.get("password");
        await new Promise(res=>setTimeout(res,2000))
console.log("handlesubmit called",name,password);
if(name && password){
    return{message:"Data Submitted",name,password}

}else{
    return{error:"Failed to submit. Enter proper data",name,password}
}

    }
const [data,action,pending] =useActionState(handleSubmit,undefined)
  return (
    <>
    <h1>useActionState Hook in React js</h1>
    <form action={action}
    >
        <input type="text" placeholder='enter name' name="name"/><br/>
        <br/>
        <input type="password" placeholder='enter password' name='password'></input>
        <br/>
        <br/>
        <button disabled={pending}>submit data</button>
        <br/>
        <br/>
        {/* optional chaining operator ?. = Agar value available hai tab property access karo, warna undefined de do. */}
        {
            data?.error && <span style={{color:"red"}}>{data.error}</span>
        }

          {
            data?.message && <span style={{color:"green"}}>{data?.message}</span>
        }
        <h3>Name:{data?.name}</h3>
        <h3>Password:{data?.password}</h3>
    </form>
    </>
  )
}

export default ActionStatehook