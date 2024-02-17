import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import homeVideo from "../assets/homeVideo.mp4"
const Hero = () => {
  return (
    <div>
        <div className="flex justify-center items-center relative max-w-screen">
          <video className="video opacity-80 w-full " autoPlay loop poster="https://24carrots.com/wp-content/uploads/2023/08/chef.png">
            <source src={homeVideo} type="video/mp4" />
          </video>
          <div className="flex flex-col justify-center font-playfair flex-wrap absolute z-3 font-semibold text-2xl text-white md:text-6xl lg:text-8xl opacity-100">
          <h2>Simply the Finest</h2>
            <AiOutlineDown className='m-auto relative -bottom-16 md:-bottom-36 lg:-bottom-48 xl:-bottom-64'/>
          </div>
        </div>
      </div>
  );
};

export default Hero;
