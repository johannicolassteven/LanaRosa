import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
    <div className="hero">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

 min-height: 4rem;

.hero{
  background: aliceblue;
  width: 100%;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: estart;
  font-weight: bold;
  text-decoration: none;
  color: #544226;
  position: fixed;
}

  h3{
    font-size: 1rem;
  }

  a {
    color: #2c2c2c;
    padding: 0.5rem;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: #a4a4a4;
  }

  @media (min-width: 992px) {
    .hero{
      min-height: 6rem;
      position:static;
    }
  }
`;

export default PageHero;
