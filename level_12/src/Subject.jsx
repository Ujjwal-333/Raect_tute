import React, { useContext } from 'react'
import { SubjectContext } from './ContextData'

const Subject = () => {

  const subject = useContext(SubjectContext)

  return (
    <div className="subject">
      <h2>
        Subject is: {subject || "No Subject Selected"}
      </h2>
    </div>
  )
}

export default Subject



// import React from 'react'

// const Subject = ({ subject }) => {
//   return (
//     <div style={{ backgroundColor: "orange", padding: "10px" }}>
//       <h1>Subject is: {subject}</h1>
//     </div>
//   )
// }

// export default Subject


























// ============================================================
// PROPS DRILLING
// ============================================================
//
// Data ko parent se child, phir child se next child,
// phir next child... props ke through pass karna
// Props Drilling kehlata hai.
//
// Problem:
// Beech ke components ko data ki zarurat na hone ke baad bhi
// unhe props receive karke aage pass karna padta hai.
//
// ============================================================


// ============================================================
// CONTEXT API
// ============================================================
//
// Context API ka use shared data ko multiple/deeply nested
// components tak bina baar-baar props pass kiye pahunchane
// ke liye kiya jata hai.
//
// Context API ke 3 main steps:
//
// 1. createContext()
//    → Context create karta hai.
//
// 2. Provider
//    → Context ki value provide karta hai.
//
// 3. useContext()
//    → Context ki value ko consume/read karta hai.
//
// ============================================================


// IMPORTANT:
//
// createContext() → Context banao
// Provider       → Data provide karo
// useContext()   → Data lo
//
// ============================================================