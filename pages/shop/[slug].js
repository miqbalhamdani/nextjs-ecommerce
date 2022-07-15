import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import FeaturedProducts from "../../components/common/FeaturedProducts";
import DetailDescription from "../../components/shop-detail/DetailDescription";
import DetailImage from "../../components/shop-detail/DetailImage";
import PRODUCT_DUMMY from "../../json/products.json";

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const product = PRODUCT_DUMMY.find((item) => item.slug === slug);

  return {
    props: {
      product,
    },
  }
}

export default function _slug(props) {
  return (
    <div className="site-wrap">
      <Breadcrumb />

      <div className="site-section">
        <div className="container">
          <div className="row">
            <DetailImage image={props.product.image} />
            <DetailDescription product={props.product} />
          </div>
        </div>
      </div>

      <FeaturedProducts />
    </div>
  );
}
