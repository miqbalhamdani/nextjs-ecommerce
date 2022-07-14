import Link from "next/link";
import React from "react";

export default function CartTotal() {
  return (
    <div className="col-md-6 pl-5">
      <div className="row justify-content-end">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12 text-right border-bottom mb-5">
              <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <span className="text-black">Subtotal</span>
            </div>
            <div className="col-md-6 text-right">
              <strong className="text-black">$230.00</strong>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6">
              <span className="text-black">Total</span>
            </div>
            <div className="col-md-6 text-right">
              <strong className="text-black">$230.00</strong>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Link href="\checkout">
                <button className="btn btn-primary btn-lg py-3 btn-block">
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
