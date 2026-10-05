import React from 'react'
import Classcomp from './Classcomp'

const College = () => {
  return (
    <div className="college">
      <h2>College Component</h2>
      <Classcomp />
    </div>
  )
}

export default College



// import React from 'react'
// import Classcomp from './Classcomp'

// const College = ({ subject }) => {
//   return (
//     <div style={{ backgroundColor: "orange", padding: "10px" }}>
//       <h1>College Component</h1>

//       <Classcomp subject={subject} />

//     </div>
//   )
// }

// export default College