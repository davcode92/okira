import React from "react";
import ProductCard from "../productCard/ProductCard";
const ProductList = ({ prod, search }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {prod
        .filter((el) =>
          el.name.trim().toUpperCase().includes(search.trim().toUpperCase())
        )
        .map((el) => (
          <ProductCard key={el.id} el={el} />
        ))}
    </div>
  );
};

export default ProductList;
