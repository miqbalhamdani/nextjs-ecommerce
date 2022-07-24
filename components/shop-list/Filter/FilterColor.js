import React, { useState } from "react";
import FilterCard from "./FilterCard";

export default function FilterColor(props) {
  const [color, setColor] = useState([]);

  const setFilterColor = (event) => {
    if (event.target.checked) {
      setColor((prev) => {
        const newColor = [...prev, event.target.value];

        props.changeFilterColor(newColor);
        return newColor;
      });
    } else {
      const index = color.indexOf(event.target.value);

      setColor((prev) => {
        const newColor = [...prev];
        newColor.splice(index, 1);

        props.changeFilterColor(newColor);
        return newColor;
      });
    }

  };

  const colorItem = (color, index) => (
    <label htmlFor={`color-${color.name}`} className="d-flex" key={index}>
      <input
        type="checkbox"
        id={`color-${color.name}`}
        className="me-2 mt-1"
        value={color.name}
        onChange={setFilterColor}
      />{" "}
      <span className="text-black text-capitalize">
        {color.name} ({color.qty})
      </span>
    </label>
  );

  return (
    <FilterCard title="Color">
      {props.colors.length &&
        props.colors.map((color, index) => colorItem(color, index))}
    </FilterCard>
  );
}
