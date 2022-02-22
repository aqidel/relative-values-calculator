import React, { useState } from 'react';
import Calculator from './Calculator';
import './scss/desktop.scss';

export default function App() {
  const [active, setActive] = useState('item-1');
  return (
    <>
      <div id='container'>
        <input type='radio' name='slider' id='item-1' onChange={(e) => setActive(e.target.id)} defaultChecked/>
        <input type='radio' name='slider' id='item-2' onChange={(e) => setActive(e.target.id)}/>
        <input type='radio' name='slider' id='item-3' onChange={(e) => setActive(e.target.id)}/>
        <input type='radio' name='slider' id='item-4' onChange={(e) => setActive(e.target.id)}/>
        <Calculator id={1} viewport={'width'} size={'px'} color={'#99ccff'} active={active}/>
        <Calculator id={2} viewport={'width'} size={'vw'} color={'#80ffaa'} active={active}/>
        <Calculator id={3} viewport={'height'} size={'px'} color={'#ffbf80'} active={active}/>
        <Calculator id={4} viewport={'height'} size={'vh'} color={'#ff8566'} active={active}/>
      </div>
    </>
  )
}