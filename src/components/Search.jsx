import React from 'react'

function Search (props) {
  const doSearch = evt => {
    console.log(evt, evt.target.value)
  }

  return (
    <>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={doSearch} />
    </>
  )
}

export default Search
