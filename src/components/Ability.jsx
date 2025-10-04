import React from 'react'

function Ability (props) {
  const { dispatch, name } = props
  const modifier = parseInt(props[name] / 2) - 5
  const onChange = evt => {
    dispatch({
      [name]: evt.target.value
    })
  }
  return (
    <div className='stat stat--ability'>
      <label className='stat__label'>{name.slice(0, 3)}</label>
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
        value={modifier > 0 ? '+' + modifier : modifier}
        disabled
      />
    </div>
  )
}

export default Ability
