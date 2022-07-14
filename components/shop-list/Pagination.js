import React from "react";

export default function Pagination() {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="site-block-27">
          <ul>
            <li>
              <a href="#">&lt;</a>
            </li>
            <li className="active">
              <span>1</span>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">&gt;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
