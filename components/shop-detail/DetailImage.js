import React from "react";
import Image from "next/image";

export default function DetailImage(props) {
  return (
    <div className="col-md-6">
      <Image
        src={props.image}
        width={346}
        height={500}
        layout="responsive"
        alt="Image"
        className="img-fluid"
      />
    </div>
  );
}
