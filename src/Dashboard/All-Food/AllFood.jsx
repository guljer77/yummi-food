import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

function AllFood() {
  const { data: foods = [], refetch } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/foods");
      return res.data;
    },
  });
  const foodDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/foods/${id}`);
        refetch();
        toast.warning("Foods Item Deleted");
      }
    });
  };
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
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foods?.reverse().map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.price}</td>
                <td>
                  <img src={item?.img} alt="" className="w-[50px]" />
                </td>
                <td className="flex items-center gap-2">
                  <Link className="w-[35px] h-[35px] bg-green-500 rounded-sm text-white flex items-center justify-center text-[18px]">
                    <FaRegEye />
                  </Link>
                  <Link
                    to={`/dashboard/edit-food/${item?._id}`}
                    className="w-[35px] h-[35px] bg-green-500 rounded-sm text-white flex items-center justify-center text-[18px]"
                  >
                    <FaPen />
                  </Link>
                  <span
                    onClick={() => foodDelete(item?._id)}
                    className="w-[35px] h-[35px] bg-red-600 rounded-sm text-white flex items-center justify-center text-[18px]"
                  >
                    <FaTrash />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllFood;
