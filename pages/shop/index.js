import React from 'react'
import Breadcrumb from "../../components/common/Breadcrumb";
import ProductList from '../../components/shop-list/ProductList'
import Sort from '../../components/shop-list/Sort'
import Pagination from '../../components/shop-list/Pagination'
import Filter from '../../components/shop-list/Filter/Filter'

export default function shop() {
  return (
    <div className="site-wrap">
      <Breadcrumb />

      <div className="site-section">
        <div className="container">

          <div className="row mb-5">
            <div className="col-md-9 order-2">
              <Sort />
              <ProductList />
              <Pagination />
            </div>

            <Filter />
          </div>

        </div>
      </div>
    </div>
  )
}
