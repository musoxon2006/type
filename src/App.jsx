import React, { useState } from 'react'
import Logo from './images/Logo.png'
import firstWatch from './images/Watch_1.png'
import secondWatch from './images/Watch_2.png'
import thirdWatch from './images/Watch_3.png'
import fourth from './images/Watch_4.png'
import shadow from './images/Shadow.png'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const App = () => {
  const watches = [firstWatch, secondWatch, thirdWatch, fourth];
  const Bg = [
    'bg-gradient-to-r from-[#F4A764] to-[#FFDEC2]',
    'bg-gradient-to-r from-[#ADB0B0] to-[#E1E1E1]',
    'bg-gradient-to-r from-[#30A357] to-[#75E39A]',
    'bg-gradient-to-r from-[#F24F4F] to-[#FFA895]'
  ];

  const [WatchIndex, setWatchIndex] = useState(0);
  const [Background, setBackground] = useState(Bg[0]);

  const Watch = () => {
    if (WatchIndex === 0) {
      setWatchIndex(watches.length - 1);
      setBackground(Bg[watches.length - 1]);
    } else {
      setWatchIndex(WatchIndex - 1);
      setBackground(Bg[WatchIndex - 1]);
    }
  };

  const Next = () => {
    if (WatchIndex === watches.length - 1) {
      setWatchIndex(0);
      setBackground(Bg[0]);
    } else {
      setWatchIndex(WatchIndex + 1);
      setBackground(Bg[WatchIndex + 1]);
    }
  };

  return (
    <div className='w-screen h-screen font-sofia'>
      <div className={`w-full h-full p-8 ${Background}`}>

        <nav className='w-full h-28 flex justify-between items-center px-20'>
          <div>
            <img src={Logo} alt="" className='w-[123px] cursor-pointer' />
          </div>
          <div className='flex gap-24 items-center'>
            <ul className='text-lg flex gap-16'>
              <li className='hover:bg-black hover:text-white hover:rounded-3xl hover:border p-2'>Shop</li>
              <li>Brand</li>
              <li>Contact Us</li>
            </ul>
            <button className=''>Sign Up</button>
          </div>
        </nav>

        <div className='h-[80vh] flex p-12'>
          <div className='w-2/4 text-white px-20 flex flex-col justify-evenly'>
            <div>
              <h1 className='text-4xl font-extrabold'>Exquisite Watches</h1>
              <h2 className='text-3xl font-extrabold'>Choose Luxury, <span className='text-black'>Choose Us</span></h2>
            </div>
            <p className='text-4xl  text-black'>Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch</p>
            <h1 className='text-3xl '>$430.00</h1>
            <div className='flex gap-5 mb-8'>
              <FaFacebookF className='w-10 h-10 p-2 border rounded-full border-white cursor-pointer ' />
              <IoLogoTwitter className='w-10 h-10 p-2 border rounded-full border-white cursor-pointer' />
              <FaYoutube className='w-10 h-10 p-2 border rounded-full border-white cursor-pointer' />
            </div>
          </div>

          <div className='w-2/4 relative flex flex-col items-center py-20'>
            <img src={watches[WatchIndex]} alt="" className='w-[360px]' />
            <img src={shadow} alt="" />
            <FaChevronLeft onClick={Watch} className='w-12 h-12 p-3 absolute top-[43%] left-28 text-white border rounded-full border-white cursor-pointer hover:bg-white hover:text-black  duration-300 ease-in-out' />
            <FaChevronRight onClick={Next} className='w-12 h-12 p-3 absolute  top-[43%] right-28 text-white border rounded-full border-white cursor-pointer hover:bg-white hover:text-black  duration-300 ease-in-out' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
