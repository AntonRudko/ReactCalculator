import React from 'react'

const Button = (props) => {
  return (
    <button className='' onClick={( )=> props.onClick_handleButtonClick(props.value)}>
      {props.value}
    </button> 
  )
}

export default Button