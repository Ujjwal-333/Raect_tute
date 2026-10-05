import React from 'react'
import Student from './Student'

const Classcomp = () => {
  return (
    <div className="class-component">
      <h2>Class Component</h2>
      <Student />
    </div>
  )
}

export default Classcomp





// import React from 'react'
// import Student from './Student'

// const Classcomp = ({ subject }) => {
//   return (
//     <div style={{ backgroundColor: "green", padding: "10px" }}>
//       <h1>Class Component</h1>

//       <Student subject={subject} />

//     </div>
//   )
// }

// export default Classcomp