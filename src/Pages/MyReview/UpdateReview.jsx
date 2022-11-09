import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
  const dataUpdate = useLoaderData()
  // const [user, setUser] = useState(dataUpdate)
  const [user, setUser] = useState(dataUpdate)
  const handleUpdateUser = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/reviews/${dataUpdate._id}`, {
      method : 'PUT',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount > 0) {
        alert('update succfull')
      }
      console.log(data);
    })
  }

  const handleInputChange = e => {
    const filedBluer = e.target.name
    const value = e.target.value
    
    const newUser = {...user}
    newUser[filedBluer] = value
    setUser(newUser)
   
  }

  return (
    <div>
         <form onSubmit={handleUpdateUser}>
        <input onChange={handleInputChange} type="text" defaultValue={dataUpdate.name} name="name" placeholder='name' id="" />
        <br />
        <input onChange={handleInputChange} type="email" defaultValue={dataUpdate.email} name="email" placeholder='email' id="" />
        <br />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateReview;