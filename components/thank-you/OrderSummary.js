import React, { useState, useEffect } from "react";
import SummaryDelivery from "./SummaryDelivery";
import SummaryPayment from "./SummaryPayment";

export default function OrderSummary() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const storage = localStorage.getItem("NC_ORDER");

    if (storage) {
      const order = JSON.parse(storage);
      setOrder(order);
    }
  }, []);

  return (
    <div className="m-auto col-xl-6 col-md-8 col-sm-12">
      {order && (
        <>
          <SummaryDelivery contact={order.delivery} />
          <SummaryPayment order={order} />
        </>
      )}
    </div>
  );
}
