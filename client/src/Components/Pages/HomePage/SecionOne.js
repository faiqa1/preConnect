import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Bimage from '../../../Images/bannerImage.png'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function SecionOne() {
  return (
    <>
    <div className='bg-blue h-[430px] w-full'>
      <div className='wrapper'>
     <h1 className='text-white text-4xl w-[40%] pt-8 pb-2 ml-[5%] font-bold'>Ignite Your Tech Career Today</h1>
     <p className='text-white text-2xl w-[50%]  pt-8 pb-2 ml-[5%] '>Join us and ignite your tech journey
     to reach new heights of success.Preconnect will help you to
     reach your potentials.</p>
     <button className='text-white text-lg ml-[5%] font-bold pt-10 underline decoration-[#002746] hover:decoration-[#fff]'>
      <Link to ='/signup'>
      Get Started
      </Link>
      <FaArrowRight className='mt-[-1.4rem] ml-[8rem]'/>
      </button>
     </div>
    <img className='float-right mt-[-19%] mr-[3%] w-[34%]' src={Bimage}/>
    </div>
    {/* <div  className="relative bg-black text-white">
       <div className="absolute top-0 left-0 w-[100%] overflow-hidden">
                <svg data-name="Layer 1"
                 xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fil-blue"></path>
                </svg>
             
            </div>
    </div> */}
    </>
  )
}
