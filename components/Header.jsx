import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className=' w-full bg-slate-300 h-20 shadow-lg'>
      <div className='w-4/5 h-full mx-auto flex justify-between items-center'>
        <ul className='flex'>
          <li>
            <Link href="/">
              <a className='header-link'>Home</a>
            </Link>
          </li>
          <li >
            <Link href="/Products">
              <a className='header-link mx-5'>Товары</a>
            </Link>
          </li>
        </ul>

        <button type="button" className='inline-block px-5 py-1 border-2 border-gray-800 text-gray-800 font-medium text-lg leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Админ</button>

      </div>
    </div>
  )
}

export default Header