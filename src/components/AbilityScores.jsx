import React from 'react'

import Ability from './Ability'

function AbilityScores (props) {
  return (
    <div className='AbilityScores column'>
      <div className='stat stat--ability'>
        <label className='stat__sublabel' style={{ width: '5.25rem' }}>ability name</label>
        <label className='stat__sublabel' style={{ width: '2.5rem' }}>ability score</label>
        <label className='stat__sublabel' style={{ width: '2.5rem' }}>ability modifier</label>
      </div>
      <Ability modifierName='strengthModifier' name='strength' {...props} top />
      <Ability modifierName='dexterityModifier' name='dexterity' {...props} />
      <Ability modifierName='constitutionModifier' name='constitution' {...props} />
      <Ability modifierName='intelligenceModifier' name='intelligence' {...props} />
      <Ability modifierName='wisdomModifier' name='wisdom' {...props} />
      <Ability modifierName='charismaModifier' name='charisma' {...props} />
    </div>
  )
}

export default AbilityScores
