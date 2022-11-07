import React from 'react';
import b1 from '../.../../../../images/1.jpg';
import b2 from '../.../../../../images/2.jpg';
import b3 from '../.../../../../images/3.jpg';

const HelthCose = () => {
  return (
    <div className='py-14'>
      <div className='xl:w-[1200px] mx-auto w-[95%]'>
        <div className='text-center'>
          <div>
            <h2 className='text-4xl text-black font-bold pb-7'>Why need health coach for fitness</h2>
            <p className='text-base text-black mb-11'>Our fitness coaches can enable you to meet your wellness objectives.  They can turn into your instructor, your helper, your <br /> mentor and your companion. Our fitness coaches are degreed and confirmed by a certify wellness association.</p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <img className='w-full' src={b1} alt="b1" />
          <img className='w-full' src={b2} alt="b1" />
          <img className='w-full' src={b3} alt="b1" />
        </div>
      </div>
    </div>
  );
};

export default HelthCose;