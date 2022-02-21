import React from 'react';
import Calculator from './Calculator';
import './scss/desktop.scss';

export default function App() {
  return (
    <>
      <div id='container'>
        <input type='radio' name='slider' id='item-1' defaultChecked/>
        <input type='radio' name='slider' id='item-2'/>
        <input type='radio' name='slider' id='item-3'/>
        <input type='radio' name='slider' id='item-4'/>
        <Calculator id={1} viewport={'width'} size={'px'}/>
        <Calculator id={2} viewport={'width'} size={'vw'}/>
        <Calculator id={3} viewport={'height'} size={'px'}/>
        <Calculator id={4} viewport={'height'} size={'vh'}/>
      </div>
    </>
  )
}