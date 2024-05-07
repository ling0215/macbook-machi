import React from 'react';
import ProductCard from './product-card';

export default function ProductList({ products }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} name={product.name} />
      ))}
    </div>
  );
}