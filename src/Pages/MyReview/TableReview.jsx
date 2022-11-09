import React from 'react';

const TableReview = ({ myreview }) => {

  const { serviceName, textarea } = myreview
  return (
    <>
    {
     myreview.email && myreview.uid ?
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
        <button>Edit</button>
        <button className="btn btn-ghost btn-xs">Delete</button>
      </td>
    </tr>
      </>
      :
      <>
      <p>null</p>
      </>
    }
    </>
  );
};

export default TableReview;