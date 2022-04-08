import React from 'react';
import './styles.css'

interface ScreenProps {
  value?: any
}

function Screen({ value }: ScreenProps) {
  return (
    <>
      <div className='screen'>
        {value ?? 0}
      </div>
    </>
  )
}

export default Screen;
