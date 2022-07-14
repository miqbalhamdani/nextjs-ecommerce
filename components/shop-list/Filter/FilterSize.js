import React from "react";
import FilterCard from "./FilterCard";

export default function FilterSize() {
  return (
    <FilterCard title="Size">
      <label htmlFor="s_sm" className="d-flex">
        <input type="checkbox" id="s_sm" className="me-2 mt-1" />{" "}
        <span className="text-black">Small (2,319)</span>
      </label>
      <label htmlFor="s_md" className="d-flex">
        <input type="checkbox" id="s_md" className="me-2 mt-1" />{" "}
        <span className="text-black">Medium (1,282)</span>
      </label>
      <label htmlFor="s_lg" className="d-flex">
        <input type="checkbox" id="s_lg" className="me-2 mt-1" />{" "}
        <span className="text-black">Large (1,392)</span>
      </label>
    </FilterCard>
  );
}
