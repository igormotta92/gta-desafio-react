import './styles.css'
import { ChangeEventHandler, useState } from 'react';

interface ScreenProps {
  historic?: Array<string>
  value?: any
  stateOnChange?: any
  calculate?: any
}

function Screen({ value, stateOnChange, historic, calculate }: ScreenProps) {

  function handlerValue(e: any) {
    console.log('handlerValue');
    value = e.target.value;
    // if (!/[\d]]/.test(value)) {
    //value = value.substring(0, value.length - 1)
    // }
    stateOnChange(value);

  }

  function handleKeyPress(e: any) {
    console.log('handleKeyPress');
    if (e.key === 'Enter') {
      calculate(value);
    }
    ///[0-9\/*-+]/.test
  }

  return (
    <>
      <div className='screen'>
        <div className="historic">
          {historic?.map((expression, idx) => {
            return (
              <p key={idx}>{expression}</p>
            )
          })}
        </div>
        <div className="value">
          <input type="text" value={value} onChange={handlerValue} onKeyPress={handleKeyPress} placeholder='0' />
        </div>
      </div>
    </>
  )
}

export default Screen;
