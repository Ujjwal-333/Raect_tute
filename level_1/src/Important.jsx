import React from 'react'

const Important = () => {

    const handleClick = () => {
        fruit ="strawberry"
        // it shows the selected fruit in the console when the button is clicked.
        console.log(`You selected ${fruit}`);
      } 
  return (
    <>
      <h1>Important</h1>
      <p>This is an important component.</p>
      <button onClick={handleClick}>Change Fruit </button>
    </>
  )
}

export default Important