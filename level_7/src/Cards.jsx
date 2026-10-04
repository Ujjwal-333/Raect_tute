import React,{useState} from 'react'

const Cards = () => {

    const [cardStyle, setCardStyle] =useState(
    {
        border:"1px solid pink",
        width:"200px",
        boxShadow:"1px 2px 3px 0px pink",
        margin:"10px",
        padding:"10px"
    }
);
const [text,setText] =useState();
const [grid, setGrid] =useState(true);

const updateTheme=(bgColor, textColor)=>{
setCardStyle({...cardStyle,backgroundColor:bgColor})
setText(textColor)
}
  return (
    <>

    <button onClick={()=>updateTheme("gray","aqua")}>Gray Theme</button>
    <button onClick={()=>updateTheme("green","black")}>Green Theme</button>
    <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>

  <div style={{display:grid?"flex":"block", flexwrap:"wrap"}}>
    <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
    
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
       <div style={cardStyle}>
        <img style={{width:"200px"}} src="https://static.vecteezy.com/system/resources/previews/022/132/450/non_2x/personal-id-icon-logo-design-vector.jpg" alt='id photo'></img>
        <div>
            <h3>Aniket Tiwari</h3>
            <p>Work profeesion:Developer</p>
            <p>Hobby:debugging</p>
            <p>friend : No friend circle</p>
        </div>
    </div>
  </div>
    </>
  )
}

export default Cards