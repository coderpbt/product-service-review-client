import React from 'react';

const TableReview = ({ myreview, handleDelete,handleEdit }) => {

  const { _id, serviceName, textarea,uid } = myreview
  console.log(myreview);
  return (
    <>
      {
        uid ?
        <>
             <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{serviceName}</div>
            </div>
          </div>
        </td>
        <td>
          {textarea}
        </td>
        <td>
          <button onClick={() => handleEdit(_id)}>
             Edit
          </button>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </td>
      </tr>
        </>
        :
        <>
          <p className='text-2xl text-black'>No reviews were added</p>
        </>
      }
   

    </>
  );
};

export default TableReview;