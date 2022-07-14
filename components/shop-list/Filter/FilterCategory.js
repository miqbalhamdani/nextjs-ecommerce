import React from "react";
import FilterCard from "./FilterCard";

export default function FilterCategory() {
  return (
    <FilterCard title="Categories">
      <ul className="list-unstyled mb-0">
        <li className="mb-1">
          <a href="#" className="d-flex">
            <span>Men</span> <span className="text-black ms-auto">(2,220)</span>
          </a>
        </li>
        <li className="mb-1">
          <a href="#" className="d-flex">
            <span>Women</span> <span className="text-black ms-auto">(2,550)</span>
          </a>
        </li>
        <li className="mb-1">
          <a href="#" className="d-flex">
            <span>Children</span>{" "}
            <span className="text-black ms-auto">(2,124)</span>
          </a>
        </li>
      </ul>
    </FilterCard>
  );
}
