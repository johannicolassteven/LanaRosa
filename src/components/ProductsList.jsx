import React from "react";
import { useFilterContext } from "../context/filter-context";
import { tops } from "../../db";
import GridView from "./GridView";
import { styled } from "styled-components";
import ListView from "./ListView";

const ProductsList = () => {
  const { grid_view } = useFilterContext();

  if (grid_view === true) {
    return (
      <Wrapper>
        <div className="grid">
          <GridView tops={tops} />
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="view">
          <ListView tops={tops} />
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
 display :  flex;
 justify-content: center;
`;

export default ProductsList;
