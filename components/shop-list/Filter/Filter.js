import React from "react";
import FilterCategory from "./FilterCategory";
import FilterSize from "./FilterSize";

export default function Filter() {
  return (
    <div className="col-md-3 order-1 mb-5 mb-md-0">
      <FilterCategory />
      <FilterSize />
    </div>
  );
}
