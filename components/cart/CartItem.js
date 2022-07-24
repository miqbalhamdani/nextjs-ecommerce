import React, { useState, useEffect } from "react";
import Image from "next/image";
import InputQty from "../ui/InputQty";
import { formatRupiah } from "../../utils";

export default function CartItem(props) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(props.cart.qty);
  }, [props.cart]);

  const price = () => {
    return formatRupiah(props.cart.price);
  };

  const totalPrice = () => {
    const total = props.cart.price * qty;
    return formatRupiah(total);
  };

  const handleRemoveCart = () => {
    props.removeCart(props.cart);
  };

  return (
    <tr>
      <td className="product-thumbnail">
        <Image
          src={props.cart.image}
          alt={props.cart.title}
          layout="responsive"
          width={118}
          height={172}
          className="img-fluid"
        />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black">{props.cart.title}</h2>
      </td>
      <td>{price()}</td>
      <td>
        <InputQty qty={qty} onChange={setQty} />
      </td>
      <td>{totalPrice()}</td>
      <td>
        <a onClick={handleRemoveCart} className="btn btn-primary btn-sm">
          X
        </a>
      </td>
    </tr>
  );
}
