import React from 'react'

import TextField from './TextField'

const getRank = lv => (
  lv < 4
    ? 'Competent'
    : lv < 8
      ? 'Practiced'
      : lv < 12
        ? 'Accomplished'
        : lv < 16
          ? 'Masterful'
          : lv < 20
            ? 'Excellent'
            : 'Legendary'
)

function Description (props) {
  // Name, level, and other header info
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='container'>
        <label className='field field--text'>
          <input
            className='field__input'
            type='text'
            name='characterName'
            value={props.characterName && props.characterName}
            onChange={props.onChange}
          />
          <div className='field__label'>Character Name</div>
        </label>
        <TextField name='playerName' {...props} />
      </div>
      <div className='container'>
        <div className='container'>
          <label className='field field--text'>
            <input
              className='field__input'
              type='number'
              name='experienceLevel'
              value={props.experienceLevel}
              min='1'
              max='20'
              onChange={props.onChange}
            />
            <div className='field__label'>Experience Level</div>
          </label>
          <label className='field field--text'>
            <input
              className='field__input'
              type='text'
              name='experienceRank'
              value={getRank(props.experienceLevel)}
              disabled
            />
            <div className='field__label'>Experience Rank</div>
          </label>
        </div>
        <div className='container'>
          <TextField name='background' {...props} />
          <TextField name='alignment' {...props} />
          <TextField name='deity' {...props} />
        </div>
      </div>
      <div className='container'>
        <TextField name='size' {...props} />
        <TextField name='age' {...props} />
        <TextField name='gender' {...props} />
        <TextField name='height' {...props} />
        <TextField name='weight' {...props} />
        <TextField name='eyes' {...props} />
        <TextField name='hair' {...props} />
        <TextField name='skin' {...props} />
      </div>
    </div>
  )
}

export default Description
