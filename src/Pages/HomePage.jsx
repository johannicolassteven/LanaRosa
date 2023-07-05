
import React from "react";
import { styled } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../components/Carousel";
import Services from "../components/services";
import Contact from "../components/contact";


const Home = () => {
  return <div>

    <Carousel/> 
    <Contact/>
    <Services/>
   
  </div>;
};

export default Home;
