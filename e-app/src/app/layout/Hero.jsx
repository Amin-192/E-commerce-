"use client";
import React, { useState } from 'react'

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
      <button onClick={ChangeColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background Color
      </button>
      <div className='w-[900px] h-[800px]  shadow-2xl 
       left-[27%] absolute top-[18%] 'style={{backgroundColor: color}}>

<div className='p-2'>
  <h1 className='text-8xl text-orange-300 font-bold font-mono
  '>Top <span className='text-red-600'>Deals</span></h1>

</div>
<div className='items grid grid-cols-3 p-4 gap-5  '>

<div className="card card-compact  w-70 h-[400px] shadow-xl">
  <figure>
    <img
      src="/lowdunk.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Nike Low Dunks</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <p className='text-xl text-red-500 relative top-[14%]'>5000 ksh</p>
      <button className="btn  border-orange-300 border-4 bg-white hover:bg-orange-300">Buy Now</button>
    </div>
  </div>
</div>

<div className="card card-compact  w-70 h-[400px] shadow-xl">
  <figure>
    <img
      src="/lowdunk.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Nike Low Dunks</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <p className='text-xl text-red-500 relative top-[14%]'>5000 ksh</p>
      <button className="btn  border-orange-300 border-4 bg-white hover:bg-orange-300">Buy Now</button>
    </div>
  </div>
</div>


<div className="card card-compact  w-70 h-[400px] shadow-xl">
  <figure>
    <img
      src="/lowdunk.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Nike Low Dunks</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <p className='text-xl text-red-500 relative top-[14%]'>5000 ksh</p>
      <button className="btn  border-orange-300 border-4 bg-white hover:bg-orange-300">Buy Now</button>
    </div>
  </div>
</div>




</div>
      </div>
    </div>
  )
}
