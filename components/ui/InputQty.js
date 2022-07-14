import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function InputQty() {
  return (
    <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              type="button"
            >
              -
            </button>
          </div>
          <input
            type="text"
            className="form-control text-center"
            value="1"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
            >
              +
            </button>
          </div>
        </div>
  );
}
