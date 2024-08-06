"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function loginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingInProgress, setLoggingInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoggingInProgress(true);

    const result = await signIn('credentials', { email, password, callbackUrl: '/' });
    if (!result.error) {
      // Redirect or handle successful login
    } else {
      // Handle error
      console.error(result.error);
    }
    setLoggingInProgress(false);
  }

  return (
    <section>
      <div className="absolute top-[25.5%] left-[16%] rounded-2xl">
        <Image src={'/boba2.png'} alt={''} width={480} height={460} className="rounded-2xl" />
      </div>

      <div className="bg-orange-300 p-2 shadow-2xl rounded-2xl absolute top-[25.5%] left-[50%] w-[500px]">
        <h1 className="text-center text-primary text-4xl mb-4 font-serif font-bold">Login</h1>

        <form className="flex flex-col text-center gap-5 max-w-xs mx-auto p-3" onSubmit={handleFormSubmit}>
          <input
            className="px-4 py-2 rounded-xl bg-gray-100 disabled:bg-red-400"
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            disabled={loggingInProgress}
          />
          <input
            className="px-4 py-2 rounded-xl bg-gray-100 disabled:bg-red-400"
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            disabled={loggingInProgress}
          />
          <button
            className="px-3 py-1 bg-blue-300 relative left-[35%] rounded-2xl w-[90px] disabled:bg-blue-800"
            type="submit"
            disabled={loggingInProgress}
          >
            Login
          </button>
          <div className="my-4 text-center text-gray-500">or login with provider</div>
          <button
            type="button"
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="flex gap-4 justify-center bg-white rounded-2xl p-2"
          >
            <Image src={'/google.png'} alt={''} width={24} height={24} />
            Login with google
          </button>
          <div className="text-center my-4 text-gray-500 border-t pt-4">
            already have an account?{' '}
            <Link className="underline" href={'/Register'}>Register &raquo;</Link>
          </div>
        </form>
      </div>
    </section>
  );
}