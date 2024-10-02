'use client'
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
// ..
export default function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <div className=" flex flex-col justify-center items-center gap-40 min-h-screen md:min-h-[82vh]">
      <div className="relative space-x-4 ">
        <Link href={'#'} className=" group absolute bottom-0 right-[50%]  cursor-pointer overflow-hidden " data-aos="zoom-out-right" data-aos-duration="1000" data-aos-delay="100">
          <div className="bg-[#293A4C]  group-hover:p-5 w-[170px] group-hover:w-[300px] group-hover:bg-white transform origin-right h-36 p-8 px-10 text-center rounded-t-full rounded-bl-full  duration-500">
            <Image src={'/icon1.svg'} width={50} height={50} alt='solution' className="w-[50px] h-[50px] mx-auto group-hover:hidden"/>
            <h2 className="text-white text-xl group-hover:hidden">Solutions</h2>
            <p className=" hidden group-hover:block  text-[#293A4C] "> <span className="text-[#FF5F00]">Lorem ipsum,</span> dolor sit amet consectetur adipisicing elit. Voluptate quidem ut deleniti minus quasi dolorum, voluptates perspiciatis autem mollitia. </p>
          </div>
        </Link>
        <Link href={'#'} className=" group  cursor-pointer  absolute bottom-0 left-[50%] overflow-hidden" data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="bg-[#293A4C] w-[170px] group-hover:p-5   group-hover:bg-white group-hover:w-[320px] transform origin-left h-36 p-8 px-10 text-center rounded-t-full rounded-br-full  duration-500">
            <Image src={'/icon2.svg'} width={50} height={50} alt='solution' className="w-[50px] h-[50px] mx-auto group-hover:hidden"/>
            <h2 className="text-white text-xl group-hover:hidden">Types</h2>
            <p className=" hidden group-hover:block  text-[#293A4C]"><span className="text-[#FF5F00]">Lorem ipsum,</span>  dolor sit amet consectetur adipisicing elit. Voluptate quidem ut deleniti minus quasi dolorum, voluptates perspiciatis autem mollitia. </p>
          </div>
        </Link>
      </div>
      <div className="  relative space-x-4">
        <Link href={'#'} className=" group absolute bottom-0 right-[50%]  cursor-pointer overflow-hidden" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="500">
          <div className="bg-[#293A4C]  group-hover:p-5 w-[170px] group-hover:w-[300px] group-hover:bg-white transform origin-right h-36 p-8 px-10 text-center rounded-b-full rounded-tl-full  duration-500">
            <Image src={'/icon3.svg'} width={50} height={50} alt='solution' className="w-[50px] h-[50px] mx-auto group-hover:hidden"/>
            <h2 className="text-white text-xl group-hover:hidden">Resks</h2>
            <p className=" hidden group-hover:block   text-[#293A4C] "><span className="text-[#FF5F00]">Lorem ipsum,</span>  dolor sit amet consectetur adipisicing elit. Voluptate quidem ut deleniti minus quasi dolorum, voluptates perspiciatis autem mollitia. </p>
          </div>
        </Link>
        <Link href={'/polution'} className=" group  cursor-pointer absolute bottom-0 left-[50%] overflow-hidden" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="350">
          <div className="bg-[#293A4C] group-hover:p-5 w-[170px]  group-hover:bg-white group-hover:w-[300px] transform origin-left h-36 p-8 px-10 text-center rounded-b-full rounded-tr-full  duration-500">
            <Image src={'/icon1.svg'} width={50} height={50} alt='solution' className="w-[50px] h-[50px] mx-auto group-hover:hidden"/>
            <h2 className="text-white text-xl group-hover:hidden">pollution</h2>
            <p className=" hidden group-hover:block  text-[#293A4C]"><span className="text-[#FF5F00]">Pollution</span>  is the introduction of harmful substances into the environment causing negative impacts on living beings and ecosystems</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
