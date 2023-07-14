import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const GridView = ({ tops }) => {
  return (
    <Wrapper>
      {tops.map((top) => {
        const { id, imagen1, imagen2, name, precio } = top;

        return (
          <div className="grid" key={id}>
            <Link to={`/products/${id}`} className="center">
              <div className="product-card">
                <div className="producto-image">
                  <img src={imagen1} className="image1" alt={name}></img>
                  <img src={imagen2} className="image2" alt={name}></img>
                </div>
                <div className="descripcion">
                  <div className="product-details">
                    <h5 className="titulo">{name}</h5>
                    <p className="price">${precio}</p>
                  </div>
                  <div className="icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`


  .product-card {
    display: flex;
    justify-content: center;
    margin: 1rem;
    width: 80%;
  }

  .center{
    display: flex;
    justify-content: center;
  }

  .producto-image {
    width:80%;
    display: flex;
    object-fit: cover;
    img {
      display: flex;
      object-fit: cover;
      max-width: 50%;
    }
  }

  .descripcion {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:20%;
    padding: 1rem;
    background-color: var(--azul);
    padding-bottom: 5px;
    text-align: center;
    .titulo {
      font-size: 0.8rem;
      .price {
        text-decoration: none;
        font-size: 0.8rem;
        color: black;
        p {
          font-size: 0.5rem;
        }
        .icons {
          margin: 0 auto;
          svg {
            margin: 5px;
          }
        }
      }
    }
  }

  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: #2e2e2e;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

   
  }
`;

export default GridView;
