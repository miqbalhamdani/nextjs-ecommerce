import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Tool() {
  const router = useRouter();
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const storage = localStorage.getItem("NC_CARTS");

      if (storage) {
        const carts = JSON.parse(storage);
        setCartQty(carts.length);
      }
    };

    updateCart();

    router.events.on("routeChangeStart", updateCart);

    return () => {
      router.events.off("routeChangeStart", updateCart);
    };
  }, []);

  return (
    <div className="col-6 col-md-4 order-3 order-md-3 d-flex justify-content-end">
      <div className="site-top-icons">
        <ul>
          <li>
            <a href="#">
              <span className="icon icon-person"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon icon-heart-o"></span>
            </a>
          </li>
          <li>
            <Link href="/cart">
              <a className="site-cart">
                <span className="icon icon-shopping_cart"></span>
                <span className="count">{cartQty}</span>
              </a>
            </Link>
          </li>
          <li className="d-inline-block d-md-none ms-md-0">
            <a href="#" className="site-menu-toggle js-menu-toggle">
              <span className="icon-menu"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
