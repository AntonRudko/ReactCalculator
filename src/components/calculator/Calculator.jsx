import React, { useState } from 'react';
import './calculator.css';
import Display from './display/Display';
import Button from './button/Button';

const Calculator = () => {

const [input, Setinput]= useState('');
const [result, Setresult]= useState(0);

const handleButtonClick = (value) => {
  if(value === '='){
    try{
        Setresult(eval(input))
        // тут інший хук
    }
    catch(error){
        Setresult('Error')
    }

  }
  else if(value === 'AC') {
    Setinput('')
  }
  else if(value === '± ') {
    Setinput('')
  }
  else if(value === '÷') {
    Setinput(input + '/')
  }
  else if(value === '×') {
    Setinput(input + '*')
  }
  else if(value === 'clc') {
    Setinput('component/render')
  }
  else{
    Setinput(input + value);
  }
}
  return ( 
    <div className="calculator">
    <Display showInput = {input} result = {result} />
    <div className="buttons">
      <Button value = 'AC' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '±' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '%' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '÷' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '7' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '8' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '9' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '×' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '4' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '5' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '6' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '-' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '1' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '2' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '3' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '+' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = 'clc' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '0' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = ',' onClick_handleButtonClick = {handleButtonClick}/>
      <Button value = '=' onClick_handleButtonClick = {handleButtonClick}/>
    </div>
    </div>
  )
}

export default Calculator