import { useState } from "react";

function App() {
  const name1 = "Ujjwal";
  const userObj = {
    name: "Ujjwal",
    age: 22,
    email: "ujjwal@example.com",
  };
  const userArray = ["Ujjwal", "John", "Alice", "Bob"];

  const path= "https://images.pexels.com/photos/34914393/pexels-photo-34914393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  const x = 10;
  const y = 20;
  function handleClick() {
    alert("Button clicked!");
  }

  function operation(a, b, op) {
    if (op === "add") {
      return a + b;
    } else if (op === "sub") {
      return a - b;
    } else if (op === "mul") {
      return a * b;
    } else if (op === "div") {
      return a / b;
    } else {
      return "Invalid operation";
    }
  }

  return (
    <>
      <h1>{name1}</h1>
      <h1>{name1 ? name1 : "Name not provided"}</h1>
      <p>X: {x}</p>
      <p>Y: {y}</p>
      <p>Sum of X and Y is : {x + y}</p>
      {/* object using JSX */}
      <h1>User Object</h1>
      <p>Name: {userObj.name}</p>
      <p>Age: {userObj.age}</p>
      <p>Email: {userObj.email}</p>
      <p>Array: {userArray.join(", ")}</p>
      <img src={path} alt="Ujjwal" className="rounded-full w-10 h-10 mx-auto mb-4" />
      <br/>
      <input type="text" value={name1} id="name1" placeholder="Enter your name" />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={handleClick}
      >
        Click me!
      </button>
      <h1>Operation Results</h1>
      <p>Addition : {operation(x, y, "add")}</p>
      <p>Subtraction: {operation(x, y, "sub")}</p>
      <p>Multiplication: {operation(x, y, "mul")}</p>
      <p>Division: {operation(x, y, "div")}</p>
      {/* logical operator in JSX */}
      <h1>Logical Operator in JSX</h1>
      <p>{x > y && "X is greater than Y"}</p>
      <p>{x < y && "X is less than Y"}</p>
      <p>{x === y && "X is equal to Y"}</p>
      <p>{x !== y && "X is not equal to Y"}</p>
      <p>{x >= y && "X is greater than or equal to Y"}</p>
      <p>{x <= y && "X is less than or equal to Y"}</p>
    
     
      {/* bitwise operator in JSX */}
      <h1>Bitwise Operator in JSX</h1>
      const x = 10; const y = 20;
      <h1>Bitwise Operators in JSX</h1>
      <p>{x & y}</p>
      {/* AND (&): 10 & 20 = 0
    10 = 1010
    20 = 10100
    Common 1-bit nahi hai → Result = 0
*/}
      <p>{x | y}</p>
      {/* OR (|): 10 | 20 = 30
    10 = 01010
    20 = 10100
    OR → 11110 = 30
*/}
      <p>{x ^ y}</p>
      {/* XOR (^): 10 ^ 20 = 30
    Different bits → 1
    01010
    10100
    -----
    11110 = 30
*/}
      <p>{~x}</p>
      {/* NOT (~): ~10 = -11
    Bitwise NOT number ko -(x + 1) banata hai
    -(10 + 1) = -11
*/}
      <p>{x << y}</p>
      {/* Left Shift (<<): 10 << 20 = 10485760
    10 ke bits ko 20 positions left shift karta hai
    10 × 2^20 = 10485760
*/}
      <p>{x >> y}</p>
      {/* Right Shift (>>): 10 >> 20 = 0
    10 ko 20 positions right shift karta hai
    10 ÷ 2^20 ≈ 0
*/}
      <p>{x >>> y}</p>
      {/* Unsigned Right Shift (>>>): 10 >>> 20 = 0
    10 ko 20 positions right shift karta hai
    Result = 0
*/}
    </>
  );

}

export default App;
