import React from "react";
import { styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

const Product = ({ imagen1,imagen2, name, precio }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="img-container">
          <img src={imagen1} className="card-img-top" alt={name}></img>
          <img src={imagen2} className="imagen2" alt={name}></img>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            {precio}
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .card {
    display: flex;
    background-color: #ea075378;
    justify-content: center;
    img {
      width: 10rem;
      margin: 2px;
    }
  }

  .img-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: -3rem ;
  }

  .card-title{
    display : flex;
    justify-content: center;
    height: 2rem;
    width: 20rem;
    margin:0;
    color: white;
  }
  .card-body{
    color:white;
    background-image: linear-gradient( transparent, #323232);


  }
  .btn{
    display: flex;
    justify-content: center;
    background-color: #ea075378;
    border-color: black;
  }
`;

export default Product;
