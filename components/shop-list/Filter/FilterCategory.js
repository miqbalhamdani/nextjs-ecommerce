import Link from "next/link";
import React from "react";
import FilterCard from "./FilterCard";

export default function FilterCategory(props) {
  const categoryItem = (category) => (
    <li className="mb-1">
      <Link href={`/shop?category=${category.name}`}>
        <a className="d-flex">
          <span className="text-capitalize">{category.name}</span>
          <span className="text-black ms-auto">({category.qty})</span>
        </a>
      </Link>
    </li>
  );

  return (
    <FilterCard title="Categories">
      <ul className="list-unstyled mb-0">
        {props.categories.length &&
          props.categories.map((category) => categoryItem(category))}
      </ul>
    </FilterCard>
  );
}
