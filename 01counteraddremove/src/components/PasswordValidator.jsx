import React, { useState } from 'react'


//not working test method check what happening 
function PasswordValidator() {
    const [pass,setPass] = useState("")
    const validatePass = () =>{
       
        const strongP = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/"
        if(!pass)alert("plz enter password")
           
        if(strongP.test(pass)){
           
            alert("password is strong enough")
        }else{
            alert("plz enter strong password")
        }
    }
  return (
    <>
    <h1>Password Validator</h1>
    <input type="password" value={pass} placeholder='Enter Your Password' onChange={(e)=>setPass(e.target.value)} />
    <button onClick={validatePass}>Validate</button>
      
    </>
  )
}

export default PasswordValidator
