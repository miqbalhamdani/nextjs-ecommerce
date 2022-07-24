import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { formatRupiah } from "../../utils";
import InputQty from "../ui/InputQty";

export default function DetailDescription({ product }) {
  const router = useRouter();
  const [productQty, setProductQty] = useState(1);

  const addToCart = () => {
    const storage = localStorage.getItem("NC_CARTS");

    if (!storage) {
      const cart = {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        qty: productQty,
      };

      localStorage.setItem("NC_CARTS", JSON.stringify([cart]));
    } else {
      const carts = JSON.parse(storage);
      const selected = carts.find((cart) => cart.id === product.id);
      const selectedIndex = carts.indexOf(selected);

      if (selectedIndex !== -1) {
        carts[selectedIndex] = {
          ...carts[selectedIndex],
          qty: selected.qty + productQty,
        };

        localStorage.setItem("NC_CARTS", JSON.stringify([...carts]));
      } else {
        const cart = {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          qty: productQty,
        };

        localStorage.setItem(
          "NC_CARTS",
          JSON.stringify([...carts, cart])
        );
      }
    }

    router.push("/cart");
  };

  return (
    <div className="col-md-6">
      <h2 className="text-black">{product.title}</h2>
      <p>{product.description}</p>

      <p>
        <strong className="text-primary h4">
          {formatRupiah(product.price)}
        </strong>
      </p>

      <div className="mb-5">
        <InputQty onChange={(total) => setProductQty(total)} />
      </div>

      <p>
        <a className="buy-now btn btn-sm btn-primary" onClick={addToCart}>
          Add To Cart
        </a>
      </p>
    </div>
  );
}
