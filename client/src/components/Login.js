import React, { useState } from 'react'
import {axiosWithAuth  } from "../utils/axiosWithAuth";
import axios from 'axios'

const initialFormValues = {
    username: '',
    password:''
}
export function Login(props){
    const [formValues, setFormValues]= useState(initialFormValues)
    
    const onSubmit =(e) => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/api/login", formValues)
        .then(res=>{
            localStorage.setItem('token', res.data.payload)
            props.history.push('/bubble-page')
        })
        .catch(err =>{
            console.log( err)
        })
    }
        const onChange = (e) => {
            setFormValues({
                ...formValues,
               
                [e.target.name]: [e.target.value]
            })
        }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="username">Username: </label>
            <input
            type="text"
            value={formValues.username}
            onChange={onChange}
            name="username" />
            <br/>
 <label htmlFor="password">Password: </label>
            <input
            type="text"
            value={formValues.password}
            onChange={onChange}
            name="password" /> <br/>
    <button type="submit">Login</button>
        </form>
    )
}