import React from 'react';


const Works = () => {
  return (
    <div  name="work" className="bg-gray-900 text-gray-100">
    <div className="max-w-screen-lg mx-auto py-16">
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-cyan-500 tracking-wide uppercase'>
            Projects
          </h2>
          <p className='mt-2 mb-8  font-semibold tracking-tight sm:text-base'>
            Check out some of the exciting projects I have developed
          </p>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
  <div className='bg-gray-800 bg-opacity-50 rounded-lg shadow-xl' style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='px-4 py-6'>
      <h3 className='text-lg font-medium text-white'>Fraud Detection System</h3>
      <p className='mt-2 text-sm text-gray-400'>
      Credit card fraud analyzer developed using Python and machine learning concepts, tested over real and synthetic data.
      </p>
    </div>
    <div className='px-4 py-3 bg-gray-900'>
      <a href='https://github.com/monikagadage/Credit-Card-Fraud-Detection' className='ml-4 text-base font-medium text-cyan-500 hover:text-cyan-400'>
        Code
      </a>
    </div>
  </div>
  <div className='bg-gray-800 bg-opacity-50 rounded-lg shadow-xl' style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='px-4 py-6'>
      <h3 className='text-lg font-medium text-white'>AI for Game</h3>
      <p className='mt-2 text-sm text-gray-400'>
        Automated player for challenging deduction board game using Java and Linux.
      </p>
    </div>
    <div className='px-4 py-3 bg-gray-900'>
      <a href='https://github.com/monikagadage/Loot-of-Lima-AI-Player' className='ml-4 text-base font-medium text-cyan-500 hover:text-cyan-400'>
        Code
      </a>
    </div>
  </div>
  <div className='bg-gray-800 bg-opacity-50 rounded-lg shadow-xl' style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='px-4 py-6'>
      <h3 className='text-lg font-medium text-white'>Shopping Application</h3>
      <p className='mt-2 text-sm text-gray-400'>
        AAn Android application for sellers and buyers developed using Flutter and Firebase, along with chatbot functionality.
      </p>
    </div>
    <div className='px-4 py-3 bg-gray-900'>
      <a href='https://github.com/monikagadage/CSCI567-ShopPe' className='ml-4 text-base font-medium text-cyan-500 hover:text-cyan-400'>
        Code
      </a>
    </div>
    </div>
    <div className='bg-gray-800 bg-opacity-50 rounded-lg shadow-xl' style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='px-4 py-6'>
      <h3 className='text-lg font-medium text-white'>Gold Chase Game</h3>
      <p className='mt-2 text-sm text-gray-400'>
      A multiplayer, remotely accessible online game developed using C++ and operating system concepts.
      </p>
    </div>
    <div className='px-4 py-3 bg-gray-900'>
      <a href='/https://github.com/monikagadage/GoldChase-Game' className='ml-4 text-base font-medium text-cyan-500 hover:text-cyan-400'>
        Code
      </a>
    </div>
  </div>
  <div className='bg-gray-800 bg-opacity-50 rounded-lg shadow-xl' style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='px-4 py-6'>
      <h3 className='text-lg font-medium text-white'>Covid 19 Prediction</h3>
      <p className='mt-2 text-sm text-gray-400'>
        A herd immunity predictor using ML algorithms, Prophet model, and ARIMA model developed in Python.
      </p>
    </div>
    <div className='px-4 py-3 bg-gray-900'>
      <a href='https://github.com/monikagadage/covid19-herdImmunity' className='ml-4 text-base font-medium text-cyan-500 hover:text-cyan-400'>
        Code
      </a>
    </div>
  </div>
  <div className='bg-gray-800 bg-opacity-50 rounded-lg shadow-xl' style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='px-4 py-6'>
      <h3 className='text-lg font-medium text-white'>Color Map Alogirthm</h3>
      <p className='mt-2 text-sm text-gray-400'>
          A GUI showcasing color map theory used in a Sudoku game, developed in C++ and Ruby.
      </p>
    </div>
    <div className='px-4 py-3 bg-gray-900'>
      <a href='https://github.com/monikagadage/ColorMap-Alogorithm' className='ml-4 text-base font-medium text-cyan-500 hover:text-cyan-400'>
        Code
      </a>
    </div>
  </div>
    </div>
    </div>
    </div>

  );
};

export default Works;
