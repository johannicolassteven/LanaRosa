import React from "react";
import { useFilterContext } from "../context/filter-context";
import { tops } from "../../db";
import Product from "./Product";
import { styled } from "styled-components";
import ListView from "./ListView";

const ProductsList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return (
      <Wrapper>
        <div className="grid">
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
    );
  } else {
    return (
      <Wrapper>
        <div className="view">
          {tops.map((top) => {
            return (
              <div key={top.id}>
                <ListView
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
    );
  }
};

const Wrapper = styled.section`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 530px) {
    .contenedor2 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default ProductsList;
