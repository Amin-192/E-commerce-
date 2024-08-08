"use client";
import React, { useState } from 'react';
import Menu from './Menu';

export default function Hero() {
  const [color, changeColor] = useState('white');
  
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  
  const ChangeColor = () => {
    changeColor(getRandomColor());
  };
  
  return (
    <div className="h-auto w-screen flex items-center justify-center" >
      <div className="w-full h-full max-w-screen-xl shadow-2xl p-4 rounded-2xl">
        <div className="p-2 text-center">
          <h1 className="text-8xl text-orange-300 font-bold font-serif text-bold p-2">
            Boba caffe
          </h1>
         
        </div>
        <div className="grid grid-cols-2 p-4 gap-5">
          <Menu />
        </div>
      </div>
    </div>
  );
}