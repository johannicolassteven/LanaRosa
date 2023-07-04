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
              <li  key={top.id}>
                <Product
                  imagen1={top.imagen1}
                  imagen2={top.imagen2}
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
min-width: 390px;
  .container {
    ul {
      list-style: none;
      margin-left: -30px;
    }
    li {
      margin: 1rem;
    }
  }

  @media (min-width: 992px) {
  }
`;

export default ProductsPage;
