import React from "react";
import { formatRupiah } from "../../utils";
import Payment from "./Payment";

export default function OrderDetail(props) {
  const OrderItem = (product, index) => (
    <tr key={index}>
      <td>
        {product.title} <strong className="mx-2">x</strong> {product.qty}
      </td>
      <td className="text-end">{formatRupiah(product.price * product.qty)}</td>
    </tr>
  );

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
              {props.products.length &&
                props.products.map((product, index) =>
                  OrderItem(product, index)
                )}

              <tr>
                <td className="text-black font-weight-bold">
                  <strong>Cart Subtotal</strong>
                </td>
                <td className="text-black text-end">
                  {formatRupiah(props.subtotal)}
                </td>
              </tr>

              <tr>
                <td className="text-black font-weight-bold">
                  <strong>Order Total</strong>
                </td>
                <td className="text-black text-end font-weight-bold">
                  <strong>{formatRupiah(props.total)}</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <Payment />

          <div className="form-group">
            <button
              onClick={() => props.onSubmit()}
              className="btn btn-primary btn-lg py-3 btn-block"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
