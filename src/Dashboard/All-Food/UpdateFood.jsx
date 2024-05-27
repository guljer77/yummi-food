import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateFood() {
  const navigate = useNavigate();
  const { title, price, img, description, _id } = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const fromData = new FormData();
    fromData.append("image", data.image[0]);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: fromData,
    })
      .then(res => res.json())
      .then(imgUrl => {
        if (imgUrl.success) {
          let dataUrl = null;
          if (imgUrl.success) {
            dataUrl = imgUrl.data.display_url;
          } else {
            dataUrl = data.image;
          }
          const { title, price, description } = data;
          const newItem = {
            title,
            price,
            description,
            img: dataUrl,
          };
          axios.patch(`http://localhost:5000/foods/${_id}`, newItem);
          toast.success("Food Update Successfully");
          navigate("/dashboard/all-food");
        }
      });
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
              defaultValue={title}
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
              defaultValue={price}
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
              defaultValue={description}
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
              <p className="text-red-600 py-2">Product Image is Required</p>
            )}
            <img src={img} alt="preview" className="mb-5 w-[140px]" />
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

export default UpdateFood;
