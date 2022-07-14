import React from "react";
import CartItem from "./CartItem";

export default function CartTable() {
  return (
    <div className="site-blocks-table">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="product-thumbnail">Image</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-total">Total</th>
            <th className="product-remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          <CartItem />
        </tbody>
      </table>
    </div>
  );
}
