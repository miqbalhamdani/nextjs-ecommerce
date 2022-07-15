import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";
import Tool from "./Tool";

export default function Header() {
  return (
    <header className="site-navbar" role="banner">
      <div className="site-navbar-top">
        <div className="container">
          <div className="row align-items-center">
            <Search />
            <Logo />
            <Tool />
          </div>
        </div>
      </div>
      <nav
        className="site-navigation text-right text-md-center"
        role="navigation"
      >
        <div className="container">
          <Navbar />
        </div>
      </nav>
    </header>
  );
}
