import React, { useState } from 'react'
import Hello from './components/Hello'
import World from './components/World'
function Pagination() {
    const [currentPage,setCurrentPage]=useState(1)
    const componentPerPage =1;
    const totalPage =2;

    const handleClick = (pagenumber) =>{
        setCurrentPage(pagenumber)
    }
    const renderComponent = () =>{
        if(currentPage===1){
            return(
                <Hello/>
            )
        }
        else if(currentPage === 2){
            return(
                <World/>
            )
        }
    }
  return (
    <>
    {renderComponent()}
    {Array.from({length:totalPage},(_,index)=>index+1).map((page)=>(
      <button onClick={()=>handleClick(page)} key={page} className={currentPage === page ? 'active' :''}>
        {page}
      </button>
    ))}
    </>
  )
}

export default Pagination
