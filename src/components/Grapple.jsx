import React from 'react'

import StatField from './StatField'

function Grapple (props) {
  return (
    <div className='Grapple stat'>
      <StatField
        name='baseAttackBonus baseAttack strengthModifier'
        textLower='total'
        {...props}
      >
        <label className='stat__label'>Grapple</label>
      </StatField>
      <StatField
        name='baseAttackBonus'
        textLower='base attack bonus'
        operator='=' {...props}
      />
      <StatField
        name='baseAttack'
        textLower='base attack'
        operator='+'
        {...props}
      />
      <StatField
        name='strengthModifier'
        textLower='strength modifier'
        operator='+'
        {...props}
      />
      <StatField
        name='sizeModifier'
        textLower='special size modifier'
        operator='+'
        {...props}
      />
      <StatField
        name='miscModifier'
        textLower='misc modifier'
        operator='+'
        {...props}
      />
    </div>
  )
}

export default Grapple
