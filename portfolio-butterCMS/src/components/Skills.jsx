import React from 'react';

const Skills = () => {
  return (
    <div  name="skills" className="bg-gray-900 text-gray-100">
      <div className="max-w-screen-lg mx-auto py-16">
      <div className='text-center'>
      <h2 className='text-3xl font-extrabold text-cyan-500 tracking-wide uppercase'>
           Skills
        </h2>
        <p className='mt-2 mb-8  font-semibold tracking-tight sm:text-base'>
        My expertise includes diving into and learning new things. Here is a list of few technologies I have worked on
        </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">C++</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">Java</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">Python</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">Linux</p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">HTML</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">Docker</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">Flutter</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">React</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-center">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
