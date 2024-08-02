"use client";
import React, { useState } from 'react'
import Menu from './Menu';

export default function Hero() {
  const [color,changeColor] = useState('white');
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  const ChangeColor = () => {
    changeColor(getRandomColor());
  };
  return (
    <div className='' >
     
      <div className='w-[900px] h-[800px]  shadow-2xl 
       left-[27%] absolute top-[28%] '>

<div className='p-2'>
  <h1 className='text-8xl text-orange-300 font-bold font-mono
  '>Top <span className='text-red-600'>Deals</span></h1>
 <button onClick={ChangeColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background Color
      </button> {/* doesnt work currently due to the removal of the function that calls it in css */}
</div>
<div className='items grid grid-cols-3 p-4 gap-5  '>
<Menu/>
<Menu/>
<Menu/>
</div>
      </div>
    </div>
  )
}
