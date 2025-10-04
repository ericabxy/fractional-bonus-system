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
      {
        typeof props[name] == 'boolean' ? (
          <input
            type='checkbox'
            checked={props[name]}
            onChange={onChange}
          />
        ) : (
          <>
            {[...Array(10)].map((x, i) => (
              <input
                type='checkbox'
                checked={i < props[name]}
                onChange={evt => {
                    if (i == props[name]) {
                      dispatch({ [name]: parseInt(props[name]) + 1 })
                    } else if (i == props[name] - 1) {
                      dispatch({ [name]: parseInt(props[name]) - 1 })
                    }
                  }
                }
              />
            ))}
          </>
        )
      }
      <span style={{textTransform: 'capitalize'}}>{title}</span>
    </label>
  )
}

export default Feature
