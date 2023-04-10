import React, { useRef, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const message = "Hi! I am a Software Developer";
    let i = 0;
    let timerId = null;
    const typing = () => {
      if (i < message.length+1) {
        textRef.current.innerText = message.slice(0, i);
        i++;
        timerId = setTimeout(typing, 50);
      }
    };
    typing();

    return () => {
      clearTimeout(timerId);
    }
  }, []);

  return (
    // <div className="bg-gray-900 text-gray-100">
    // <div className="max-w-screen-md mx-auto py-16">
    <div name="home" className="h-screen w-full bg-gray-900">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        <div className="flex flex-col justify-center h-full md:w-1/2 ">
          <h2 ref={textRef} className="text-4xl sm:text-7xl font-bold text-white mb-6"></h2>
          <p className="text-gray-500 mb-8 max-w-md">
          With a Master's degree in CS, 3+ years of experience as a Full Stack Software Developer and a passion for exploring new technologies, 
          I'm dedicated to pushing the boundaries of technology and driving innovation forward.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={me}  
            alt="my profile"
            className="rounded-full mx-auto w-1/2 md:w-4/5 lg:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
