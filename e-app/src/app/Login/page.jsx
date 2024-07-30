"use client";
import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function loginPage() {
 
  return (
    <section className="mt-8 bg-blue-200 rounded-full">
      <h1 className="text-center text-primary text-4xl mb-4">
        Login
      </h1>
     
      <form className="flex flex-col text-center gap-5 max-w-xs mx-auto p-3 " >
        <input className="px-4 py-2  rounded-xl bg-gray-100" type="email" placeholder="email" 
         />
        <input className="px-4 py-2 rounded-xl bg-gray-100" type="password" placeholder="password" 
               />
        <button className="px-3 py-1 bg-blue-300 relative left-[35%] rounded-2xl w-[90px]" type="submit" >
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button
          className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Not Registered Yet?{' '}
          <Link className="underline" href={'/Register'}>Register here &raquo;</Link>
        </div>
      </form>
    </section>
  );
}