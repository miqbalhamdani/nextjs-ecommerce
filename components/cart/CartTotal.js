import React from "react";
import { useRouter } from "next/router";
import { formatRupiah } from "../../utils";

export default function CartTotal(props) {
  const router = useRouter();

  const total = () =>
    props.carts.reduce(
      (accumulator, cart) => (accumulator += cart.qty * cart.price),
      0
    );

  const totalFormat = () => formatRupiah(total());

  const orderId = () => {
    const microDate = Date.parse(Date());
    return `NC-${microDate}`;
  };

  const orderData = () => ({
    orderId: orderId(),
    delivery: {},
    products: props.carts,
    coupon: {},
    subtotal: total(),
    total: total(),
    payment: "",
  });

  const proceedToCheckout = () => {
    localStorage.removeItem("NC_CARTS");
    localStorage.setItem("NC_ORDER", JSON.stringify(orderData()));
    router.push("/checkout");
  };

  return (
    <div className="col-md-6 pl-5">
      <div className="row justify-content-end">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12 text-right border-bottom mb-5">
              <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6">
              <span className="text-black">Total</span>
            </div>
            <div className="col-md-6 text-right">
              <strong className="text-black">{totalFormat()}</strong>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button
                onClick={proceedToCheckout}
                className="btn btn-primary btn-lg py-3 btn-block"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
