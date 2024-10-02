'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import FloatMinue from './FloatMinue';


export default function Navbar() {
    const[open,setOpen]=useState(false)
  return (
    <nav className='p-7 px-16 flex justify-between items-center bg:blur-md'>
        <div className=' '>
            <Image src={'/WhatsApp Image 2024-09-29 at 09.25.38_8d9c36d1.jpg'} width={80} height={80} alt='SDG edulab' className='rounded-full hover:scale-110 w-[80px] h-[80px]'/>
        </div>
        <div className=' gap-5 px-7 py-3 bg-white rounded-2xl hidden md:flex'>
            <Link href='/' className=' text-lg hover:text-[#FF5F00] border-b-2 border-b-white  hover:border-b-[#FF5F00] hover:scale-105'>Home</Link>
            <Link href='#' className='text-lg hover:text-[#FF5F00] border-b-2 border-b-white  hover:border-b-[#FF5F00] hover:scale-105'>Community</Link>
            <Link href='#' className='text-lg hover:text-[#FF5F00] border-b-2 border-b-white  hover:border-b-[#FF5F00] hover:scale-105'>New & Events</Link>
            <Link href='#' className='text-lg hover:text-[#FF5F00] border-b-2 border-b-white  hover:border-b-[#FF5F00] hover:scale-105'>Contact US</Link>
        </div>

        <div className='relative md:hidden'>
            <FaBars className=' text-3xl font-semibold hover:scale-110 hover:text-[#FF5F00] cursor-pointer' onClick={()=>setOpen(!open)}/>
                <FloatMinue open={open}/>
        </div>
    </nav>
  )
}
