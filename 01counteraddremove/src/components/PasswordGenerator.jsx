import React, { useEffect, useRef, useState } from 'react'

function PasswordGenerator() {
    const[length,setLength] =useState(8)
    const[password,setPassword]=useState("")
    const[number,setNumber] =useState(false)
    console.log(number)
    const[character,setCharacter]= useState(false)

    const passwordGenerator = () => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        if(number)str+="1234567890";
        if(character)str+="~`!@#$%^&*(-_=+){]}["
        

        for(let i=1;i<=length;i++){
            let index = Math.floor(Math.random()*str.length + 1)
            pass+=str.charAt(index);
        }
        setPassword(pass)
    }

    //useRef()

    const passwordRef = useRef()

    const copyToBoard = () =>{
       window.navigator.clipboard.writeText(password)
    }

    useEffect(()=>{
        passwordGenerator()
    },[number,character,length,setPassword])

  return (
    <>
      <input type="text" placeholder='Enter Your Password' value={password} ref={passwordRef}/>
      <button onClick={copyToBoard}>Copy</button><br />
      <input type="range" min={8} max={100} value={length} 
      onChange={(e)=>setLength(e.target.value)}/>
      Length : {length}
      <br />
      Number :<input type="checkbox" defaultChecked={number} onClick={()=>setNumber((prev)=>!(prev))}/>
      Character : <input type="checkbox" defaultChecked={character} onClick={()=>setCharacter((prev)=>!(prev))}/>
    </>
  )
}

export default PasswordGenerator
