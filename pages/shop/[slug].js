import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import FeaturedProducts from "../../components/common/FeaturedProducts";
import DetailDescription from "../../components/shop-detail/DetailDescription";
import DetailImage from "../../components/shop-detail/DetailImage";

export default function _slug() {
  return (
    <div className="site-wrap">
      <Breadcrumb />

      <div className="site-section">
        <div className="container">
          <div className="row">
            <DetailImage />
            <DetailDescription />
          </div>
        </div>
      </div>

      <FeaturedProducts />
    </div>
  );
}
