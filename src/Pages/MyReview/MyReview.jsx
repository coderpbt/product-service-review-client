import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useHooks from '../../component/Sheard/Hooks/useHooks';
import { AuthContext } from '../../context/FitnessContext/ContextProvider';
import TableReview from './TableReview';

const MyReview = () => {
  useHooks('My Review');
  const {user} = useContext(AuthContext);
  const [reviwes, setReviwes] = useState([])
  const [refresh,setRefresh] = useState(false)
  const navigate = useNavigate();
  // console.log(reviwes);
  useEffect(() => {
    fetch(`http://localhost:4000/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setRefresh(!refresh)
        setReviwes(data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email])
 
  const handleDelete = id =>{
        fetch(`http://localhost:4000/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0){
                toast.success('deleted successfully')
                const remaining = reviwes.filter(odr => odr._id !== id);
                setReviwes(remaining);
            }
        })
   
}


const handleEdit = (id) => {
  navigate(`/reviews/edit/${id}`)
}


  return (
    <div className='xl:w-[1200px] mx-auto w-[95%]'>
      <div className="overflow-x-auto w-full py-14">
        <table className="table w-full">

          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service Name</th>
              <th>Review</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
              reviwes.map(myreview =>
                <>
                {
                  myreview.reviewIds ?
                  <>
                     <TableReview 
                      key={myreview._id}
                      myreview={myreview} 
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                      />
                  </> 

                  :
                  <>
                    <p className='text-black'>nai</p>
                  </>
                }
             

              </>
               )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;