import React from 'react';

import { useContext } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/FitnessContext/ContextProvider';

const Comment = () => {
  const { user } = useContext(AuthContext)
  const reviewId = useLoaderData()
  const { _id, title } = reviewId;
  const location = useLocation();



  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const textarea = form.textarea.value;
    const email = form.email.value;
    const time = new Date().getTime() 
    console.log(email, name, textarea)

    const reviwes = {
      reviewIds: _id,
      serviceName: title,
      customer: name,
      email,
      textarea,
      user: user?.photoURL,
      uid : user?.uid,
      time,
    }

    fetch(`https://b6a11-service-review-server-side-coderpbt.vercel.app/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviwes)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Review Add successfully')
          form.reset();

        }
      })
      .catch(er => console.error(er));


  }

  return (
    <div className="hero">
      <div className="hero-content w-[100%] flex-col">
        <div className="card flex-shrink-0 w-full lg:max-w-full max-w-[80%] shadow-2xl bg-base-100">
          {
            user?.uid ?
              <>
                <div className="card-body w-full">
                  <form onSubmit={handleOnSubmit}>
                    <div className="flex w-full justify-between flex-wrap">
                      <div className="form-control w-[98%] mr-2">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Full Name" className="input box-border input-bordered" />
                      </div>
                      <div className="form-control w-[98%] ml-2">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter Email" className="input box-border input-bordered" />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Review</span>
                      </label>
                      <textarea name='textarea' className="textarea textarea-primary box-border" placeholder="Write Review"></textarea>
                    </div>

                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Revied</button>
                    </div>
                  </form>
                </div>
              </>
              :
              <>
                <h2 className='text-xl text-black font-semibold mb-4'>Please <Link state={{ from: location }} replace className='text-blue-700 underline' to='/login'> login </Link> 
                  to add a review</h2>
              </>
          }


        </div>
      </div>
    </div>
  );
};

export default Comment;