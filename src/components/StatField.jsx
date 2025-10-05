import React from 'react'

function StatField (props) {
  const { children, name, operator, textLower, textUpper } = props
  const numbers = (name ? name.split(' ') : []).map((statName) => (
    props[statName] ? props[statName] : 0
  ))
  const result = numbers.reduce((sum, num) => sum + num, 0)
  console.log(numbers.length > 1 && numbers, result)
  return (
    <>
      {children}
      {operator && <span className='stat__sign'>{operator}</span>}
      <label>
        {textUpper && <div className='stat__sublabel'>{textUpper}</div>}
        <input
          className='stat__field'
          type='text'
          name={name}
          value={result}
          disabled
        />
        {textLower && <div className='stat__sublabel'>{textLower}</div>}
      </label>
    </>
  )
}

export default StatField
