import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import CartUpdate from "../components/cart/CartUpdate";
import CartTable from "../components/cart/CartTable";
import CartTotal from "../components/cart/CartTotal";

export default function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem("NC_CARTS");

    if (storage) {
      const carts = JSON.parse(storage);
      setCarts(carts);
    }
  }, []);

  const handleRemoveCart = (cart) => {
    const currentCarts = [...carts];
    const cartIndex = currentCarts.indexOf(cart);
    currentCarts.splice(cartIndex, 1);

    setCarts(currentCarts);
  };

  const handleUpdateCart = () => {
    localStorage.setItem("NC_CARTS", JSON.stringify([...carts]));
  };

  return (
    <div className="site-wrap">
      <Breadcrumb />

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <CartTable carts={carts} removeCart={handleRemoveCart} />
          </div>

          <div className="row">
            <CartUpdate updateCart={handleUpdateCart} />
            <CartTotal carts={carts} />
          </div>
        </div>
      </div>
    </div>
  );
}
