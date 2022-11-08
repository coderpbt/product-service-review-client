import React, { useEffect, useState } from 'react';
import ServicesAllTemplate from './ServicesAllTemplate';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/servicesall')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='bg-[#fff]'>
    <div className='xl:w-[1200px] mx-auto w-[95%]'>
      <div className='w-[100%]'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-2'>

          {
            services.map(item => <ServicesAllTemplate key={item._id} item={item} />)
          }
        </div>
      </div>
    </div>
  </div>
  );
};

export default Services;