import React from 'react'

function Ability (props) {
  const { dispatch, modifierName, name } = props
  const onChange = evt => {
    dispatch({
      [name]: evt.target.value,
      [name + 'Modifier']: parseInt(evt.target.value / 2) - 5
    })
  }
  return (
    <div className='stat stat--ability'>
      <label className='stat__label'>
        {name.slice(0, 3)}
      </label>
      <input
        className='stat__field'
        type='number'
        value={props[name]}
        min='3'
        max='20'
        onChange={onChange}
      />
      <input
        className='stat__field'
        type='text'
        value={props[modifierName] ? props[modifierName] : 0}
        disabled
      />
    </div>
  )
}

export default Ability
