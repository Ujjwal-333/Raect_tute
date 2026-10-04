import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  return (
    <>
      <h2>Form</h2>
      <form action="" method="get">
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <br/>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <br/>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit" />
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Password: {password}</h3>
        <button onClick={() => {setName(''); setEmail(''); setPassword('')}}>Clear</button>
      </form>
    </>
  )
}

export default Form