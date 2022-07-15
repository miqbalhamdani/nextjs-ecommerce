import React from "react";
import ProductItem from "../common/ProductItem";

export default function ProductList(props) {
  return (
    <div className="row mb-5">
      {props.products.map((product, i) => (
        <ProductItem product={product} key={i} />
      ))}
    </div>
  );
}
