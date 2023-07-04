import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { styled } from "styled-components";

const ProductsPage = () => {
  const [todos, setTodos] = useState();

  const productFetch = async () => {
    const response = await fetch("http://localhost:3000/tops");
    console.log(response);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
  };

  useEffect(() => {
    productFetch();
  }, []);
  return (
    <main>
      <div className="container">
        {!todos
          ? "cargando..."
          : todos.map((todos, index) => {
              return (
                <Product
                  key={todos.id}
                  imagen1={todos.imagen1}
                  name={todos.name}
                  precio={todos.precio}
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
