import React from 'react'
import './button.css'

const Button = props => {
	return (
		<button
			className='button'
			onClick={() => props.onClick_handleButtonClick(props.value)}
		>
			{props.value}
		</button>
	)
}

export default Button
