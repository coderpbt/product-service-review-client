import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesAllTemplate = ({item}) => {
  const {image_url,title,price,details,_id} = item;
  const getcoursesId = useNavigate();

  const handlerAddToCart = (_id) => {
    getcoursesId(`/courses/${_id}`)
  }
  return (
    <div className="card card-compact shadow-xl my-12">
    <figure><img className='w-full h-80 object-cover' src={image_url} alt="logos" /></figure>
    <div className="card-body">
      <h2 className="card-title text-lg text-left text-black">{title}</h2>
      <div className='flex justify-between'>
      <h2 className="card-title text-base text-black"> {details ? details.slice(0, 100) + '...' : ''} </h2>
      </div>
      <h2 className="card-title text-base text-black">$ {price} </h2>
      <div className="card-actions justify-end">
          <button onClick={() => handlerAddToCart(_id)} className="btn btn-primary">
           Details
        </button>
      </div>
    </div>
  </div>
  );
};

export default ServicesAllTemplate;