import React, { useState } from 'react'

function FormValidations() {
    const [formData,setFormData]= useState({
        //this variables must match with db in backend also same keyword add in name in input tag.
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const [errors,setErrors]= useState({})

    const [formValid,setFormValid]= useState(false)

    const validateForm = () =>{
        let errors ={}
        let formIsValid = true;
        if(!formData.username.trim()){
            errors.username="username is required"
            formIsValid=false
        }
        setErrors(errors)
    }


    const handleChange = (e) =>{
       const {name,value} =e.target;
       setFormData({...formData,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDeefault()
        validateForm()
        if(formValid){
            console.log("form submited :",formData)
        }else{
            console.log("form Error")
        }
    }
  return (
    <>
      <div className="formcontainer">
        <h1>Form Validations</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">
                   UserName : <input onChange={handleChange} type="text"  id="username" autoComplete='off' name='username' value={formData.username}/>
                </label>
                {errors.username && <span className='errors'>{errors.username}</span>}
            </div>
            <div>
                <label htmlFor="email">
                   Email : <input onChange={handleChange} type="email"  id="email" autoComplete='off' name='email' value={formData.email}/>
                </label>
            </div>
            <div>
                <label htmlFor="password">
                   Password : <input onChange={handleChange} type="password"  id="password" autoComplete='off' name='password' value={formData.password}/>
                </label>
            </div>
            <div>
                <label htmlFor="cp">
                   ConfirmPassword : <input onChange={handleChange} type="password"  id="cp" autoComplete='off' name='confirmPassword' value={formData.confirmPassword}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default FormValidations
