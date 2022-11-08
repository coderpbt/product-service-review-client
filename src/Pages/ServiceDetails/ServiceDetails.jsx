import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const servicesData = useLoaderData()
  return (
    <div className='bg-[#1C2B35]'>
      <div className='xl:w-[800px] mx-auto w-[95%]'>
        <div className="card card-compact shadow-xl pt-9">
          <div className='flex justify-between items-center'>
            <h2 className="card-title text-lg p-3 text-left text-white">{servicesData.title}</h2>
          </div>
          <figure><img src={servicesData.image_url} alt="logos" /></figure>
          <div className="card-body">

            <div className='flex justify-between'>
              <h2 className="card-title text-base text-white">Course Cost : $ {servicesData.price} </h2>
            </div>
            <p className="text-base text-justify text-[#309255]">
              {servicesData.details}
            </p>
            {/* <div className="card-actions justify-end">
              <button onClick={() => handlerAddToCarts(coursedata._id)} className="btn btn-primary">
                <Link className='flex items-center' to='/checkout'> Get premium access <FaArrowRight className='ml-2 pl-1' /></Link>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;