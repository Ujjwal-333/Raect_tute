import React from 'react'

const Task = () => {
    function handleClick() {
        alert('Button clicked!');
      }
  return (
    <> <h1>Ujjwal React Developer</h1>
    <img src="https://media.istockphoto.com/id/2181609851/photo/where-sea-meets-stone-aerial-shots-of-waves-crashing-with-power-and-grace.jpg?b=1&s=612x612&w=0&k=20&c=OWzoERHrrLngllkmWfAIwcw6pAaHXX2ht1aMpSZRE2s=" alt="Ujjwal" 
    className="rounded-full w-10 h-10 mx-auto mb-4"
    /> 
    <ul>
        <li>Invent New traffic lights</li>
        <li>Rehearse for the presentation</li>
        <li>Improve the design</li>
    </ul>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" onClick={handleClick}>Click me!</button>  
    </>
  )
}

export default Task