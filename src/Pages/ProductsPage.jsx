import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { styled } from "styled-components";
import { tops } from "../../db";
import PageHero from "../components/Hero";
import Filtros from "../components/Filters";

const ProductsPage = () => {
  return (
    <>
      <PageHero title="Productos"></PageHero>
      <Filtros/>
      <Wrapper>
        <div className="contenedor2">
          {tops.map((top) => {
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
 
  .contenedor2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 530px) {
    .contenedor2{
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default ProductsPage;
