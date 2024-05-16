import React, { useState } from 'react'

function ToggleMode() {

    const[mode,setMode]= useState('light')
    const handleClick = () =>{
        setMode(mode ==='light' ?'dark':'light')
    }
  return (
    <>
      <div className={`container ${mode}`}>
        <button onClick={handleClick}>
            {mode==='light' ? 'dark':'light'}
        </button>
        <h1>Background Theme Toggle</h1>
      </div>
    </>
  )
}

export default ToggleMode
