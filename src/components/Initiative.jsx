import React from 'react'

import StatField from './StatField'

function Initiative (props) {
  return (
    <div className='Initiative stat'>
      <StatField name='dexterityModifier' textLower='total' {...props}>
        <label class='stat__label'>Initiative</label>
      </StatField>
      <StatField equals name='dexterityModifier' textLower='dex modifier' {...props} />
      <StatField plus name='miscModifier' textLower='misc modifier' {...props} />
    </div>
  )
}

export default Initiative
