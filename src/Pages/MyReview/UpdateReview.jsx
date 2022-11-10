import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const UpdateReview = () => {
  const router = useParams();
  const [reviews, setReviews] = useState({});
  const { id } = router;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) =>console.log(err));
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviews = {
      name: e.target.name.value,
      review: e.target.review.value,
      
    }

    console.log(reviews);

    fetch(`http://localhost:4000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(reviews)
    }).then(res => res.json())
    .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Review Update Seccesful')
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='py-6'>
      <div className='xl:w-[700px] mx-auto w-[75%]'>
         <form onSubmit={handleSubmit}>
        <input className='border mb-4 w-full p-3'  type="text" defaultValue={reviews?.name} name="name" placeholder='name' id="" />
        <br />
        <input className='border mb-4 w-full p-3' type="text" defaultValue={reviews?.reviews} name="review" placeholder='review' id="" />
        <br />
        <button className="btn btn-primary">Update</button>
      </form>
      </div>
    </div>
  );
};

export default UpdateReview;