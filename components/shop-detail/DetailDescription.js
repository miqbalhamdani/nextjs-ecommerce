import Link from "next/link";
import React from "react";
import { formatRupiah } from "../../utils";
import InputQty from "../ui/InputQty";

export default function DetailDescription({product}) {
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
        <InputQty />
      </div>

      <p>
        <Link href="/cart">
          <a className="buy-now btn btn-sm btn-primary">
            Add To Cart
          </a>
        </Link>
      </p>
    </div>
  );
}
