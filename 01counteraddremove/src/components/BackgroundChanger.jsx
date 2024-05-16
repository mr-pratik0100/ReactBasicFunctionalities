import React, { useState } from 'react'

function BackgroundChanger() {

    const[color,setColor] = useState("orange")

  return (
    <>
      <h1>BackGround-Changer</h1>
      <div className="container" style={{backgroundColor:color}}>
        <button onClick={()=>setColor("red")} >Red</button>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("yellow")}>Yellow</button>
      </div>
    </>
  )
}

export default BackgroundChanger
