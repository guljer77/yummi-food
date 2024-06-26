import React from "react";
import Image from '../../assets/shop-1-02.jpg';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";

function Card({item}) {
  return <div className="bg-gray-100 shadow-md p-5 lg:mb-0 mb-5">
    <img src={item?.img} alt="" />
    <h4 className="text-[18px] font-semibold py-2">B{item?.title}</h4>
    <p className="text-[16px] font-bold"><del>$ 20.00</del> ${item?.price}</p>
    <div className="flex items-center gap-2 mt-2">
      <span className="w-[35px] h-[35px] bg-primary rounded-sm text-white flex items-center justify-center text-[22px]"><FaRegEye /></span>
      <span className="w-[35px] h-[35px] bg-primary rounded-sm text-white flex items-center justify-center text-[22px]"><MdOutlineShoppingCart /></span>
    </div>
  </div>;
}

export default Card;
