import React from 'react';
import CourseCard from './course-card';

export default function CourseList({ products }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {products.map(product => (
        <CourseCard key={product.id} product={product} name={product.name} />
      ))}
    </div>
  );
}