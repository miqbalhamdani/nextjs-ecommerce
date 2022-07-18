import React from "react";
import Form from "react-bootstrap/Form";

export default function Sort(props) {
  const handlerChangeSort = (payload) => {
    props.changeSort(payload.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-12 mb-4 d-flex justify-content-end">
        <Form.Select
          size="lg"
          style={{ width: "250px" }}
          onChange={handlerChangeSort}
        >
          <option value="relevance">Relevance</option>
          <option value="-price">Price, low to high</option>
          <option value="+price">Price, high to low</option>
        </Form.Select>
      </div>
    </div>
  );
}
