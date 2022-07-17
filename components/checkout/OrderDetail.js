import Link from "next/link";
import React from "react";
import Payment from "./Payment";

export default function OrderDetail() {
  return (
    <div className="row mb-5">
      <div className="col-md-12">
        <h2 className="h3 mb-3 text-black">Your Order</h2>
        <div className="p-3 p-lg-5 border">
          <table className="table site-block-order-table mb-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Top Up T-Shirt <strong className="mx-2">x</strong> 1
                </td>
                <td>$250.00</td>
              </tr>
              <tr>
                <td>
                  Polo Shirt <strong className="mx-2">x</strong> 1
                </td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td className="text-black font-weight-bold">
                  <strong>Cart Subtotal</strong>
                </td>
                <td className="text-black">$350.00</td>
              </tr>
              <tr>
                <td className="text-black font-weight-bold">
                  <strong>Order Total</strong>
                </td>
                <td className="text-black font-weight-bold">
                  <strong>$350.00</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <Payment />

          <div className="form-group">
            <Link href="/thank-you">
              <button className="btn btn-primary btn-lg py-3 btn-block">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
