import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatRupiah } from "../../utils";

export default function ProductItem(props) {
  const titleSytle = {
    minHeight: "48px",
    color: "#7971ea",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    lineClamp: "2",
    "-webkit-box-orient": "vertical",
  };

  const price = () => {
    return formatRupiah(props.product.price);
  };

  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <Link href={`/shop/${props.product.slug}`}>
        <div className="border shadow-sm">
          <a>
            <Image
              src={props.product.image}
              alt={props.product.title}
              layout="responsive"
              width={236}
              height={345}
              className="img-fluid"
            />
          </a>
          <div className="block-4-text p-4">
            <h5>
              <a style={titleSytle}>{props.product.title}</a>
            </h5>
            <p className="mb-0">{props.product.category}</p>
            <p className="text-primary font-weight-bold">{price()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
