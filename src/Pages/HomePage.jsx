
import React from "react";
import { styled } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../components/Carousel";
import Services from "../components/services";


const Home = () => {
  return <div>

    <Carousel/>
    <Services/>
  </div>;
};

export default Home;
