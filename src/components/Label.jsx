import React from 'react'

function Label (props) {
  const { block, children, className, modifier } = props
  return (
    <label className={className}>
      {children}
    </label>
  )
}

export default Label
