import React from 'react';

const TableReview = ({ myreview, handleDelete, handleUpdateReview,handeleNewUpdate }) => {

  const { _id, serviceName, textarea } = myreview
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
                <button onClick={() => handleUpdateReview(_id)}>
                  <label htmlFor="my-modal-6" className="btn">Edit</label>
                </button>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
          </>
          :
          <>
            <p>null</p>
          </>
      }

      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onClick={handeleNewUpdate}>
            <input type="text" name='name' placeholder="Type here" className="input mb-3 input-bordered input-secondary w-full max-w-xs" />
            <br />
            <input type="text" name='review' placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
            <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">Update</label>
          </div>
          </form>
         
        </div>
      </div>


    </>
  );
};

export default TableReview;