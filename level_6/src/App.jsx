import { useState } from 'react'
import Counter from "./Counter"


function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  return (
    <>
       <h1>App Loading...</h1>
       <Counter count={count} data={data}/>
       <button onClick={()=>setCount(count+1)}>Counter </button>
        <button onClick={()=>setData(data+1)}>Data </button>
    </>
  )
}

export default App
