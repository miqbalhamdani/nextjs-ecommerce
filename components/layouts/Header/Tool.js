import Link from "next/link";
import React from "react";

export default function Tool() {
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
                <span className="count">2</span>
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
