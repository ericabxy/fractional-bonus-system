import React, { useState } from 'react'

import Label from './Label'

function ExpLevel (props) {
  // Level effects Fort, Ref, Will, and Bab
  const { dispatch } = props
  const onChange = evt => {
    const value = (
      evt.target.value > 20 ? 20 :
      evt.target.value < 1 ? 1 :
      evt.target.value
    )
    dispatch({
      level: value
    })
  }
  return (
    <div className='desc'>
      <input
        className='desc__number'
        type='number'
        min='1'
        max='20'
        value={props['level']}
        onChange={onChange}
      />
      <Label className='desc__label'>level</Label>
    </div>
  )
}

export default ExpLevel
