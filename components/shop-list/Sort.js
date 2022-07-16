import React from "react";
import Form from 'react-bootstrap/Form';

export default function Sort() {
  return (
    <div className="row">
      <div className="col-md-12 mb-4 d-flex justify-content-end">
        <Form.Select size="lg" style={{ width: '250px' }}>
          <option>Relevance</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
        </Form.Select>
      </div>
    </div>
  );
}
