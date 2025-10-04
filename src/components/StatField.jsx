import React from 'react'

function StatField (props) {
  return (
    <div className='stat'>
      <label className='stat__label'>{props.children}</label>
      <input
        className='stat__field'
        type='number'
        value='0'
      />
    </div>
  )
}

export default StatField
