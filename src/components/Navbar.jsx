import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useProductsContext } from "../context/products-context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-toggle" type="button" onClick={openSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              fill=""
              className="bi bi-list"
              viewBox="0 0 16 16"
  
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>{" "}<img src="https://i.ibb.co/FmR6ddw/LanaRosa.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <Link to="/">Hogar</Link>
          <Link to="/about">Sobre LanaRosa</Link>
          <Link to="/products">Productos</Link>
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
  }
  
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-right: -25px;
      width: 180px;
    }
  }
  .nav-toggle {
    margin-left: -10px;
    background: transparent;
    border: transparent;
    cursor: pointer;
  }

  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      list-style: none;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
