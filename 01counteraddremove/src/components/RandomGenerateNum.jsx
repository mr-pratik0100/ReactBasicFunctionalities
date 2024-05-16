import React, { useState } from 'react'

function RandomGenerateNum() {
    //if you want 6 digit otp randomly you set max =1000000
    
    const [random,setRandom] = useState(null)
    
    const generate = () =>{
        const minv =1
        const maxv = 1000000
        let num = Math.floor(Math.random()*(maxv+1) + minv)
        setRandom(num)
    }


  return (
    <>
      <h1>Random Number Generator</h1>
      <input type="text" value={random}  />
      <button onClick={generate}>GenrateNum</button>
    </>
  )
}

export default RandomGenerateNum
