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
          <Link className="a" to="/">
            Hogar
          </Link>
          <Link className="a" to="/products">
            Productos
          </Link>
          <Link className="a" to="/about">
            Sobre LanaRosa
          </Link>
          <Link className="a" to="/servicioAlCliente">
            Servicio al cliente
          </Link>
        </ul>

        <div className="main-buttons">
          <button className="login button" onClick={closeSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              fill="currentColor"
              className="bi bi-person-add"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
            </svg>
          </button>
          <Link to="/cart">
            <button className="cart button" onClick={closeSidebar}>
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
          </Link>
        </div>
      </aside>
      <div
        className={`${isSidebarOpen ? "cerrar show-cerrar" : "cerrar"}`}
        onClick={closeSidebar}
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
    background: #00000044;
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
    height: 5rem;
    display: flex;

    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #ffffff;
    img {
      margin-right: -25px;
      width: 100px;
    }
  }
  .close-btn {
    margin-left: -10px;
    background: transparent;
    border: transparent;
    cursor: pointer;
  }

  .a {
    display: block;
    text-decoration: none;
    font-size: 1rem;
    text-transform: capitalize;
    color: #000;
    border-left: solid var(--azul2) 5px;
    border-bottom: solid var(--azul2) 1px;
    margin: 1rem;
    margin-bottom: 20px;
    padding: 0.5rem;
    margin-left: -33px;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 85%;
    height: 100%;
    background: var(--azul);
    transition: 0.2s;
    transform: translate(-150%);
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
      display: none;
    }
  }
`;

export default Sidebar;
