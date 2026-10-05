import React,{forwardRef} from 'react'

// Parent → ref → Child → Input
// forwardRef() ki help se parent ka ref child ke DOM element tak pahunchta hai.

const WorkforwardRef = (props,ref) => {
  return (
    <>
    <input type="text" ref={ref}/>
    </>
  )
}

export default forwardRef(WorkforwardRef)