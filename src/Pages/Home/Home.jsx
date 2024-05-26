import React from "react";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";
import Menu from "./MenuList/Menu";
import Reserve from "./Reserve/Reserve";

function Home() {
  return (
    <>
      <Banner />
      <Service />
      <Menu />
      <Reserve />
    </>
  );
}

export default Home;
