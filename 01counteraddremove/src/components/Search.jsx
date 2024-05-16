import React, { useState } from 'react'
import names from './names.js'

function Search() {
  const[searchTerm,setSearchTerm]= useState("")

  const [selectGender,setSelectGender] = useState("all")

  const [searchResult,setSearchResult] = useState([])

  const handleSearch = (e) =>{
    const term = e.target.value
    setSearchTerm(term)
    const results = names.filter((name)=>{
      if(selectGender !== 'all' && name.gender !== selectGender){
        return false
      }
      return name.name.toLowerCase().includes(term.toLowerCase())
    })
  }

  const handleClick = (gender) =>{
    setSelectGender(gender)
    setSearchResult("")
  }
  return (
    <>
    
    <div className="app">
        <h1>Baby Name Search</h1>
        <div>
            <button onClick={()=>handleClick("all")}>All</button>
            <button onClick={()=>handleClick("boy")}>Boys</button>
            <button onClick={()=>handleClick("girl")}>Girls</button>
        </div>
        <input type="text" value={searchTerm} onChange={handleSearch} />
        <ul>
         {
          searchResult.map((name,index) => (
            <li key={index}>name.name</li>
            
           ))
           
         }
        </ul>
    </div>
      
    </>
  )
}

export default Search
