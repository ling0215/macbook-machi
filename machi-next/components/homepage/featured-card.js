import React from 'react';
import styles from './featured.module.scss';


function FeaturedCard({ FeaturedCard }) {
  return (
    <>
    <div className="w-350 no-border f-16 featured-card">
      <Link href="/product/detail" passHref className="no-underline">
        <img
          src="/images/product/list/strawberry-tart-01.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body no-space-x">
          <p className="card-text note-text">新品上市</p>
          <h5 className="card-text fw-bold card-title">草莓優格塔</h5>
          <p className="card-text type-text  mb-2">塔派甜點</p>
          <p className="text-decoration-line-through type-text">NT$1,250 &nbsp;<span className="h-currency bold h-now">NT$1,050</span></p>
        </div>
      </Link>
    </div>
    </>
  );
}

export default ProductCard;
