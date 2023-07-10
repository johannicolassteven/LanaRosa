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
            <div className="product-card">
              <div className="producto-image">
                <Link to={imagen1}>
                  <img src={imagen1} className="image1" alt={name}></img>
                </Link>
                <Link to={imagen2}>
                  <img src={imagen2} className="image2" alt={name}></img>
                </Link>
              </div>
              <div className="descripcion">
                <Link to={`/products/${id}`} className="product-details">
                  <h5 className="titulo">{name}</h5>
                  <p className="price">${precio}</p>
                </Link>
                <div className="icons">
                  <Link to={`/products/${id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </Link>
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
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid {
    display: flex;
    margin: 1rem;
  }

  .product-card {
    display: flex;
  }

  .producto-image {
    display: flex;
  }

  img {
    width: 7.5rem;
  }

  .descripcion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    background-color: var(--azul2);
    padding-bottom: 5px;
  }

  .product-details {
    margin: 0 auto;
  }

  .titulo {
    font-size: 0.8rem;
  }

  .price {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 0.8rem;
    color: black;
    p {
      font-size: 0.5rem;
    }
  }

  .icons {
    margin: 0 auto;
    svg {
      margin: 5px;
    }
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      max-width: 12rem;
    }
  }
`;

export default GridView;
