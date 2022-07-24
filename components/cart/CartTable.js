import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

export default function CartTable(props) {
  const emtpyItem = () => (
    <tr>
      <td colSpan={6} style={{ fontWeight: "700" }}>
        NO ITEMS
      </td>
    </tr>
  );

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
          {props.carts.length
            ? props.carts.map((cart, index) => (
                <CartItem
                  cart={cart}
                  key={index}
                  removeCart={props.removeCart}
                />
              ))
            : emtpyItem()}
        </tbody>
      </table>
    </div>
  );
}
