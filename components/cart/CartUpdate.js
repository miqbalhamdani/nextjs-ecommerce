import Link from "next/link";
import React from "react";

export default function ApplyPromo() {
  return (
    <div className="col-md-6">
      <div className="d-flex">
        <button className="btn btn-primary btn-sm btn-block me-3">
          Update Cart
        </button>

        <Link href="/shop">
          <button className="btn btn-outline-primary btn-sm btn-block">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}
