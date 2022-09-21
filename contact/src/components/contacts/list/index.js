import { useState } from 'react'


function List( { contacts } ) {
  const [filterText, setFilter] = useState('');
  const filtered = contacts.filter((item)=> {
    return Object.keys(item).some(key => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
  )
  })

  console.log(filtered)
  return (
    <div>
        <input placeholder='Search Contacts' value={filterText} onChange={
          (e) => [setFilter(e.target.value)]
        }/>
        
        <ul className='list'>
        {
        filtered.map((contact,id) =>
        <li key={id}>
           <span>{contact.fullname}</span>
           <span>{contact.phone}</span>
        </li> 
        )
        }
        </ul>
        <p>Total Contacts ({filtered.length}) </p>
   
    </div>
  )
}

export default List