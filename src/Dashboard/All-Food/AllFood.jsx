import React from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaPen, FaTrash } from "react-icons/fa";

function AllFood() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4>All Food</h4>
        <Link
          to="/dashboard/add-food"
          className="px-5 py-2 bg-primary text-white rounded-sm"
        >
          Add Food
        </Link>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className="flex items-center gap-2">
                <Link className="w-[35px] h-[35px] bg-green-500 rounded-sm text-white flex items-center justify-center text-[18px]"><FaRegEye /></Link>
                <Link className="w-[35px] h-[35px] bg-green-500 rounded-sm text-white flex items-center justify-center text-[18px]"><FaPen /></Link>
                <span className="w-[35px] h-[35px] bg-red-600 rounded-sm text-white flex items-center justify-center text-[18px]"><FaTrash /></span>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllFood;
