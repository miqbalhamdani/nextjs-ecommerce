import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
      <div className="site-logo">
        <Link href="/">Shoppers</Link>
      </div>
    </div>
  );
}
