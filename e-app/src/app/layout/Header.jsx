import Link from "next/link";


export default function Header() {
  return (
   <>
<nav className="rounded-xl bg-gray-200 py-6 px-4 mt-3 bg-transparent
shadow-2xl">
  <div className="flex justify-evenly text-ceter text-xl text-">

  <Link href="/">
    Home
  </Link>
  <Link href="/Menu">
   About
  </Link>
  <Link href="/contact">
   Contact
  </Link>
  <Link href="/Login" className=" shadow-2xl  rounded-lg 
  text-red-500 ">
   Login
  </Link>
  <Link href="/register" className=" shadow-2xl  rounded-lg 
  text-blue-500 " >
   Register
  </Link>
  
  </div>
</nav>
  </>
  );
}
