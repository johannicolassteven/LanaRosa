import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products-context";
import styled from "styled-components";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              fill=" #8b1717"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
          <img src="https://i.ibb.co/FmR6ddw/LanaRosa.png" alt="logo" />
        </div>
        <ul className="links" onClick={closeSidebar}>
          <Link to="/">Hogar</Link>
          <Link to="/about">Sobre LanaRosa</Link>
          <Link to="/products">Productos</Link>
        </ul>

        <div className="cart-container">
          <button className="login button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              fill="currentColor"
              class="bi bi-person-add"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
            </svg>
          </button>
          <button className="cart button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar-header {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #ffffff;
    img {
      margin-right: -25px;
      width: 180px;
    }
  }
  .close-btn {
    margin-left: -10px;
    background: transparent;
    border: transparent;
    cursor: pointer;
  }

  .links a {
    display: block;
    text-decoration: none;
    text-align: left;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: #000;
    border-left: solid #ab7a5f 5px;
    border-bottom: solid #ab7a5f 1px;
    margin: 1rem;
    margin-bottom: 20px;
    padding: 0.5rem;
    margin-left: -33px;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #5eb6b97c;
    transition: 0.5s;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .cart-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    width: 5rem;
    height: 4rem;
    margin: 1rem;
    display: flex;
    background-color: #ab7a5f;
    border-color: transparent;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
