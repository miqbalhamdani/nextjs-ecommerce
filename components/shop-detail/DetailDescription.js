import React from "react";
import InputQty from "../ui/InputQty";

export default function DetailDescription() {
  return (
    <div className="col-md-6">
      <h2 className="text-black">Polo T-Shirt</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
        vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae
        expedita veritatis nesciunt doloremque sint asperiores fuga voluptas,
        distinctio, aperiam, ratione dolore.
      </p>
      <p className="mb-4">
        Ex numquam veritatis debitis minima quo error quam eos dolorum quidem
        perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus
        molestias omnis reiciendis perspiciatis illum hic magni iste, velit
        aperiam quis.
      </p>
      <p>
        <strong className="text-primary h4">$50.00</strong>
      </p>
      <div className="mb-5">
        <InputQty />
      </div>

      <p>
        <a href="cart.html" className="buy-now btn btn-sm btn-primary">
          Add To Cart
        </a>
      </p>
    </div>
  );
}
