import React from "react"

export default function FormInput({ id, label, handleFields, name, type, value }) {
  return (
    <div className="input-cell">
      <label htmlFor={id}>
        {label}
      </label>
      <input 
        required
        type={type}
        onChange={handleFields}
        id={id.toLowerCase().replace(/\s/g, "")}
        value={value}
        name={name}/>
    </div>
  )
}

FormInput.defaultProps = {
  id: "",
  field: "",
  type: "",
  name: "",
  handleFields: () => {}
}