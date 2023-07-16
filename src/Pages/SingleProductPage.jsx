import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { styled } from "styled-components";
import { tops } from "../../db";
import PageHero from "../components/Hero";
import { useCart } from "../context/useCart";

const SingleProduct = () => {
  const { addToCart, cart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const { ide } = useParams();
  var parametro = parseInt(ide);
  return (
    <Wrapper>
      {tops.map((top) => {
        const isProductInCart = checkProductInCart(top);
        var { id, name, imagen1, imagen2, imagen3, precio, color } = top;
        const [main, setMain] = useState(imagen1);
        if (id === parametro) {
          return (
            <div key={id}>
              <PageHero title={name} product></PageHero>

              <div className="contenedor">
                <div className="carta">
                  <div className="producto-image">
                    <Link to={main}>
                      <img src={main} className="main" alt={name}></img> </Link>
                      <img src={main} className="none main" alt={name}></img>
                   
                  </div>
                  <section className="carta2">
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
                    <div className="descripcion">
                      <h5 className="titulo">Top {name}</h5>
                      <div className="icons">
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
                    <div className="contenedor-cart">
                      <button className="cart" onClick={() => addToCart(top)}>
                        {precio}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          fill="currentColor"
                          className="bi bi-cart"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                      </button>
                    </div>
                  </section>
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
.contenedor{
  display: flex;
  justify-content: center;
}

  .none {
    display: none;
  }

  .carta {
    width: 80%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-card {
    display: flex;
    justify-content: center;
  }

  .main {
    min-width: 290px;
    max-width: 100%;
  }

  .gallery {
    max-width: 641px;
    display: flex;
    justify-content: center;
    gap: 1px;
    img {
      max-width: 33%;
      cursor: pointer;
    }
  }

  .descripcion {
    width: 100%;
    background-color: var(--cafe);
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 1rem 0;
    margin: 1rem 1px 1px;
    gap: 20px;
  }

  .cart {
    display: flex;
    width: 18rem;
    justify-content: center;
    gap: 10px;
    background-color: aliceblue;
    border-radius: 5px;
    border: solid var(--cafe) 1px;
  }

  .contenedor-cart {
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    height: 40px;
    button {
      background-color: var(--azul);
    }
    :active {
      background-color: #008000;
    }

    border-color: transparent;
  }

  @media (min-width: 992px) {


    .none {
      display: flex;
    }

    .producto-image {
      display: flex;
      flex-direction: row;
    }
   
    .carta {
      padding: 1rem;
      gap: 1rem;
      flex-direction: row;
    }
    .carta2 {
      margin: 1rem;
      min-width: 36%;
      padding: 1rem;
      button {
        background-color: white;
      }
    }

    .gallery {
      
    }
    .descripcion {
    }
  }
`;

export default SingleProduct;
