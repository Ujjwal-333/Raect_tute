import { useState } from 'react'
import { Alert } from 'react-bootstrap';
import {Button} from  "react-bootstrap";
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Using react bootstrap</h1>
     <Button variant='success'>Okay</Button>
      <Button variant='warning'>Okay</Button>
     <Alert variant="danger">Hello BT installed</Alert>
    </>
  )
}

export default App
