import React from "react";
import Image from "next/image";

export default function DetailImage() {
  return (
    <div className="col-md-6">
      <Image
        src="/images/products/cloth_2.jpg"
        width={600}
        height={425}
        alt="Image"
        class="img-fluid"
      />
    </div>
  );
}
