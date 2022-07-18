import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Breadcrumb from "../../components/common/Breadcrumb";
import ProductList from "../../components/shop-list/ProductList";
import Sort from "../../components/shop-list/Sort";
import Pagination from "../../components/shop-list/Pagination";
import Filter from "../../components/shop-list/Filter/Filter";

import PRODUCT_DUMMY from "../../json/products.json";
import { groupBy, sortBy } from "../../utils";

export default function Shop() {
  const router = useRouter();
  const [products, setProducts] = useState(PRODUCT_DUMMY);
  const [sort, setSort] = useState("");
  const [color, setColor] = useState([]);

  const categories = () => groupBy(products, "category");
  const colors = () => groupBy(products, "color");

  const handlerChangeSort = (payload) => setSort(payload);
  const handlerSetColor = (payload) => setColor(payload);

  const filteredProduct = () => {
    let result = products;

    if (sort) {
      if (sort === "-price") return sortBy(products, "price", "asc");
      if (sort === "+price") return sortBy(products, "price", "desc");
      return products;
    }

    if (router.query.category) {
      result = result.filter(
        (product) => product.category === router.query.category
      );
    }

    if (color.length > 0) {
      result = result.filter((product) => color.includes(product.color));
      console.log(result);
    }

    return result.slice(0, 10);
  };

  return (
    <div className="site-wrap">
      <Breadcrumb />

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-9 order-2">
              <Sort changeSort={handlerChangeSort} />

              <ProductList products={filteredProduct()} />
              <Pagination />
            </div>

            <Filter
              categories={categories()}
              colors={colors()}
              changeColor={handlerSetColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
