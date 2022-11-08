// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { AuthContext } from '../../../ContextProvider/ContextProvider';
import { useLoaderData } from 'react-router-dom';

const Comment = () => {

  const reviewId = useLoaderData()
  const {_id, title} = reviewId
  // const {createUser, updateProfileName} = useContext(AuthContext)
  // const navigate = useNavigate();


  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const textarea = form.textarea.value;
    const email = form.email.value;
    console.log(email,name,textarea)

    const reviwes = {
      Review: _id,
      serviceName: title,
      customer: name,
      email,
      textarea
  }

    fetch(`http://localhost:4000/reviews`,{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(reviwes)
    })
    .then(res => res.json())
      .then(data => {
          console.log(data)
          if(data.acknowledged){
              alert('Order placed successfully')
              form.reset();
              
          }
      })
      .catch(er => console.error(er));

    // createUser(email,password)
    // .then((result) => {
    //   const user = result.user;
    //   handleUpdateNameProfile(name, photoURL)
    //   console.log(user)
    //   form.reset();
    //   toast.success('Registion SuccesFull')
    //   navigate('/login')
    // })
    // .catch((error) => {
    //   console.error(error)
    //   const errorMessage = error.message
    //   toast.warning(`${errorMessage}`)
    // })

  }

  // const handleUpdateNameProfile = (name, photoURL) => {
  //   const profile = {
  //     displayName : name,
  //     photoURL : photoURL
  //   }
  //   updateProfileName(profile)
  //   .then(() => {})
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }


  return (
    <div className="hero">
      <div className="hero-content w-[100%] flex-col">
        <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100">
          <div className="card-body w-full">
            <form onSubmit={handleOnSubmit}>
             <div className="flex w-full justify-between">
             <div className="form-control w-[98%] mr-2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered" />
              </div>
              <div className="form-control w-[98%] ml-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" />
              </div>
             </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <textarea name='textarea' className="textarea textarea-primary" placeholder="Write Review"></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Revied</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;