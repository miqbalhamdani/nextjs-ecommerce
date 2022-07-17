import React from "react";

export default function Payment() {
  return (
    <>
      <div className="border p-3 mb-3">
        <h3 className="h6 mb-0">
          <a
            className="d-block"
            data-toggle="collapse"
            href="#collapsebank"
            role="button"
            aria-expanded="false"
            aria-controls="collapsebank"
          >
            Direct Bank Transfer
          </a>
        </h3>

        <div className="collapse" id="collapsebank">
          <div className="py-2">
            <p className="mb-0">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order won’t be shipped
              until the funds have cleared in our account.
            </p>
          </div>
        </div>
      </div>

      <div className="border p-3 mb-3">
        <h3 className="h6 mb-0">
          <a
            className="d-block"
            data-toggle="collapse"
            href="#collapsecheque"
            role="button"
            aria-expanded="false"
            aria-controls="collapsecheque"
          >
            Cheque Payment
          </a>
        </h3>

        <div className="collapse" id="collapsecheque">
          <div className="py-2">
            <p className="mb-0">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order won’t be shipped
              until the funds have cleared in our account.
            </p>
          </div>
        </div>
      </div>

      <div className="border p-3 mb-5">
        <h3 className="h6 mb-0">
          <a
            className="d-block"
            data-toggle="collapse"
            href="#collapsepaypal"
            role="button"
            aria-expanded="false"
            aria-controls="collapsepaypal"
          >
            Paypal
          </a>
        </h3>

        <div className="collapse" id="collapsepaypal">
          <div className="py-2">
            <p className="mb-0">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order won’t be shipped
              until the funds have cleared in our account.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
