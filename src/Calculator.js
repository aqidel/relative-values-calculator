import React, { useState } from 'react';

export default function Calculator(props) {
  const [input, setInput] = useState({
    size: 0,
    value: 0
  });

  const [result, setResult] = useState(null);

  function handler() {
    if (props.size == 'px') {
      setResult(input.value / input.size * 100);
    } else {
      setResult(input.value / 100 * input.size);
    }
  }

  return (
    <label 
      htmlFor={'item-' + props.id}
      id={'card-' + props.id} 
      className='calculator-wrap'
      style={{backgroundColor: props.color}}>
      <div className='viewport-wrap'>
        <input 
          className='viewport-input' 
          type='text'
          onChange={(e) => setInput({...input, size: e.target.value})}
          disabled={props.active[5] == props.id ? false : true}/>
        <label 
          className='viewport-label'
          style={{background: `linear-gradient(to bottom, ${props.color} 60%, #ffffff 40%)`}}>
            viewport {props.viewport}
        </label>
      </div>
      <div className='size-wrap'>
        <input 
          className='size-input'
          type='text'
          onChange={(e) => setInput({...input, value: e.target.value})}
          disabled={props.active[5] == props.id ? false : true}/>
        <label 
          className='size-label'
          style={{background: `linear-gradient(to bottom, ${props.color} 60%, #ffffff 40%)`}}>
            size in {props.size}
        </label>
      </div>
      <input 
        type='button'
        className='convert-button'
        value='CONVERT'
        onClick={() => handler()}
        disabled={props.active[5] == props.id ? false : true}/>
      {result ?
        <div className='result-wrap'>
          <span>{result}</span>
        </div>
      : null}
    </label>
  )
}