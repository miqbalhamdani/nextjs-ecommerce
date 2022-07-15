import Link from "next/link";
import React from "react";

export default function ApplyPromo() {
  return (
    <div className="col-md-6">
      <div className="row mb-5">
        <div className="col-md-6">
          <Link href="/shop">
            <button className="btn btn-outline-primary btn-sm btn-block">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label className="text-black h4" htmlFor="coupon">
            Coupon
          </label>
          <p>Enter your coupon code if you have one.</p>
        </div>
        <div className="col-md-8 mb-3 mb-md-0">
          <input
            type="text"
            className="form-control py-3"
            id="coupon"
            placeholder="Coupon Code"
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary btn-sm">Apply Coupon</button>
        </div>
      </div>
    </div>
  );
}
