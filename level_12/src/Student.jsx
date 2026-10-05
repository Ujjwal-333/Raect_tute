import React from 'react'
import Subject from './Subject'

const Student = () => {
  return (
    <div className="student">
      <h2>Student Component</h2>
      <Subject />
    </div>
  )
}

export default Student





// import React from 'react'
// import Subject from './Subject'

// const Student = ({ subject }) => {
//   return (
//     <div style={{ backgroundColor: "aqua", padding: "10px" }}>
//       <h1>Student Component</h1>

//       <Subject subject={subject} />

//     </div>
//   )
// }

// export default Student