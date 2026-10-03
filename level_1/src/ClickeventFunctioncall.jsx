import React from 'react'

const ClickeventFunctioncall = () => {

    function handleClick() {
        alert('Button clicked!');
      }
      const fruit =(name1)=>{
        alert(`You selected ${name1}`);
      } 
  return (
    <>
    <h1>Click Event Function Call</h1>
    {/* we do not call the function directly in the onClick event because it will execute immediately when the component renders. Instead, we pass a reference to the function, so it will only be called when the button is clicked.like this:handleClick() */}
    <button onClick={handleClick}>Click me!</button>
    <br/>
    {/* <button onCLick={()=>fruit("Strawberry")}>Strawberry</button><br/> */}
    <br/>
    <button onClick={()=>fruit("Banana")}>Banana</button>
    <button onClick={()=>fruit("Mango")}>Mango</button><br/>
    <button onClick={()=>fruit("Orange")}>Orange</button>
    <button onClick={()=>fruit("Grapes")}>Grapes</button>
    <br/>
    <button onClick={()=>fruit("Pineapple")}>Pineapple</button>
    <button onClick={()=>fruit("Watermelon")}>Watermelon</button><br/>
    <button onClick={()=>fruit("Papaya")}>Papaya</button>
    <button onClick={()=>fruit("Kiwi")}>Kiwi</button>

    </>
  )
}

export default ClickeventFunctioncall