import React from 'react'
import Breadcrumb from "../components/common/Breadcrumb";
import OrderForm from '../components/checkout/OrderForm';
import OrderDetail from '../components/checkout/OrderDetail';

export default function checkout() {
  return (
    <div className="site-wrap">
      <Breadcrumb />

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <OrderForm />
            <OrderDetail />
          </div>
        </div>
      </div>
    </div>
  )
}
