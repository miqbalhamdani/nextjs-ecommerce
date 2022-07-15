import React from "react";

export default function Search() {
  return (
    <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
      <form action="" className="site-block-top-search">
        <span className="icon icon-search2"></span>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
