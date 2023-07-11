import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageHero from "../components/Hero";
import { useCartContext } from "../context/cart-context";
import CartContext from "../context/cart-context";

const CartPage = () => {
  const { cart} = useCartContext();
  console.log(cart);

  return (
    <Wrapper>
      {cart.map((item) => {
        return <div className="product-card" key={item.id}>
         
          <img src={item.imagen1} alt="" /> 
          <div className="descripcion"><h1>{item.name}</h1>
            <p>numero de productos agregador = {item.quantity}</p>
            <p>precio = {item.precio} </p>
            <p>color = {item.color} </p>
          </div>
          </div>;
      })}

    </Wrapper>
  );
};

const Wrapper = styled.section`



  .product-card {
    margin: 1rem;
    display: flex;
  }

 img{max-width:9rem;}

  .descripcion {

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    background-color: var(--azul);
    padding-bottom: 5px;
    text-align: center;
  }





  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      max-width: 12rem;
    }
  }
`;

export default CartPage;
