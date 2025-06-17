import React from 'react'

const Display = (props) => {
  console.log(props.showInput)


  return (
    <div className="display">
        <input type="text" readOnly value={props.showInput} />
        <p className='result'>
          Result :<span>{props.result}</span>
        </p>
    </div>
  )
}

export default Display