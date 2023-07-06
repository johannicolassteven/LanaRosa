import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { styled } from "styled-components";
import { tops } from "../../db";
import PageHero from "../components/Hero";

const ProductsPage = () => {
  return (
    <>
      <PageHero title="Productos"></PageHero>
      <Wrapper>
        <div className="contenedor">
          {tops.map((top, index) => {
            return (
              <div key={top.id}>
                <Product
                  imagen1={top.imagen1}
                  imagen2={top.imagen2}
                  name={top.name}
                  precio={top.precio}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`

 
  margin: 2rem 0 2rem;

  .contenedor {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    .contenedor{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default ProductsPage;
