import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { styled } from "styled-components";
import { tops } from "../../db";

const ProductsPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <ul>
          {tops.map((top, index) => {
            return (
              <li>
                <Product
                  key={top.id}
                  imagen1={top.imagen1}
                  name={top.name}
                  precio={top.precio}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    ul {
      list-style: none;
      margin-left: -50px;
    }
    li {
      margin: 1rem;
    }
  }

  @media (min-width: 992px) {
  }
`;

export default ProductsPage;
