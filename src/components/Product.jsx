import React from "react";
import { styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Product = ({ id, imagen1,imagen2, name, precio }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="img-container">
          <img src={imagen1} className="card-img-top img" alt={name}></img>
          <img src={imagen2} className="img2" alt={name}></img>
        </div>
        <div className="card-body">
          <h5 className="title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={`/products/${id}`}
          className="btn btn-primary ">
            {precio}
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .card {
    display: flex;
    border : none;
    justify-content: center;
    max-width:24rem;
    background-color: black;
    img {
      max-width: 12rem;
      border-radius: 0;
    }
  }
  .img2{
        min-width: 140px;
        object-fit: cover;
      }

  .img-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: -2rem ;
  }

  .title{
    display : flex;
    justify-content: center;
    width: 100%;    margin:0;
    font-weight: bold;
  }
  .card-body{
    color:black;
    background-color: #ffffff85;
    background-image: linear-gradient( transparent, #5eb6b932);

  }
  .btn-primary{
    display: flex;
    justify-content: center;
    background-color: #ab7a5f;
    border-color: black;
    margin:0 100px;
  }
  .btn-primary:active{
    background-color: #8d7041ae;
    border-color: black;
  }

`;

export default Product;
