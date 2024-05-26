import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function AddFood() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

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
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Enter Food Name"
              {...register("title", { required: true })}
              className="w-full border border-primary outline-0 rounded mb-3 px-3 py-2"
            />
            {errors.title?.type === "required" && (
              <p className="text-red-600 py-2">Product Title is Required</p>
            )}
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="w-full border border-primary outline-0 rounded mb-3 px-3 py-2"
            />
            {errors.price?.type === "required" && (
              <p className="text-red-600 py-2">Product Price is Required</p>
            )}
          </div>
          <div>
            <textarea
              name=""
              id=""
              placeholder="Description Here..."
              {...register("description", { required: true })}
              className="w-full border mb-3 border-primary resize-none h-[160px] p-3 rounded outline-0"
            ></textarea>
            {errors.description?.type === "required" && (
              <p className="text-red-600 py-2">
                Product Description is Required
              </p>
            )}
          </div>
          <div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full border border-primary outline-0 rounded mb-3 px-3 py-2"
            />
            {errors.image?.type === "required" && (
              <p className="text-red-600 py-2">Image is Required</p>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="Add Food"
              className="px-5 py-2 bg-primary text-white rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFood;
