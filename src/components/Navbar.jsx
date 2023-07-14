import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useProductsContext } from "../context/products-context";
import { useCart } from "../context/useCart";

const Navbar = () => {
  const {addToCart,removeFromCart, cart, clearCart, } = useCart();
  const { openSidebar } = useProductsContext();
  {console.log(cart.length)}
  return (
    <NavContainer>
      <div className="nav">
        <div className="nav-header">
          <button className="nav-toggle" type="button" onClick={openSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              fill=""
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <Link to="/">
            <img src="https://i.ibb.co/FmR6ddw/LanaRosa.png" alt="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <Link to="/">Hogar</Link>
          <Link to="/products">Productos</Link>
          <Link to="/about">Sobre LanaRosa</Link>
        </ul>

        <div className="botones">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            className="bi bi-person-add"
            viewBox="0 0 16 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <Link to="/like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </Link>
          <Link to="/cart" className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg><p>{cart.length}</p>
            
          </Link>
        </div>
      </div>
    </NavContainer> 
  );
};

const NavContainer = styled.nav`
  height: 4rem;



  .nav {
    height: 4rem;
    background-color: white;
    position: fixed;
    z-index: 3;
    width: 100%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-header {
    display: flex;
    align-items: center;
    img {
      margin-right: -25px;
      width: 100px;
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

  .botones {
    display: flex;
    
    svg {
      display: flex;
      width: 1.3rem;
      margin: 0 10px 0.3rem;
    }
  }
  a {
    text-decoration: none;
    align-items: center;
    display: flex;
  }

  .cart{
    display : flex;
    p{
      text-align: center;
      width: 25px;
      height: 25px;
      color: white;
      background-color: var(--cafe2);
      margin-left: -15px;
      border-radius: 25px;
    }
  }

  @media (min-width: 992px) {

    height: 5rem;



.nav {
  height: 5rem;}
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
        color: black;
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--cafe);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
