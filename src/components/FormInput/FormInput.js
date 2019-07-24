import React from 'react'

export default function FormInput({ id, field, handleFields, name }) {
  return (
    <div className='input-cell'>
      <label htmlFor={id}>
        {field}
      </label>
      <input 
        required
        type="text"
        onChange={handleFields}
        id={id.toLowerCase().replace(/\s/g, '')}
        name={name}/>
    </div>
  )
}
