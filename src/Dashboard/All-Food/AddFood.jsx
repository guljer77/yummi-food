import React from "react";
import { Link } from "react-router-dom";

function AddFood() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4>Add Food</h4>
        <Link
          to="/dashboard/all-food"
          className="px-5 py-2 bg-primary text-white rounded-sm"
        >
          All Food
        </Link>
      </div>
      <div className="mt-5">
        <form action="">
          <div>
            <input type="text" placeholder="Enter Food Name" className="w-full border border-primary outline-0 rounded mb-3 px-3 py-2" />
          </div>
          <div>
            <input type="number" placeholder="Price" className="w-full border border-primary outline-0 rounded mb-3 px-3 py-2" />
          </div>
          <div>
            <textarea name="" id="" placeholder="Description Here..." className="w-full border mb-3 border-primary resize-none h-[160px] p-3 rounded outline-0"></textarea>
          </div>
          <div>
            <input type="file" className="w-full border border-primary outline-0 rounded mb-3 px-3 py-2" />
          </div>
          <div>
            <input type="submit" value="Add Food" className="px-5 py-2 bg-primary text-white rounded" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFood;
