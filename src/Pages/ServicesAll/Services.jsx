import React, { useContext } from 'react';
import ServicesAllTemplate from './ServicesAllTemplate';
import { PhotoProvider } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import useHooks from '../../component/Sheard/Hooks/useHooks';
import { AuthContext } from '../../context/FitnessContext/ContextProvider';

const Services = () => {
  const { loading } = useContext(AuthContext)
  useHooks('Service');
  const services = useLoaderData();

  if (loading) {
    return <div className='text-black text-center'><img className='w-[300px] mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" /></div>
  }

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