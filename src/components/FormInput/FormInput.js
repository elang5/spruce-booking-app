import React from 'react'

export default function FormInput({ id, field, handleFields, name, type }) {
  return (
    <div className='input-cell'>
      <label htmlFor={id}>
        {field}
      </label>
      <input 
        required
        type={type}
        onChange={handleFields}
        id={id.toLowerCase().replace(/\s/g, '')}
        name={name}/>
    </div>
  )
}

FormInput.defaultProps = {
  id: '',
  field: '',
  type: '',
  name: ''
}