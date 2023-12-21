import React from 'react'
import './input.scss'

const Input = (props) => {
  const { label, name, type, change, required } = props;

  return (
    <div className="form-input">
      <input
        name={name}
        type={type}
        placeholder={label}
        onChange={change}
        required={required}
      />
    </div>
  )
}

Input.defaultProps = {
  type: "text",
}

export default Input;