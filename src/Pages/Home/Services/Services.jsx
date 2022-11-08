import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesTemplate from './ServicesTemplate';

import { PhotoProvider } from 'react-photo-view';

const Services = () => {
  const [services, setServices] = useState([]);


  console.log(services);
  useEffect(() => {
    fetch('http://localhost:4000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='bg-[#fff]'>
      <div className='xl:w-[1200px] mx-auto w-[95%]'>
        <div className='w-[100%]'>
          <div className='text-center'>
            <h2 className='text-4xl text-black font-bold pb-7'>Our Services</h2>
            <p className='text-base text-black mb-3'>Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br /> est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-2'>
           <PhotoProvider>
            {
              services.map(item => <ServicesTemplate key={item._id} item={item} />)
            }
            </PhotoProvider>
          </div>
          <div className="card-actions justify-center py-12">
          <button className="btn btn-primary">
           <Link to='/services'> See All</Link>
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Services;