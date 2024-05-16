import React, { useState } from 'react'

function FormHandling() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
       e.preventDefault()
        
    };

    return (
        <>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                /><br />
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formData.useremail}
                /><br />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default FormHandling;
