import React from "react";
import Container from "../../../Components/Container";

function Reserve() {
  return (
    <div className="py-12 bg-gray-200">
      <Container>
        <h6 className="text-center text-[16px] font-semibold text-primary">
          RESERVE FOR
        </h6>
        <h4 className="text-center text-[32px] font-bold">Amazing Dining</h4>
        <div className="mt-5">
          <form action="">
            <div className="lg:flex items-center justify-between gap-10 mb-4">
              <div className="lg:w-[50%] w-full lg:mb-0 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border border-primary px-3 py-2 rounded outline-0"
                />
              </div>
              <div className="lg:w-[50%] w-full lg:mb-0 mb-4">
                <input
                  type="text"
                  placeholder="Enter Phone No"
                  className="w-full bg-transparent border border-primary px-3 py-2 rounded outline-0"
                />
              </div>
            </div>
            <div className="lg:flex items-center justify-between gap-10 mb-4">
              <div className="lg:w-[50%] w-full lg:mb-0 mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border border-primary px-3 py-2 rounded outline-0"
                />
              </div>
              <div className="lg:w-[50%] w-full lg:mb-0 mb-4">
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent border border-primary rounded outline-0 py-2 px-3"
                >
                  <option default>Select Occassion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Family Gathering</option>
                  <option>Office</option>
                  <option>Corporate Celebration</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="lg:flex items-center justify-between gap-10 mb-4">
              <div className="lg:w-[50%] w-full lg:mb-0 mb-4">
                <input
                  type="date"
                  className="w-full bg-transparent border border-primary px-3 py-2 rounded outline-0"
                />
              </div>
              <div className="lg:w-[50%] w-full lg:mb-0 mb-4">
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent border border-primary rounded outline-0 py-2 px-3"
                >
                  <option default>Number of Person</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="lg:flex items-center justify-between gap-10 mb-4">
              <div className="lg:w-[50%] w-full lg:mb-0 mb-4">
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent border border-primary px-3 rounded outline-0 py-2"
                >
                  <option default>Type of Dining</option>
                  <option>Candle Night Dinner</option>
                  <option>Birthday Dinner</option>
                  <option>Anniversary Dinner</option>
                  <option>Corporate Dinner</option>
                </select>
              </div>
              <div className="lg:w-[50%] w-full lg:mb-0 mb-4">
                <input
                  type="submit"
                  value="Book A Table"
                  className="w-full bg-primary text-white py-2 rounded-md"
                />
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Reserve;
