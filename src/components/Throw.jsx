import React from 'react'

import DerivedValue from './DerivedValue'
import Label from './Label'

// A saving throw is derived from three types of modifiers
// 1. Permanent bonus (Poor=0, Good=2)
// 2. Fractional bonus (Poor=1/3, Good=1/2)
// 3. Fractional bonus (-5 + Ability * 1/5)

function Throw (props) {
  const { ability, children, good, level, name } = props
  const bonus = props[name]
  const fractional = (
    props[good]
    ? parseInt(level / 2)
    : parseInt(level / 3)
  )
  const modifier = parseInt(props[ability] / 2) - 5
  const base = fractional + bonus
  return (
    <div className='stat stat--saving-throw'>
      <Label className='stat__label'>{name}</Label>
      <input
        className='stat__field'
        type='text'
        value={base + modifier}
        disabled
      />
      <span className='stat__sep'>=</span>
      <DerivedValue
        className='stat__field'
        value={base}
      />
      <span className='stat__sep'>+</span>
      <input
        className='stat__field'
        type='text'
        value={modifier}
        disabled
      />
    </div>
  )
}

export default Throw
