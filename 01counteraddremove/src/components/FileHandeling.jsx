import React, { useState } from 'react'

function FileHandeling() {
    const [files,setFiles]= useState([])
    const handleChange = (event) =>{
        const newFiles = Array.from(event.target.files)
        setFiles([...files,...newFiles])
    }

    const handleDownload = (file) =>{
        const url = window.URL.createObjectURL(new Blob([file]))
        const link = document.createElement('a')
        link.href=url;
        link.setAttribute('download',file.name)
        document.body.appendChild(link)
        link.click()
    }

    const handleDelete = (index) =>{
        const newFiles =[...files];
        newFiles.splice(index,1)
        setFiles(newFiles)
    }
  return (
    <>
     Upload File :<input type="file" multiple onChange={handleChange} />
     <ul>
        {files.map((file,index)=>(
        <li key={index}>
            {file.name}{""}
            <button onClick={()=>{handleDownload(file)}}>Download</button>
            <button onClick={()=>{handleDelete(index)}}>Delete</button>
        </li>
        ))}
     </ul>
    </>
  )
}

export default FileHandeling
