import React from 'react'
import { useState,useEffect } from 'react'

const initialformValues = {fullname:"",phone:""}

function Form({ addContacts,contacts }) {

    useEffect (() => {
        setForm(initialformValues)
    },[contacts])
    
    const [form, setForm] = useState(initialformValues)

    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === "" || form.phone === "") {
            return false;
        }
        addContacts([...contacts,form])
        console.log(form)

        
    }

    return (
    <form onSubmit={onSubmit}>
        <div>
         <br></br>
        <input name='fullname' placeholder='Fullname'  value={form.fullname} onChange={onChangeInput}/>
        <br></br>
        <br></br>
        <input name='phone' placeholder='Phone Number' value={form.phone} onChange={onChangeInput}/>
        <br></br>
        <br></br>
        <button>
            Add
        </button>
        
        <br></br>
        </div>
    </form>
  )
}

 export default Form 