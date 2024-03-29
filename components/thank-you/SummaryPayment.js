import React from "react";

export default function SummaryPayment() {
  return (
    <div className="p-3 p-lg-4 pt-lg-3 border">
      <table className="table site-block-order-table">
        <tbody>
          <tr>
            <td className="text-black font-weight-bold">
              <strong>Payment Method</strong>
            </td>
            <td className="text-black">Credit Card</td>
          </tr>
          <tr>
            <td className="text-black font-weight-bold">
              <strong>Cart Subtotal</strong>
            </td>
            <td className="text-black">$350.00</td>
          </tr>
          <tr>
            <td className="text-black font-weight-bold">
              <strong>Coupon Discount</strong>
            </td>
            <td className="text-black">$50.00</td>
          </tr>
          <tr>
            <td className="text-black font-weight-bold border-0">
              <strong>Order Total</strong>
            </td>
            <td className="text-black font-weight-bold border-0">
              <strong>$300.00</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
