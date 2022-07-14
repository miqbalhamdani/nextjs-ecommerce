import React from "react";
import Image from "next/image";
import InputQty from "../ui/InputQty";

export default function CartItem() {
  return (
    <tr>
      <td className="product-thumbnail">
        <Image
          src="/images/products/cloth_2.jpg"
          alt="Image placeholder"
          width={159}
          height={113}
          className="img-fluid"
        />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black">Top Up T-Shirt</h2>
      </td>
      <td>$49.00</td>
      <td>
        <InputQty />
      </td>
      <td>$49.00</td>
      <td>
        <a href="#" className="btn btn-primary btn-sm">
          X
        </a>
      </td>
    </tr>
  );
}
