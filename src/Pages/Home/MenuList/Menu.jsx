import React, { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import Card from "../../../Components/Card/Card";

function Menu() {
  const [allFood, setAllFood] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then(res => res.json())
      .then(data => setAllFood(data))
  }, []);
  return (
    <div className="py-12">
      <Container>
        <h4 className="text-[36px] font-extrabold">Explore All Yummy Menu</h4>
        <ul className="flex flex-wrap items-start space-x-2 py-3">
          <li className="px-3 py-2 lg:mb-0 mb-3 rounded font-semibold border-2 text-primary border-primary cursor-pointer">
            All Menu
          </li>
          <li className="px-3 py-2 lg:mb-0 mb-3 rounded font-semibold border-2 text-primary border-primary cursor-pointer">
            Vegetarian
          </li>
          <li className="px-3 py-2 lg:mb-0 mb-3 rounded font-semibold border-2 text-primary border-primary cursor-pointer">
            Sandwiches
          </li>
          <li className="px-3 py-2 lg:mb-0 mb-3 rounded font-semibold border-2 text-primary border-primary cursor-pointer">
            dessert
          </li>
        </ul>
        <div className="pt-5 lg:grid grid-cols-4 gap-5">
          {
            allFood?.map((item, index)=> <Card key={index} item={item} />)
          }
        </div>
      </Container>
    </div>
  );
}

export default Menu;
