'use client'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
export default function Page() {
  useEffect(()=>{
    AOS.init();
  },[])
  return ( 
    <div className='bg-white min-h-screen md:min-h-[82vh] p-10'>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10'>
            <p className='w-full md:w-[60%] text-lg tracking-wide selection:text-yellow-500 selection:bg-black '  data-aos="fade-right" data-aos-duration="1000"> &quot; Pollution is one of the biggest challenges facing the world today. It refers to the contamination of the natural environment with harmful substances, often caused by human activities. Air pollution, water pollution, and soil pollution are the most common types, each having severe consequences for the planet and all living beings. Industrial emissions, vehicle exhaust, and plastic waste contribute to the degradation of ecosystems, the rise in global temperatures, and </p>
            <video autoPlay loop controls className='w-full md:w-[40%]  h-fit'  data-aos="fade-left" data-aos-duration="1000">
                <source src='/WhatsApp Video 2024-09-29 at 14.13.19_8dba27c7.mp4' />
            </video>
        </div>
    </div>
  )
}
