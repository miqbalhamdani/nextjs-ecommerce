import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Breadcrumb from "../components/common/Breadcrumb";
import OrderForm from "../components/checkout/OrderForm";
import Coupon from "../components/checkout/Coupon";
import OrderDetail from "../components/checkout/OrderDetail";

export default function Checkout() {
  const router = useRouter();

  const [order, setOrder] = useState(null);
  const [form, setForm] = useState(null);
  const [isValidForm, setIsValidForm] = useState(true);

  useEffect(() => {
    const storage = localStorage.getItem("NC_ORDER");

    if (storage) {
      const order = JSON.parse(storage);
      setOrder(order);
    }
  }, []);

  const validateForm = (form) => {
    const { name, address, phone, postalCode, email } = form;
    return !!name && !!address && !!phone && !!postalCode && !!email;
  };

  const handlerSubmitForm = (form) => setForm(form);

  const orderData = () => ({
    ...order,
    delivery: form,
  });

  const handlerSubmitOrder = () => {
    const isValid = validateForm(form);
    if (!isValid) {
      setIsValidForm(false);
      return;
    }

    setIsValidForm(true);
    localStorage.setItem("NC_ORDER", JSON.stringify(orderData()));

    router.push("/thank-you");
  };

  return (
    <div className="site-wrap">
      <Breadcrumb />

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <OrderForm
              form={form}
              isValidForm={isValidForm}
              onSubmit={handlerSubmitForm}
            />
            <div className="col-md-6">
              <Coupon />

              {order && (
                <OrderDetail
                  products={order.products}
                  subtotal={order.subtotal}
                  total={order.total}
                  onSubmit={handlerSubmitOrder}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
