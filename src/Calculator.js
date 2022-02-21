import React from 'react';

export default function Calculator(props) {
  return (
    <label htmlFor={'item-' + props.id} id={'card-' + props.id} className='calculator-wrap'>
      <div className='viewport-wrap'>
        <input type='text'/>
        <label className='viewport-label'>viewport {props.viewport}</label>
      </div>
      <div className='size-wrap'>
        <input type='text'/>
        <label className='size-label'>size in {props.size}</label>
      </div>
      <button>CONVERT</button>
      <div className='result-wrap'>
        <span>NaN</span>
      </div>
    </label>
  )
}