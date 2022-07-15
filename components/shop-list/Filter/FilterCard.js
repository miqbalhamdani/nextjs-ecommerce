import React from "react";

export default function FilterCard(props) {
  return (
    <div className="border p-4 rounded mb-4">
      <h3 className="mb-3 h6 text-uppercase text-black d-block">
        {props.title}
      </h3>
      {props.children}
    </div>
  );
}
