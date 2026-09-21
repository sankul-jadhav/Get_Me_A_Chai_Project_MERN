"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  
  return (
    <nav className='bg-blue-900 text-white flex justify-between px-4 md:h-16 items-center flex-col md:flex-row pb-3 md:pb-0'>
      <Link href={"/"} className="logo font-bold text-lg flex justify-center items-center gap-2">
        <img className='invertImg' width={44} src="tea.gif" alt="" />
        <span className='text-4xl md:text-xl my-3 md:my-0 bg-linear-to-br from-pink-600 to-blue-500 hover:bg-linear-to-bl  bg-clip-text text-transparent transition-all duration-300'>GetMeChai!</span>
      </Link>
      <div className='relative flex flex-col gap-4 md:flex-row'>
        {session &&
          <>
            <button onClick={() => { setShowdropdown(!showdropdown) }}
              onBlur={() => {
                setTimeout(() => {
                  setShowdropdown(false)
                }, 300);
              }}
              id="dropdownDefaultButton" data-dropdown-toggle="dropdown" 
              className=" rounded-lg text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mx-4 inline-flex items-center justify-center bg-brand box-border border border-transparent s font-medium leading-5 rounded-base text-sm px-4 py-2.5 " type="button">
              Welcome {session.user.email}
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
            </button>


            <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[142px] bg-white divide-y divide-gray-100 dark:bg-gray-700 rounded-lg border-default-medium  shadow w-44`}>
              <ul className=" text-gray-700  dark:text-gray-200 p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/dashboard" className="hover:bg-gray-600 inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="hover:bg-gray-600 inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
                </li>
                <li>
                  <Link onClick={() => signOut()} href="#" className="hover:bg-gray-600 inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
                </li>
              </ul>
            </div>
          </>
        }

        {session &&
          <button className='rounded-lg text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-4 py-2.5 text-center leading-5' onClick={() => { signOut() }} >Logout</button>
        }
        {!session &&
          <Link href={"/login"}>
            <button className='rounded-lg text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-4 py-2.5 text-center leading-5' >Login</button>
          </Link>
        }

      </div>
    </nav>
  )
}

export default Navbar
