import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../../component/Sheard/Comment/Comment';
import cmt from '../../images/1.jpg'

const ServiceDetails = () => {
  const servicesData = useLoaderData()
  return (
    <div className='bg-[#fff]'>
      <div className='xl:w-[800px] mx-auto w-[95%]'>
        <div className="card card-compact shadow-xl pt-9">
          <div className='flex justify-between items-center'>
            <h2 className="card-title text-lg p-3 text-left text-black">{servicesData.title}</h2>
          </div>
          <figure><img src={servicesData.image_url} alt="logos" /></figure>
          <div className="card-body">

            <div className='flex justify-between'>
              <h2 className="card-title text-base text-black">Sevices Cost : $ {servicesData.price} </h2>
            </div>
            <p className="text-base text-justify text-black">
              {servicesData.details}
            </p>
            <div className='py-14'>
              <h2 className='text-3xl text-black mb-5'>Reviews</h2>
              <div className='flex border p-2 mb-5'>
                  <div className='mr-4'>
                    <img className='w-[100px]' src={cmt} alt="" />
                  </div>
                  <div>
                    <h2 className='text-black font-bold text-xl'>Jak Ma</h2>
                    <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                  </div>
              </div>


            </div>
            {/* <div className="card-actions justify-end">
              <button onClick={() => handlerAddToCarts(coursedata._id)} className="btn btn-primary">
                <Link className='flex items-center' to='/checkout'> Get premium access <FaArrowRight className='ml-2 pl-1' /></Link>
              </button>
            </div> */}
          </div>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;