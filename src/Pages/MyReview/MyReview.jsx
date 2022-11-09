import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/FitnessContext/ContextProvider';
import TableReview from './TableReview';

const MyReview = () => {
  const {user} = useContext(AuthContext);
  const [reviwes, setReviwes] = useState([])
  // const [refresh,setRefresh] = useState(false)
  console.log(reviwes);
  useEffect(() => {
    fetch(`http://localhost:4000/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // setRefresh(!refresh)
        setReviwes(data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email])
  console.log(user?.email);
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
              reviwes.map(myreview => <TableReview key={myreview._id} myreview={myreview} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;