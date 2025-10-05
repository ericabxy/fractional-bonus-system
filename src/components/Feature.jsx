import React from 'react'

function Feature (props) {
  const { dispatch, name } = props
  const onChange = evt => {
    dispatch({
      [name]: evt.target.checked
    })
  }
  const title = name.replace(/([a-z])([A-Z])/g, '$1 $2')
  return (
    <label>
      {typeof props[name] === 'boolean'
        ? (
          <input
            type='checkbox'
            checked={props[name]}
            onChange={onChange}
          />
          )
        : (
          <>
            {[...Array(10)].map((x, elem) => (
              <input
                key={x}
                type='checkbox'
                checked={elem < props[name]}
                onChange={evt => {
                  if (elem === props[name]) {
                    dispatch({ [name]: parseInt(props[name]) + 1 })
                  } else if (elem === props[name] - 1) {
                    dispatch({ [name]: parseInt(props[name]) - 1 })
                  }
                }}
              />
            ))}
          </>
          )}
      <span className='desc__label'>{title}</span>
    </label>
  )
}

export default Feature
