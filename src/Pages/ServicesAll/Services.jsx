import React from 'react';
import ServicesAllTemplate from './ServicesAllTemplate';
import { PhotoProvider } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
  const services = useLoaderData()

  return (
    <div className='bg-[#fff]'>
    <div className='xl:w-[1200px] mx-auto w-[95%]'>
      <div className='w-[100%]'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-2'>
          <PhotoProvider>          {
            services.map(item => <ServicesAllTemplate key={item._id} item={item} />)
          }
          </PhotoProvider>

        </div>
      </div>
    </div>
  </div>
  );
};

export default Services;