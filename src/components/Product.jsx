import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ id, imagen1, imagen2, name, precio }) => {
  return (
    <Wrapper>
      <div className="contenedor">
        <div className="product-card">
          <div className="producto-image">
            <img src={imagen1} className="image" alt={name}></img>
            <img src={imagen2} className="image2" alt={name}></img>
          </div>
          <div className="descripcion">
            <div className="product-details">
              <h5 className="titulo">{name}</h5>
              <Link to={`/products/${id}`} className="price">
                ${precio}
              </Link>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  
    
  .contenedor {
    display: flex;
    margin: 5px auto 5px;
    max-width: 20rem;
    justify-content: center;
  }

  img {
    display: flex;
    margin: auto;
    z-index: -2;
    max-width: 10rem;
    min-width: 1rem;
  }

  .image2 {
    display: none;
  }

  .producto-card {
    display: flex;
    justify-content: center;
  }

  .product-details {
    display: flex;
    justify-content: space-around;
    height: 1.5rem;
  }

  .descripcion {
    background-color: var(--cafe);
    padding-bottom: 5px;
  }

  .titulo {
    font-size: 0.8rem;
  }

  .price {
    text-decoration: none;
    font-size: 0.8rem;
    color: black;
    p {
      font-size: 0.5rem;
    }
  }

  .icons {
    display: flex;
    justify-content: space-around;
    margin: 0 2rem;
  }

  @media (min-width: 992px) {
    .image2 {
      display: flex;
    }
    .producto-image {
      display: flex;
    }
  }
`;

export default Product;
