// import React from 'react'

// const PureFuncCompo = ({ guest }) => {

//   const cups = guest

//   return (
//     <>
//       <h2>Guests: {guest}</h2>

//       <h3>Tea Cups: {cups}</h3>

//       {Array.from({ length: cups }, (_, index) => (
//         <p key={index}>☕ Cup {index + 1} of Tea</p>
//       ))}
//     </>
//   )
// }

// export default PureFuncCompo


import React from 'react'

const PureFuncCompo = ({ guest }) => {

  const cups = guest

  return (
    <>
      <h2>Guests: {guest}</h2>
      <h3>Tea Cups: {cups}</h3>
    </>
  )
}

export default PureFuncCompo





// Pure Function:
// Same input → Same output
// No side effect → Bahar ki value ko directly change nahi karta