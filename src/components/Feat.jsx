import React from 'react'

const listOfFeats = [
  'Alertness',
  'Blind-fight',
  'Combat Casting',
  'Dodge',
  'Improved Initiative',
  'Mobility',
  'Point Blank Shot',
  'Power Attack',
  'Scribe Scroll',
  'Toughness'  
]

function Feat (props) {
  const { className } = props
  return (
    <select style={{flexGrow: 1}}>
      <option>[Feat]</option>
      {listOfFeats.map((elem, x) => (
        <option>{elem}</option>
      ))}
    </select>
  )
}

export default Feat
