import React, { useState } from "react";
import ProductItem from "./ProductItem";
import PRODUCT_DUMMY from "../../json/products.json";

export default function FeaturedProducts() {
  const [products, setProducts] = useState(PRODUCT_DUMMY);

  const filteredProduct = () => {
    return products.slice(0, 3);
  };

  return (
    <div className="site-section block-3 site-blocks-2 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>

        <div className="row mt-5">
          {filteredProduct().map((product, i) => (
            <ProductItem product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
