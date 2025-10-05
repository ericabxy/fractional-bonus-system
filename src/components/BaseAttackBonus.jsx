import React from 'react'

import StatField from './StatField'

function BaseAttackBonus (props) {
  const { baseAttackBonus, level } = props
  const bonus = parseInt(baseAttackBonus)
  const fractional = parseInt(level / 2)
  return (
    <div className='stat'>
      <StatField
        name='baseAttackBonus baseAttack'
        {...props}
      >
        <label className='stat__label'>base attack bonus</label>
      </StatField>
    </div>
  )
}

export default BaseAttackBonus
