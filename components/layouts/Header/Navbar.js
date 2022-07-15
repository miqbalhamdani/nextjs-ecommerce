import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menus, setMenu] = useState([
    { name: "Home", url: "/", children: null },
    { name: "About", url: "#", children: null },
    { name: "Shop", url: "/shop", children: null },
    { name: "Catalogue", url: "#", children: null },
    { name: "New Arrivals", url: "#", children: null },
    { name: "Contact", url: "#", children: null },
  ]);

  const menuItem = (menu, key) => (
    <li key={key}>
      <Link href={menu.url}>{menu.name}</Link>
    </li>
  );

  return (
    <ul className="site-menu d-none d-md-block">
      {menus.map((menu, key) => {
        return menuItem(menu, key);
      })}
    </ul>
  );
}
