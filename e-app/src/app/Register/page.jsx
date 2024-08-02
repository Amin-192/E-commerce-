"use client";
import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function registerPage() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [creatingUser, setCreatingUser] = useState(false)
 const [userCreated, setUserCreated] = useState(false)
 const [error, setError] = useState(false)
async function handleFormSubmit(ev){
ev.preventDefault();
setCreatingUser(true)
setError(false)
setUserCreated(false)

const response = await fetch('/api/register', {
    method: 'POST',
body: JSON.stringify({email, password}),
headers: { 'Content-Type': 'application/json' },
})
if(response.ok){
  setUserCreated(true)
}else {
  setError(true)
}
setCreatingUser(false)



 }
  return (
    <section className="mt-8 bg-orange-300 rounded-full">
      <h1 className="text-center text-primary text-4xl mb-4">
        Register
      </h1>
     {userCreated &&(
      <div className="m-4 ">
        user created. now you can <Link className="underline" href={'/Login'}>Login &raquo;</Link>
        
         </div>
     )}
      {error &&(
      <div className="m-4 text-red-500">
        error creating user
      </div>
     )}

      <form className="flex flex-col text-center gap-5 max-w-xs mx-auto p-3 " onSubmit={handleFormSubmit} >
        <input className="px-4 py-2  rounded-xl bg-gray-100 disabled:bg-red-400" type="email" placeholder="email" 
        value={email} onChange={ev => setEmail(ev.target.value)} disabled={creatingUser}
         />
        <input className="px-4 py-2 rounded-xl bg-gray-100 disabled:bg-red-400" type="password" placeholder="password" 
        value={password} onChange={ev => setPassword(ev.target.value)} disabled={creatingUser}
               />
        <button className="px-3 py-1 bg-blue-300 relative left-[35%] rounded-2xl w-[90px] disabled:bg-blue-800" type="submit" 
        disabled={creatingUser} >
          Register
        </button >
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button onClick={()=> signIn('google', {callbackUrl: '/'})}
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