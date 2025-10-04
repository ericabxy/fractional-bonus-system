import React from 'react'

function TextField (props) {
  const { name, onChange } = props
  const title = name.replace(/([a-z])([A-Z])/g, '$1 $2')
  return (
    <label className='field field--text'>
      <input
        className='field__input'
        type='text'
        name={name}
        value={props[name]}
        onChange={onChange}
      />
      <div className='field__label'>{title}</div>
    </label>
  )
}

export default TextField
