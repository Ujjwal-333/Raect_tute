import React from 'react'

const Inlinestyle = () => {

    const cardStyle={
        border:"1px solid pink",
        width:"200px",
        boxShadow:"1px 2px 3px 0px pink",
        margin:"10px",
        padding:"10px",
       
    }
  return (
    <>
    <h1 style={{
        color:"green",
        fontSize:"35px",
        textDecorationColor:"AccentColor"
    }}>hello every one  here we are using inline style</h1>
<div style={{display:"flex", flexWrap:"wrap"}}>
  <div style={cardStyle}>
<img style={{width:"200px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKKKWipwjduvTe-AcxbOIRVx9QWU1wudwNp1CpPhkWA&s=10' alt='imgae id'></img>
<div>
    <h3>Ujjwal Pandey</h3>
    <p>Software Developer</p>
    <p>Work Experience 3-Year plus</p>

</div>
    </div>
    <div style={cardStyle}>
<img style={{width:"200px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKKKWipwjduvTe-AcxbOIRVx9QWU1wudwNp1CpPhkWA&s=10' alt='imgae id'></img>
<div>
    <h3>Rahu Pandey</h3>
    <p>Full Stack Developer</p>
    <p>Work Experience 5-Year plus</p>

</div>
    </div>
    <div style={cardStyle}>
<img style={{width:"200px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKKKWipwjduvTe-AcxbOIRVx9QWU1wudwNp1CpPhkWA&s=10' alt='imgae id'></img>
<div>
    <h3>Vivek Pandey</h3>
    <p>Manager</p>
    <p>Work Experience 8-Year plus</p>

</div>
    </div>
</div>
  
    </>
  )
}

export default Inlinestyle