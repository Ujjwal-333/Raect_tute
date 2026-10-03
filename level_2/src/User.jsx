import React from 'react'
import { useState } from 'react'

const User = () => {
const [count, setCount] = useState(0);  

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Counter</button>

      {/* multiple conditional rendering using ternary operator */}
      {
        count > 5 ? <p>Count is greater than 5</p> : <p>Count is less than or equal to 5</p>
      }
    </div>
  )
}

export default User