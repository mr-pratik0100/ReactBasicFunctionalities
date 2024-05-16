import React, { useState } from 'react'

function NewTodos() {
    const [texts,setTexts] = useState([])
    const[task,setTask]= useState("")
    const [updateId,setUpdateId] = useState(null);

const addTask = () =>{
    if(task.trim() != ""){
       setTexts([...texts,{id:Date.now(),text:task,completed:false}])
       setTask("")
    }
}

const toggleCheckBox = (id) =>{
    const checkedOrNot = texts.map((text)=>text.id === id ?{...text,completed:!text.completed} : text)
    setTexts(checkedOrNot)
} 

const deleteTodo = (id) => {
    const dele = texts.filter((text)=>text.id !== id)
    setTexts(dele)
}

const handleEdit = (id) =>{
    setUpdateId(id)
   const textToEdit = texts.find((text)=>text.id===id);
   if(!textToEdit)alert("not editable")
    setTask(textToEdit.text)
}

const handleUpdate = () =>{
    if(!updateId)alert("id not found")
    const upda= texts.map((ele)=> ele.id === updateId ? {...ele,text:task}:ele)
    setTexts(upda)
    setUpdateId(null)
    setTask("")

}

  return (
    
    <>
        <h1>Todo's Application</h1> 
        <input type="text" placeholder='Enter Your Todo' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addTask}>Add Todo</button>

        <ul>
            {
                texts.map((text)=>(
                    <li>
                        <input type="checkbox" value={text.completed} onChange={()=>toggleCheckBox(text.id)}/>
                        <span style={{textDecoration:text.completed ? 'line-through' :'none'}}>{text.text}</span>
                        <button onClick={()=>deleteTodo(text.id)}>Delete</button>
                        
                        {
                            updateId===text.id ? (
                                <button onClick={handleUpdate}>Update</button>
                            ) : (
                                <button onClick={()=>handleEdit(text.id)}>Edit</button>
                            )
                        }
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default NewTodos
