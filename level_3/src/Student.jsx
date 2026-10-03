import React from 'react'
// Use color prop to change the color of the text and border of the div dynamically. The color prop is passed from the parent component (App) to the child component (Student). The Student component uses the color prop to set the color of the text and border of the div. The children prop is used to pass the content inside the Student component from the parent component (App) to the child component (Student). The children prop is a special prop that allows you to pass any content (text, elements, components) between the opening and closing tags of a component.    
const Student = ({children,color}) => {
  return (
<>
 <h3>Styling</h3>

    <div style={{ color: color, border: '1px solid ' + color, width: '120px', padding: '10px' }}>{children}</div>
</>
   
  )
}

export default Student