import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categories =useLoaderData();
    console.log(categories)
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 gap-6 md:card-side my-16 sm:mx-auto">
          {
              categories.map(category => <CategoryCard category={category} key={category._id}></CategoryCard>)
          }
        </div>
    );
};

export default Category;