import Link from 'next/link'
import React from 'react'

interface props{
    open: boolean; 
 
}
export default function FloatMinue({open}:props) {
  return (
    <div className={`${open?'opacity-1 z-30':'-z-30 opacity-0'} gap-5 px-3 py-3 bg-white rounded-2xl absolute min-w-[220px] text-center top-14 -right-4 flex flex-col`}>
            <Link href='/' className=' text-lg hover:text-[#FF5F00] border-b-2 border-b-white  hover:border-b-[#FF5F00] hover:scale-105'>Home</Link>
            <Link href='#' className='text-lg hover:text-[#FF5F00] border-b-2 border-b-white  hover:border-b-[#FF5F00] hover:scale-105'>Community</Link>
            <Link href='#' className='text-lg hover:text-[#FF5F00] border-b-2 border-b-white  hover:border-b-[#FF5F00] hover:scale-105'>New & Events</Link>
            <Link href='#' className='text-lg hover:text-[#FF5F00] border-b-2 border-b-white  hover:border-b-[#FF5F00] hover:scale-105'>Contact US</Link>
            <div className='absolute -top-9 right-3 border-[19px] border-t-transparent border-l-transparent border-r-transparent border-b-white'></div>
        </div>
  )
}
