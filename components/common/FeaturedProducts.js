import React from "react";
import ProductItem from "./ProductItem";

export default function FeaturedProducts() {
  return (
    <div className="site-section block-3 site-blocks-2 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>

        <div className="row mt-5">
          {[...Array(3)].map((_, i) => (
            <ProductItem key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
