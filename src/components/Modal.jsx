import React from 'react'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

function Modal (props) {
  const { isOpen, onClick } = props
  console.log(isOpen)
  return (
    <div className={`modal${isOpen ? ' modal--is-open' : ''}`}>
      <div className='modal__content'>
        <span
          className='modal__close'
          onClick={onClick}
        >
          &times;
        </span>
        {loremIpsum}
      </div>
    </div>
  )
}

export default Modal
