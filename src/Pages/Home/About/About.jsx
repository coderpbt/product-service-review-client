import React from 'react';
import about from '../../../images/gallery-col-three-6.jpg'

const About = () => {
  return (
    <div className='py-14'>
      <div className='xl:w-[1200px] mx-auto w-[95%]'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 justify-center items-center'>
            <div>
              <h2 className='text-4xl text-black font-bold pb-7'>About Us</h2>
              <p className='text-base text-black mb-3'>Our fitness coaches can enable you to meet your wellness objectives. They can turn into your instructor, your helper, your mentor and your companion.</p>

              <p className='text-base text-black text-justify mb-10'>Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
              <div className="flex justify-start">
                    <button className="btn btn-outline btn-warning">Get appointment</button>
                </div>
            </div>
            <div>
                <img className='w-full' src={about} alt="ab" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;