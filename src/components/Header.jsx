import React from 'react'

function Header (props) {
  return (
    <h1 style={{float: 'right', padding: '0 1em', width: '20%'}}>
      {props.children}
    </h1>
  )
}

export default Header
