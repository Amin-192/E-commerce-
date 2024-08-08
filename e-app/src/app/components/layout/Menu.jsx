import React from 'react';
import Image from 'next/image';
import { Products } from '../../../../src/products';

export default function Menu() {
  const displayProducts = Products.slice(0, 2); // Ensure only the first 2 products are taken

  return (
    <div className="grid grid-cols-4 gap-7 w-[1200px] relativeleft-[40%]">
      {Products.map((product, key) => (
        <div key={key} className="shadow- p-4 rounded-2xl w-[300px]">
          <Image className='bg-cover relative left-[10%] h-[180px] rounded-2xl' src={product.image} alt={product.name} width={200} height={20} />
          <h1 className="mt-4 text-center text-lg font-serif ">{product.name}</h1>
          <h1 className="mt-4 text-center text-lg font-serif text-orange-300 ">Ksh {product.price}</h1>
          <button className='text-center relative left-[30%] bg-orange-300 px-4 py-2 rounded-2xl
          hover:bg-orange-200 mt-3'>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}