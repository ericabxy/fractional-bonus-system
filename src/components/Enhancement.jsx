import React from 'react'

function Enhancement (props) {
  const { children, setter, value } = props
  return (
    <label>
      <input
        type='checkbox'
        checked={value}
        onChange={evt => setter(evt.target.checked)}
      />
      {children}
    </label>
  )
}

export default Enhancement
