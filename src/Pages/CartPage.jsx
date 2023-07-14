import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageHero from "../components/Hero";
import { useCart } from "../context/useCart";

const CartPage = () => {
  const { cart, clearCart, removeFromCart, addToCart, cleartoCart } = useCart();
 
  let totalidad = cart.reduce((acum, total) => {
    return acum + total.quantity*total.precio
  }, 0)
  console.log(totalidad)

  return (
    <Wrapper>
      {cart.map((item) => {
        const { id, name, imagen1, precio, color, quantity } = item;
 
        return (
          <div className="product-card" key={id}>
            <img src={imagen1} alt="" />
            <div className="descripcion">
              <h1>{name}</h1>
              <div className="cantidad">
                <button onClick={() => cleartoCart(item)}>-</button>
                {quantity.toString()}
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <p>${precio} </p>
              <p>total: {parseInt(precio)*quantity*1000}</p>
              <button className="remover " onClick={() => removeFromCart(item)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  fill="#000"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </button>
              
            </div>
          </div>
        );
      })}
      <div className="pagar"><h1> Total a pagar: {totalidad}.000</h1></div>
      <div className="botones">
        <button onClick={clearCart}>clear</button>
        <Link to="/products">
          <button>back to products</button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-card {
    margin: 1rem;
    display: flex;
    h1 {
      font-size: 1rem;
    }
  }

  img {
    max-width: 9rem;
  }

  .descripcion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    background-color: var(--azul);
    padding-bottom: 5px;
    text-align: center;
    font-size: 15px;
  }

  .botones {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem;
    button{
      background-color: var(--cafe);
      border-radius: 10px;
      padding: 0 20px;
    }
  }

  .cantidad {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 2rem;

    button {
      font-size: 1rem;
      width: 30px;
      height: 30px;
      border-radius: 60px;
      border-color: transparent;
      background-color: var(--cafe);
    }
  }

  .remover {
    margin-left: 80%;
    height: 30px;
    width: 30px;
    border-radius: 30px;
    border: none;
  }

  .pagar{
    background-color: var(--azul2);
    display: flex;
    justify-content: center;
  }

  @media (min-width: 992px) {
    .product-card {
    }

    img {
      max-width: 12rem;
    }
  }
`;

export default CartPage;
