import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products-context";
import styled from "styled-components";
import logotipo from "../Utils/LanaRosa.png";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header"><img src="https://i.ibb.co/FmR6ddw/LanaRosa.png" alt="logo" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill=" #8b1717"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
          
        </div>
        <ul className="links" onClick={closeSidebar}>
          <Link to="/">Hogar</Link>
          <Link to="/about">Sobre LanaRosa</Link>
          <Link to="/products">Productos</Link>
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    img {
      justify-self: center;
      width: 175px;
    }
  }
  .close-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    margin-top: 0.2rem;
  }

.links{
  margin-left:-21px;
}

  .links a {
    display: block;
    text-decoration: none;
    text-align: left;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: black;
    border-left: solid  #ab7a5f 5px;
    border-bottom: solid  #ab7a5f 1px;
    margin: 1rem;
    margin-bottom: 20px;
    padding: 0.5rem;
    margin-left: -10px;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    transition: 0.5s;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .logo {
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
