import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductsProvider } from "./context/products-context.jsx";
import { FilterProvider } from "./context/filter-context.jsx";
import { CartProvider } from "./context/cart-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <CartProvider>
      <ProductsProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductsProvider>
  </CartProvider>
  </React.StrictMode>
)

