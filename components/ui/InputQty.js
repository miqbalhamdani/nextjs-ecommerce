import React, { useEffect, useState } from "react";

export default function InputQty(props) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(props.qty)
  }, [props.qty])

  const addQty = () => {
    const total = qty + 1;
    props.onChange(total);
  };

  const removeQty = () => {
    if (qty === 1) return;

    const total = qty - 1;
    props.onChange(total);
  };

  return (
    <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={removeQty}
        >
          -
        </button>
      </div>
      <input
        type="text"
        className="form-control text-center"
        value={qty}
        style={{ height: "auto" }}
        readOnly
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={addQty}
        >
          +
        </button>
      </div>
    </div>
  );
}
