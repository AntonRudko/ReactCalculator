import React, { useState } from 'react'
import './calculator.css'
import Display from './Display'
import Button from './Button'

const Calculator = () => {
	const [input, Setinput] = useState('')
	const [result, Setresult] = useState()

	// функція обробник події на клік
	const handleButtonClick = value => {
		if (value === '=') {
			try {
				Setresult(eval(input).toFixed(4))
			} catch (error) {
				Setresult('Error')
			}
		} else if (value === 'AC') {
			Setinput('')
			Setresult()
		} else if (value === '± ') {
			Setinput('')
		} else if (value === '÷') {
			Setinput(input + '/')
		} else if (value === '×') {
			Setinput(input + '*')
		} else if (value === 'clc') {
			Setinput('component/render')
		} else {
			Setinput(input + value)
		}
	}

	return (
		<div className='calculator'>
			<Display showInput={input} result={result} />
			<div className='buttons'>
				<Button value='AC' onClick_handleButtonClick={handleButtonClick} />
				<Button value='±' onClick_handleButtonClick={handleButtonClick} />
				<Button value='%' onClick_handleButtonClick={handleButtonClick} />
				<Button value='÷' onClick_handleButtonClick={handleButtonClick} />
				<Button value='7' onClick_handleButtonClick={handleButtonClick} />
				<Button value='8' onClick_handleButtonClick={handleButtonClick} />
				<Button value='9' onClick_handleButtonClick={handleButtonClick} />
				<Button value='×' onClick_handleButtonClick={handleButtonClick} />
				<Button value='4' onClick_handleButtonClick={handleButtonClick} />
				<Button value='5' onClick_handleButtonClick={handleButtonClick} />
				<Button value='6' onClick_handleButtonClick={handleButtonClick} />
				<Button value='-' onClick_handleButtonClick={handleButtonClick} />
				<Button value='1' onClick_handleButtonClick={handleButtonClick} />
				<Button value='2' onClick_handleButtonClick={handleButtonClick} />
				<Button value='3' onClick_handleButtonClick={handleButtonClick} />
				<Button value='+' onClick_handleButtonClick={handleButtonClick} />
				<Button value='clc' onClick_handleButtonClick={handleButtonClick} />
				<Button value='0' onClick_handleButtonClick={handleButtonClick} />
				<Button value=',' onClick_handleButtonClick={handleButtonClick} />
				<Button value='=' onClick_handleButtonClick={handleButtonClick} />
			</div>
		</div>
	)
}

export default Calculator
