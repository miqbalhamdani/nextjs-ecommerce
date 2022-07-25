import React from "react";
import { useRouter } from "next/router";

export default function OrderWrapper(props) {
  const router = useRouter();

  const backToShop = () => {
    localStorage.removeItem("NC_ORDER");
    router.push("/shop");
  };

  return (
    <div className="col-md-12">
      <div className="text-center">
        <span className="icon-check_circle display-3 text-success"></span>
        <h2 className="display-3 text-black">Thank you!</h2>
        <p className="lead mb-5">You order was successfuly completed.</p>
      </div>

      {props.children}

      <p className="mt-5 text-center">
        <a onClick={backToShop} className="btn btn-sm btn-primary">
          Back to shop
        </a>
      </p>
    </div>
  );
}
