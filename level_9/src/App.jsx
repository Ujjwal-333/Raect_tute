import { useRef } from 'react'
import LatestForwardRef from './LatestForwardRef'
import PureFuncCompo from './PureFuncCompo'

function App() {

  const inputRef = useRef(null)

  const updateInput = () => {
    inputRef.current.value = 1000
    inputRef.current.focus()
    inputRef.current.style.color = "red"
  }

  return (
    <>
      <h1>Forward Ref</h1>

      <LatestForwardRef ref={inputRef} />

      <button onClick={updateInput}>
        Update Input Field
      </button>

      <PureFuncCompo guest={3}/>
    </>
  )
}

export default App





/*
========================================================
           FORWARD REF - REACT 18 vs REACT 19
========================================================

🔹 FORWARD REF KA KAAM:
forwardRef ka purpose parent component ke ref ko child
component ke andar kisi DOM element (jaise input) tak
pahunchana hai.

Example flow:

Parent
  ↓
inputRef
  ↓
Child Component
  ↓
<input ref={ref} />


========================================================
                 REACT 18
========================================================

React 18 mein ref ko normal props ki tarah directly
receive nahi kar sakte the.

Isliye forwardRef() use karna padta tha.

Example:

import { forwardRef } from "react";

const Child = (props, ref) => {
    return <input ref={ref} />;
};

export default forwardRef(Child);


Yahan forwardRef() React ko batata hai ki:

"Parent se jo ref aa raha hai, use child component ke
second parameter mein bhejna hai."

Isliye:

const Child = (props, ref) => {
                     ↑
                parent ka ref


========================================================
                 REACT 19
========================================================

React 19 mein ref ko directly prop ki tarah receive
kar sakte hain.

Isliye forwardRef() import/use karne ki zarurat nahi hai.

Example:

const Child = ({ ref }) => {
    return <input ref={ref} />;
};

export default Child;


Yahan ref directly props se mil raha hai.

Parent:

const inputRef = useRef(null);

<Child ref={inputRef} />;


Child:

const Child = ({ ref }) => {
    return <input ref={ref} />;
};


========================================================
             DONO MEIN MAIN DIFFERENCE
========================================================

React 18:
    ref → forwardRef() → Child → DOM element

React 19:
    ref → normal prop → Child → DOM element


React 18:
    forwardRef() REQUIRED

React 19:
    forwardRef() NOT REQUIRED for this use case


========================================================
                 KYU USE KARTE HAIN?
========================================================

Ref ka use tab karte hain jab parent ko child ke kisi
DOM element ko directly access/control karna ho.

Jaise:

inputRef.current.focus();
→ input ko focus karna

inputRef.current.value = 1000;
→ input ki value change karna

inputRef.current.style.color = "red";
→ input ka style change karna


IMPORTANT:
Ref ka use normal data/state pass karne ke liye nahi hota.
Normal data ke liye props aur state use karte hain.

Ref mainly DOM ko directly access karne ke liye use hota hai.


⭐ YAAD RAKHNE KA SIMPLE FORMULA:

React 18:
"Ref bhejna hai → forwardRef lagao"

React 19:
"Ref bhejna hai → direct prop ki tarah receive karo"


========================================================
*/