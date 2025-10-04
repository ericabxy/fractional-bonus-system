import React from 'react'

function Feature (props) {
  const { dispatch, name } = props
  const onChange = evt => {
    dispatch({
      [name]: evt.target.checked
    })
  }
  const title = name.replace(/([a-z])([A-Z])/g, '$1 $2')
  return (
    <label>
      <input
        type='checkbox'
        checked={props[name]}
        onChange={onChange}
      />
      <span style={{textTransform: 'capitalize'}}>{title}</span>
    </label>
  )
}

export default Feature
