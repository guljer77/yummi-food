import React from "react";
import Container from "../../../Components/Container";
import Service1 from "../../../assets/delivery-man-1.png";
import Service2 from "../../../assets/food-safety.png";
import Service3 from "../../../assets/chef.png";
import Service4 from "../../../assets/serve.png";

const foodItem = [
  {
    img: Service1,
    title: "Free Delivery",
  },
  {
    img: Service2,
    title: "100% Safe",
  },
  {
    img: Service3,
    title: "Professional Chef's",
  },
  {
    img: Service4,
    title: "Perfect Cooking",
  },
];

function Service() {
  return (
    <div className="py-12 bg-gray-200">
      <Container>
        <h4 className="text-center text-primary text-[20px] font-semibold">
          What We Do.
        </h4>
        <div className="lg:grid grid-cols-4 gap-5 pt-10">
          {foodItem?.map((item, index) => (
            <div key={index} className="text-center">
              <img src={item?.img} className="mx-auto" alt="" />
              <h4 className="text-[24px] font-semibold py-3">{item?.title}</h4>
              <p className="text-[16px] font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Service;
