import React from 'react'

import Throw from './Throw'

function SavingThrows (props) {
  return (
    <div style={{margin: '5px 0'}}>
      <Throw name='fortitude' ability='constitution' good='fighter' {...props} />
      <Throw name='reflex' ability='dexterity' good='rogue' {...props} />
      <Throw name='will' ability='wisdom' good='wizard' {...props} />
    </div>
  )
}

export default SavingThrows
