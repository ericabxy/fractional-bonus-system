import React from 'react'

import DerivedValue from './DerivedValue'
import Label from './Label'

function BaseAttackBonus (props) {
  const { baseAttackBonus, level } = props
  const bonus = parseInt(baseAttackBonus)
  const fractional = parseInt(level / 2)
  return (
    <div className='stat'>
      <Label className='stat__label'>base attack bonus</Label>
      <DerivedValue
        className='stat__field'
        value={fractional + bonus}
      />
    </div>
  )
}

export default BaseAttackBonus
