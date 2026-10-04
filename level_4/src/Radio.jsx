import React from 'react'
import { useState } from 'react'

const Radio = () => {
    const [gender, setGender] = useState('Male');
    const [city, setCity] = useState('Delhi');
  return (
    <>
    <h4>Select Gender</h4>
   
    <input type="radio" name="gender" value="Male"  checked={gender === 'Male'} id="male" onChange={(e) => setGender(e.target.value)} />
     <label htmlFor="male">Male</label>
       
    <input type="radio" name="gender" value="Female" id="female" onChange={(e) => setGender(e.target.value)} />
    <label htmlFor="female">Female</label>   
   
    <input type="radio" name="gender" value="Other"  checked={gender === 'Other'} id="other" onChange={(e) => setGender(e.target.value)} />   
     <label htmlFor="other">Other</label>
     <p>By default, Male is selected (checked)</p>
    <h3>Selected Gender: {gender}</h3>

    <h4>Select City</h4>

    <select defaultValue="Delhi" onChange={(e) => setCity(e.target.value)}>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Chennai">Chennai</option>    

    </select>
    <h3>Selected City: {city}</h3>
    </>
  )
}

export default Radio