// __tests__/index.test.jsx

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { formatRupiah } from "../utils";
import Checkout from "../pages/checkout";
import OrderForm from "../components/checkout/OrderForm";
import DUMMY from "../json/orders-ls.json";

const LOCAL_STORAGE_KEY = "NC_ORDER";

const setLocalStorage = () => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DUMMY));
};

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
};

describe("Checkout", () => {
  it("renders a heading", () => {
    render(<Checkout />);

    const titleBilling = screen.getByText("Billing Details");
    expect(titleBilling).toBeInTheDocument();
  });

  it("try to load local storage", () => {
    // initiate local storage
    setLocalStorage();
    const orderDummy = getLocalStorage();

    expect(orderDummy).not.toBeNull();
  });

  it("to check, is product item show in detail order is same with data in local storage", () => {
    render(<Checkout />);

    // initiate local storage
    setLocalStorage();
    const orderDummy = getLocalStorage();
    const orderProductItemDummy = orderDummy.products.length; // total product items in localstorage

    const totalOrderItem = screen.getAllByTestId("product-items"); // total product item rendered
    expect(totalOrderItem).toHaveLength(orderProductItemDummy);
  });

  it("is show alert when click submit button and empty form", async () => {
    const handlerSubmitForm = jest.fn();
    render(<OrderForm onSubmit={handlerSubmitForm} />);

    const alert = await screen.findByText(/Please complete this form/);
    expect(alert).toBeInTheDocument();
  });

  it("has card order", async () => {
    render(<Checkout />);

    const titleYourOrder = screen.getByText("Your Order");
    expect(titleYourOrder).toBeInTheDocument();
  });

  it("has delivery and coupon form", async () => {
    const { container } = render(<Checkout />);
    expect(container.getElementsByClassName("form-control").length).toBe(9);
  });

  it("to check, is total product in the display was same in the local storage or not", () => {
    render(<Checkout />);

    // initiate local storage
    setLocalStorage();
    const orderDummy = getLocalStorage();
    const totalProductPriceDummy = orderDummy.products.reduce(
      (acc, product) => (acc += product.price * product.qty),
      0
    ); // total product price items in localstorage

    const totalOrderItem = screen.getByTestId("product-subtotal-price"); // total product item rendered
    expect(totalOrderItem.textContent).toBe(formatRupiah(totalProductPriceDummy));
  });
});
