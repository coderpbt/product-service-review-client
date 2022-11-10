import React from 'react';

const TableReview = ({ myreview, handleDelete, handleEdit }) => {

  const { _id, serviceName, textarea } = myreview
  // console.log(myreview);
  return (
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
          <button onClick={() => handleEdit(_id)} className="btn btn-outline btn-primary mr-2">Edit</button>
          <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-secondary">Delete</button>

        </td>
      </tr>

    </>
  );
};

export default TableReview;