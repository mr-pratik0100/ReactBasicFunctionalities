import React from 'react'
import { useState } from 'react'

//We have created add subtract count functionality between range from 1 to 10 only.

function AddSubtractCount() {

  const [count, setCount] = useState(5)
  const addCount = () =>{
    if(count >=10){
      setCount(10)
    }else{
      setCount(count+1)
    }
  }

  const subtractCount = () =>{
    if(count <=0){
      setCount(0)
    }else{
      setCount(count-1)
    }
  }
  return (
    <>
      <h1>Number Counter !!</h1>
      <h3>Number : {count}</h3><br />
      <button onClick={addCount}>Add Count</button>
      <button onClick={subtractCount}>Sutract Count</button>
    </>
  )
}

export default AddSubtractCount
