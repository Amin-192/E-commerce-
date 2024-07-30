"use client";
import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function registerPage() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
async function handleFormSubmit(ev){
ev.preventDefault();
await fetch('/api/register', {
    method: 'POST',
body: JSON.stringify({email, password}),
headers: { 'Content-Type': 'application/json' },
})
 }
  return (
    <section className="mt-8 bg-orange-300 rounded-full">
      <h1 className="text-center text-primary text-4xl mb-4">
        Register
      </h1>
     
      <form className="flex flex-col text-center gap-5 max-w-xs mx-auto p-3 " onSubmit={handleFormSubmit} >
        <input className="px-4 py-2  rounded-xl bg-gray-100" type="email" placeholder="email" 
        value={email} onChange={ev => setEmail(ev.target.value)}
         />
        <input className="px-4 py-2 rounded-xl bg-gray-100" type="password" placeholder="password" 
        value={password} onChange={ev => setPassword(ev.target.value)}
               />
        <button className="px-3 py-1 bg-blue-300 relative left-[35%] rounded-2xl w-[90px]" type="submit" >
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button
          className="flex gap-4 justify-center bg-white rounded-2xl p-2">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          already have an account?{' '}
          <Link className="underline" href={'/Login'}>Login here &raquo;</Link>
        </div>
      </form>
    </section>

  );
}