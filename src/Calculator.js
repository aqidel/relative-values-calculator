import React from 'react';

export default function Calculator(props) {
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
        disabled={props.active[5] == props.id ? false : true}/>
      <div className='result-wrap'>
        <span>NaN</span>
      </div>
    </label>
  )
}