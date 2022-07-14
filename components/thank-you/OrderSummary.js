import React from "react";
import SummaryDelivery from "./SummaryDelivery";
import SummaryPayment from "./SummaryPayment";

export default function OrderSummary() {
  return (
    <div className="m-auto col-xl-6 col-md-8 col-sm-12">
      <SummaryDelivery />
      <SummaryPayment />
    </div>
  );
}
