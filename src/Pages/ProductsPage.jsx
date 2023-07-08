import React from "react";
import PageHero from "../components/Hero";
import Filtros from "../components/Filters";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  return (
    <>
      <PageHero title="Productos"></PageHero>
      <div>
      <Filtros/>
      <ProductsList/>
      </div>
    </>
  );
};


export default ProductsPage;
