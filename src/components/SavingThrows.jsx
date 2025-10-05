import React from 'react'

import StatField from './StatField'

function SavingThrows (props) {
  return (
    <div className='SavingThrows list'>
      <div className='stat stat--upper'>
        <StatField
          name='baseFortitudeBonus baseFortitude constitutionModifier'
          textUpper='total'
          {...props}
        >
          <label className='stat__label'>Fortitude</label>
        </StatField>
        <StatField name='baseFortitudeBonus' textUpper='base save bonus' {...props}>
          <span className='stat__sign'>=</span>
        </StatField>
        <StatField name='baseFortitude' textUpper='base save' {...props}>
          <span className='stat__sign'>+</span>
        </StatField>
        <StatField name='constitutionModifier' textUpper='ability modifier' {...props}>
          <span className='stat__sign'>+</span>
        </StatField>
      </div>
      <div className='stat'>
        <StatField
          name='baseReflexBonus baseReflex dexterityModifier'
          {...props}
        >
          <label className='stat__label'>Reflex</label>
        </StatField>
        <StatField name='baseReflexBonus' {...props}>
          <span className='stat__sign'>=</span>
        </StatField>
        <StatField name='baseReflex' {...props}>
          <span className='stat__sign'>+</span>
        </StatField>
        <StatField name='dexterityModifier' {...props}>
          <span className='stat__sign'>+</span>
        </StatField>
      </div>
      <div className='stat'>
        <StatField
          name='baseWillBonus baseWill wisdomModifier'
          {...props}
        >
          <label className='stat__label'>Will</label>
        </StatField>
        <StatField name='baseWillBonus' {...props}>
          <span className='stat__sign'>=</span>
        </StatField>
        <StatField name='baseWill' {...props}>
          <span className='stat__sign'>+</span>
        </StatField>
        <StatField name='wisdomModifier' {...props}>
          <span className='stat__sign'>+</span>
        </StatField>
      </div>
    </div>
  )
}

export default SavingThrows
