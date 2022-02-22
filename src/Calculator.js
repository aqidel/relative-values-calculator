import React, { useState } from 'react';

export default function Calculator(props) {
  const [state, setState] = useState({
    size: null,
    value: null,
    result: null
  });

  function handler() {
    if (props.size == 'px') {
      setState({...state, result: state.value / state.size * 100});
    } else {
      setState({...state, result: state.value / 100 * state.size});
    }
  }

  function clear() {
    setState({size: null, value: null, result: null})
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
          value={state.size}
          onChange={(e) => setState({...state, size: e.target.value})}
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
          value={state.value}
          onChange={(e) => setState({...state, value: e.target.value})}
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
        disabled={props.active[5] == props.id ? false : true}
      />
      <input
        type='button'
        className='clear-button'
        value='CLEAR'
        onClick={() => clear()}
        disabled={props.active[5] == props.id ? false : true}
      />
      {state.result ?
        <div className='result-wrap'>
          <span>{state.result}</span>
        </div>
      : null}
    </label>
  )
}