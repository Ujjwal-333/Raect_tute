import React from 'react'

const DisplayUser = ({user}) => {
  return (
    <>
    <h1>Display User : {user}</h1>
    
    </>
  )
}

export default DisplayUser






/*
LIFTING STATE UP — React

• Jab 2 ya usse zyada child components ko same data share karna ho,
  to state ko unke nearest common parent component me rakhte hain.

• Parent state ko child ke saath props ke through share karta hai.

• Agar child ko state change karni ho,
  to parent ek function child ko props ke through deta hai.

Flow:
Parent
  ↓ state
Child A

Parent
  ↓ function
Child B → function call → Parent state update

⭐ Yaad rakho:
"Shared state ko common parent me move karna = Lifting State Up"

Example:
Child A → data display karega
Child B → data change karega
Parent → state ko manage karega

Iska main purpose:
👉 Multiple components ke beech same state ko synchronize/share karna.
*/