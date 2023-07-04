import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { styled } from "styled-components";
import { tops } from "../../db";

const ProductsPage = () => {

  return (
    <main>
      <div className="container">
        {!tops
          ? "cargando..."
          : tops.map((top, index) => {
              return (
                <Product
                  key={top.id}
                  imagen1={top.imagen1}
                  name={top.name}
                  precio={top.precio}
                />
              );
            })}
      </div>
    </main>
  );
};

const main = styled.section`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 992px) {
  }
`;

export default ProductsPage;
