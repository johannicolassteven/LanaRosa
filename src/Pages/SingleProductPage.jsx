import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { styled } from "styled-components";
import { tops } from "../../db";
import PageHero from "../components/Hero";

const SingleProduct = () => {
  const { ide } = useParams();
  var parametro = parseInt(ide);
  return (
    <Wrapper>
      {tops.map((top) => {
        var { id, name, imagen1, imagen2,imagen3, precio, color } = top;
        const [main, setMain] = useState(imagen1);
        if (id === parametro) {
          return (
            <div key={id}>
              <PageHero title={name} product></PageHero>
              <div className="product-card">
                <div className="producto-image">
                  <Link to={main}>
                    <img src={main} className="main" alt={name}></img>
                  </Link>
                  <div className="gallery">
                  <img
                      src={imagen1}
                      alt="1"
                      onClick={() => setMain(imagen1)}
                    />
                    <img
                      src={imagen2}
                      alt="2"
                      onClick={() => setMain(imagen2)}
                    />
                    <img
                      src={imagen3}
                      alt="3"
                      onClick={() => setMain(imagen3)}
                    />
                  </div>
                </div>
                <div className="descripcion">
                  <h5 className="titulo">{name}</h5>
                  <p className="price">${precio}</p>
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
          );
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .product-card {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }

  .main{
    display : flex;
    max-width: 14rem;
    object-fit: contain;
  }

  .image2 {
    display: none;
  }

  .producto-image{

  }

  .gallery {
    margin: .5rem auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    img {
      height: 95px;
      cursor: pointer;
      border: solid 1px black
    }
  }

  .descripcion{
    display: flex;
    background-color:var(--cafe);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 8rem;
    h5{
      font-size: 1rem;
    }
    .icons{
      display: flex;
      flex-direction: column;
      svg{
        margin: 1rem 0;
      }
    }
  }

  @media (min-width: 992px) {
  }
`;

export default SingleProduct;
