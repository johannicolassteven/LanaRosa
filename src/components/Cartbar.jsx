import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products-context";
import styled from "styled-components";
import { useCart } from "../context/useCart";
import CartPage from "../Pages/CartPage";

const Cartbar = () => {
  const { isCartbarOpen, closeCartbar } = useProductsContext();
  const { cart, clearCart, removeFromCart, addToCart, cleartoCart } = useCart();
  let totalidad = cart.reduce((acum, total) => {
    return acum + total.quantity * total.precio;
  }, 0);
  return (
    <SidebarContainer>
      <aside
        className={`${isCartbarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <button className="close-btn" type="button" onClick={closeCartbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              fill="#8b1717"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <div>
        <CartPage></CartPage>
      </div>
      </aside>
      <div
        className={`${isCartbarOpen ? "cerrar show-cerrar" : "cerrar"}`} 
        onClick={closeCartbar}
      ></div>



    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`



  .cerrar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #00000083;
    transition: 0s;
    transform: translate(-100%);
    z-index: -1;
  }

  .show-cerrar {
    transition: 0s;
    transform: translate(0);
    z-index: 2;
  }

  .sidebar-header {
    height: 4rem;
    display: flex;
    align-items: center;
    padding:  1.5rem;
    background-color: #ffffff;
 
  }

  .close-btn {
    background: transparent;
    border: transparent;
    cursor: pointer;
  }


  .sidebar {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    margin-left:20%;
    height: 100%;
   background-color: white;
    transition: 0.2s;
    transform: translate(150%);
    z-index: -1;

  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
    transition: 0.5s;
  }

  .main-buttons {
    display: flex;
    align-items: end;
    justify-content: center;
  }

  .button {
    margin: 10% 10px 0;
    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
     width: 40%;
     margin-left:60%;
  }}
`;

export default Cartbar;
