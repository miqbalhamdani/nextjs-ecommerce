import React from 'react'
import OrderWrapper from '../components/thank-you/OrderWrapper'
import OrderSummary from '../components/thank-you/OrderSummary'

export default function thankyou() {
  return (
    <div className="site-wrap">

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <OrderWrapper>
              <OrderSummary />
            </OrderWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
