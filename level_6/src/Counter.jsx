import React,{useEffect} from "react";

// NOTE:
// Parent se `count` prop aa raha hai:
// <Counter count={count} />
//
// `{count}` destructuring hai, jo props object se `count` ko directly nikaal leta hai.
// Isliye hum JSX mein directly `{count}` use kar sakte hain.
//
// Agar destructuring na karein:
// const Counter = (props) => {
//     props.count
// }
//
// `props` ki jagah koi bhi variable name likh sakte hain, jaise `data` ya `abc`.
const Counter = (props) => {
  const handleCounter = () => {
    console.log("handleCount called");
  };

  const handleData = ()=>{
    console.log("handle data count");
  }

  useEffect(() => {
    handleCounter();
  }, [props.count]);
  useEffect(()=>{
handleData()
  },[props.data])
  return (
    <>
      <h1>Counter Component</h1>
      <h1>Counter Value {props.count}</h1>
      <h2>Data Value: {props.data}</h2>
    </>
  );
};

export default Counter;
