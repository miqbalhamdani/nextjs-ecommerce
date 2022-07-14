import React from "react";
import Image from "next/image";

export default function ProductItem() {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div className="border shadow-sm">
        <a href="shop-single.html">
          <Image
            src="/images/products/cloth_2.jpg"
            alt="Image placeholder"
            width={479}
            height={340}
            className="img-fluid"
          />
        </a>
        <div className="block-4-text p-4">
          <h3>
            <a href="shop-single.html">Polo Shirt</a>
          </h3>
          <p className="mb-0">Finding perfect t-shirt</p>
          <p className="text-primary font-weight-bold">$50</p>
        </div>
      </div>
    </div>
  );
}
