import React from "react";

export default function Sort() {
  return (
    <div className="row">
      <div className="col-md-12 mb-4 d-flex justify-content-end">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary btn-sm dropdown-toggle"
            id="dropdownMenuReference"
            data-toggle="dropdown"
          >
            Reference
          </button>
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuReference"
          >
            <a className="dropdown-item" href="#">
              Relevance
            </a>
            <a className="dropdown-item" href="#">
              Name, A to Z
            </a>
            <a className="dropdown-item" href="#">
              Name, Z to A
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Price, low to high
            </a>
            <a className="dropdown-item" href="#">
              Price, high to low
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
