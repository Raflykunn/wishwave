import React from "react";
import Carousel from "../carousel";
import About from "../about";
import Product from "../product";
import Contact from "../contact";
import Event from "../event";

const Home = () => {
  return (
    <>
      <Carousel />
      <Event />
      <About />
      <Product />
      <Contact />
    </>
  );
};

export default Home;
