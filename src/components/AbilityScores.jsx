import React from 'react'

import Ability from './Ability'

function AbilityScores (props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Ability name='strength' {...props} />
      <Ability name='dexterity' {...props} />
      <Ability name='constitution' {...props} />
      <Ability name='intelligence' {...props} />
      <Ability name='wisdom' {...props} />
      <Ability name='charisma' {...props} />
    </div>
  )
}

export default AbilityScores
