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
            boton
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
    justify-content: end;
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

  .links {
    margin-bottom: 2rem;
  }
  .links a {
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: black;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #89385cdd;
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
