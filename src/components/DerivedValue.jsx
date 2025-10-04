import React from 'react'

function DerivedValue (props) {
  const { className, max, min, value } = props
  return <input
    className={className}
    type='text'
    value={value}
    disabled
  />
}

export default DerivedValue
