import React from 'react'
import Breadcrumb from "../components/common/Breadcrumb";
import ApplyPromo from '../components/cart/ApplyPromo';
import CartTable from '../components/cart/CartTable';
import CartTotal from '../components/cart/CartTotal';

export default function cart() {
  return (
    <div className="site-wrap">
      <Breadcrumb />

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <CartTable />
          </div>

          <div className="row">
            <ApplyPromo />
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  )
}
