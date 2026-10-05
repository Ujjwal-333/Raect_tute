import React, { createContext, useState } from 'react'
import College from './College'
import './index.css'

export const SubjectContext = createContext("Math")

const ContextData = () => {

  const [subject, setSubject] = useState("")

  return (
    <SubjectContext.Provider value={subject}>

      <div className="context-container">

        <select
          className="subject-select"
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Your Favourite Subject</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="Physics">Physics</option>
          <option value="Hindi">Hindi</option>
          <option value="Math">Math</option>
        </select>

        <h1>Context API</h1>

        <button
          className="clear-btn"
          onClick={() => setSubject("")}
        >
          Clear Subject
        </button>

        <College />

      </div>

    </SubjectContext.Provider>
  )
}

export default ContextData



// import React from 'react'
// import College from './College'

// const ContextData = () => {

//   const subject = "English"

//   return (
//     <div style={{ backgroundColor: "yellow", padding: "10px" }}>
//       <h1>Props Drilling</h1>

//       <College subject={subject} />

//     </div>
//   )
// }

// export default ContextData