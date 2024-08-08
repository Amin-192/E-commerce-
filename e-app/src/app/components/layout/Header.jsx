'use client';
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  console.log('Session status:', status);
  console.log('Session data:', session);
 
  const userData = session?.user;
  let userName = userData?.name || userData?.email;
  if(userName && userName.includes(' ')){
    userName = userName.split(' ')[0];
  }
  return (
    <nav className="bg-white rounded-xl py-2 px-3 mt-3 shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div>
          <Link href="/">
            <Image src={'/logo3.png'} alt={'Logo'} width={70} height={60} />
          </Link>
        </div>
        
        <div className="flex items-center flex-grow justify-center">
          <input
            type="search"
            placeholder="Search products, brands, category..."
            className="border-2 border-orange-300 rounded-2xl w-[300px] h-[50px] px-2"
          />
          <button className="bg-orange-300 px-3 rounded-lg h-[40px] flex items-center ml-2">
            Search
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          {status === 'authenticated' && (
            <>
          <Link className="p-2 relative left-7 font-bold font-serif " href={'/profile'}>Hello, {userName}</Link>
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-3 rounded-lg h-[50px] ml-4 relative left-[6%]"
            >
              Logout
            </button>
            </>

          )}
        </div>
        
        <div className="flex items-center gap-4">
          {status !== 'authenticated' && (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1">
                Account
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link href="/Login" className="shadow-2xl rounded-lg text-red-500">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/Register" className="shadow-2xl rounded-lg text-blue-500">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className="relative">
            <button className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </button>
            <span className="absolute left-[70%] top-0 right-0 inline-flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-white bg-red-600 rounded-full">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}