import React from 'react'

const listOfSpecials = [
  'Animal companion',
  'Bonus feat',
  'Evasion',
  'Fast movement',
  'Improved evasion',
  'Smite evil 1/day',
  'Sneak attack +1d6',
  'Trap sense',
  'Trapfinding',
  'Turn undead',
  'Uncanny dodge',
  'Wild empathy'
]

function SpecialAbility (props) {
  const { className } = props
  return (
    <select style={{flexGrow: 1}}>
      <option>[Special ability]</option>
      {listOfSpecials.map((elem, x) => (
        <option>{elem}</option>
      ))}
    </select>
  )
}

export default SpecialAbility
