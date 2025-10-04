import React from 'react'

function List (props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.proname}</span>
          <span>{item.charaset}</span>
          <span>{item.variant}</span>
        </li>
      ))}
    </ul>
  )
}

export default List
