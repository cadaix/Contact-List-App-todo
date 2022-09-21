import React from 'react'
import List from './list'
import Form from './Form'
import { useState,useEffect } from 'react'
import './styles.css' 

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:'Serkan',
      phone: 5678
    },
    {
      fullname:'Dora',
      phone: 1234
    }
  ]);
  
  useEffect(() => {
    console.log(contacts)
  },[contacts ])
  return (
    
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts}/>  
        <Form addContacts={setContacts} contacts={contacts}/>  
    </div>
  )
}

export default Contacts