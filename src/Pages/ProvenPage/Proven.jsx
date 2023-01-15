import React from 'react';
import women from '../../images/tt1.jpg'
import cleint1 from '../../images/1.jpeg'
import cleint2 from '../../images/11.jpg'
import cleint3 from '../../images/12.jpg'

const Proven = () => {
  return (
    <div className='py-12'>
      <div className='xl:w-[1200px] mx-auto w-[95%]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div className='images'>
            <img className='w-full' src={women} alt="women" />
          </div>
          <div>
            <h2 className='text-4xl font-bold mb-4'>Proven methods, adapted to the individual.</h2>
            <p className='text-base'>Step foot in an Ultimate Performance gym, or work with us online and your whole perception of personal training will change.

            We eliminate self-imposed barriers, to help you achieve a level of health and wellbeing you never thought possible, no matter your starting point.

            We are your partner and coach, supporting every aspect of training and nutrition, and have guided thousands of clients globally to life-changing results.</p>
          </div>
        </div>

        <div className='py-11'>
            <h2 className='text-4xl font-bold mb-7'>More client results</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
              <div> <img className='w-full' src={cleint1} alt="women" /></div>
              <div> <img className='w-full' src={cleint2} alt="women" /></div>
              <div> <img className='w-full' src={cleint3} alt="women" /></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Proven;