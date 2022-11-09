import React from 'react';
import { Link } from 'react-router-dom';

const TableReview = ({ myreview, handleDelete }) => {

  const { _id, serviceName, textarea } = myreview
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
          <button>
            <Link to={`/reviews/${_id}`}>Edit</Link>
          </button>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </td>
      </tr>

    </>
  );
};

export default TableReview;