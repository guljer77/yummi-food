import React from "react";
import "./banner.css";
import Container from "../../../Components/Container";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner-img">
      <Container>
        <div className="flex items-center justify-start w-full h-[90vh]">
          <div className="text-white">
            <h2 className="lg:text-[48px] text-[26px] lg:w-2/4 w-4/5 font-bold">Order Your Favorite Food Here.</h2>
            <p className="lg:w-2/4 w-full text-[16px] font-medium py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              reprehenderit vel dolorem neque cupiditate cum laborum itaque
              dicta culpa voluptatem!
            </p>
            <Link to="/menu" className="inline-block px-5 py-[6px] mt-3 bg-white text-primary rounded">View Menu</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
