import React from 'react'

const Display = props => {
	console.log(props.showInput)

	return (
		<div className='display'>
			<input type='text' readOnly value={props.showInput} className='input' />
			<p className='result'>
				<span>{props.result}</span>
			</p>
		</div>
	)
}

export default Display
