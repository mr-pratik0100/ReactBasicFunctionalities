import './App.css'
import React from 'react'
import AddSubtractCount from './components/AddSubtractCount'
import BackgroundChanger from './components/BackgroundChanger'
import PasswordGenerator from './components/PasswordGenerator'
import NewTodos from './components/NewTodos'
import RandomGenerateNum from './components/RandomGenerateNum'
import PasswordValidator from './components/PasswordValidator'

import CurrencyConverter from './components/CurrencyConverter'
import FormHandeling from './components/FormHandeling'
import Search from './components/Search'
import FormValidations from './components/FormValidations'
import FileHandeling from './components/FileHandeling'
import ReactShareIcon from './components/ReactShareIcon'
import ToggleMode from './components/ToggleMode'
import Pagination from './Pagination'



function App() {
  return (
    <>
   
      {/* <AddSubtractCount/> working */}
      {/* <BackgroundChanger/> working */}
      {/* <PasswordGenerator/> working */}
      {/* <NewTodos/> Working*/}
      {/* <RandomGenerateNum/> Working*/}
      {/* <PasswordValidator/> working */}
      {/* {<CurrencyConverter/>} Not working some bug */}
      {/* <FormHandeling/>Not working*/}
      {/* <Search/> not working*/}
      {/* <FormValidations/> Not working*/}
      {/* <FileHandeling/> working*/}
      {/* <ReactShareIcon/> working */}
      {/* <ToggleMode/> working */}
      <Pagination/>
    </>
  )
}

export default App














// function App() {
//   const [count, setCount] = useState(5)
//   const addCount = () =>{
//     if(count >=10){
//       setCount(10)
//     }else{
//       setCount(count+1)
//     }
//   }

//   const subtractCount = () =>{
//     if(count <=0){
//       setCount(0)
//     }else{
//       setCount(count-1)
//     }
//   }

//   return (
//     <>
//      <h1>Number Counter !!</h1>
//       <h3>Number : {count}</h3><br />
//       <button onClick={addCount}>Add Count</button>
//       <button onClick={subtractCount}>Sutract Count</button>
//     </>
//   )
// }

// export default App
