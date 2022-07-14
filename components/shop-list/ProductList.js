import React from "react";
import ProductItem from "../common/ProductItem";

export default function ProductList() {
  return (
    <div className="row mb-5">
      {[...Array(10)].map((_, i) => (
        <ProductItem key={i} />
      ))}
    </div>
  );
}
