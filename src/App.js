import React, { useState } from 'react';
import Calculator from './Calculator';
import './scss/desktop.scss';
import './scss/mobile.scss';

export default function App() {
  const [active, setActive] = useState('item-1');

  const [bgColor, setBgColor] = useState('#cce6ff');

  function changeHandler(id) {
    switch(id) {
      case 'item-1': 
        setBgColor('#cce6ff');
        break;
      case 'item-2':
        setBgColor('#b3ffcc');
        break;
      case 'item-3': 
        setBgColor('#ffd9b3');
        break;
      case 'item-4': 
        setBgColor('#ffc2b3');
        break;
      default: 
        setBgColor('#ffffff');
        break;
    }
    setActive(id);
  }

  return (
    <>
      <header>
        <span>CSS relative values calculator</span>
      </header>
      <main style={{backgroundColor: bgColor}}>
        <div id='container'>
          <input type='radio' name='slider' id='item-1' onChange={(e) => changeHandler(e.target.id)} defaultChecked/>
          <input type='radio' name='slider' id='item-2' onChange={(e) => changeHandler(e.target.id)}/>
          <input type='radio' name='slider' id='item-3' onChange={(e) => changeHandler(e.target.id)}/>
          <input type='radio' name='slider' id='item-4' onChange={(e) => changeHandler(e.target.id)}/>
          <Calculator 
            id={1} 
            viewport={'width'} 
            size={'px'}
            result={'vw'} 
            color={'#99ccff'} 
            active={active}/>
          <Calculator 
            id={2} 
            viewport={'width'} 
            size={'vw'}
            result={'px'} 
            color={'#80ffaa'} 
            active={active}/>
          <Calculator 
            id={3} 
            viewport={'height'} 
            size={'px'}
            result={'vh'} 
            color={'#ffbf80'} 
            active={active}/>
          <Calculator 
            id={4} 
            viewport={'height'} 
            size={'vh'}
            result={'px'} 
            color={'#ff8566'} 
            active={active}/>
        </div>
      </main>
    </>
  )
}