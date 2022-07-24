import React from "react";
import FilterCategory from "./FilterCategory";
import FilterColor from "./FilterColor";

export default function Filter(props) {
  const handlerChageColor = (payload) => {
    console.log("payload", payload);
    props.changeColor(payload);
  };

  return (
    <div className="col-md-3 order-1 mb-5 mb-md-0">
      <FilterCategory categories={props.categories} />
      <FilterColor
        colors={props.colors}
        changeFilterColor={handlerChageColor}
      />
    </div>
  );
}
