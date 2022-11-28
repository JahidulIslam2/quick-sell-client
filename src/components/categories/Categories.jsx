import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CategoriesCard from './categoriesCard';



const Categories = () => {
    const [categories,setCategories] =useState()

    useEffect(()=>{
        fetch(`https://quick-sell-server.vercel.app/categories`)
        .then( res => res.json())
        .then(data => {
            setCategories(data)
        })
    },[])


    return (
        <div>
            <h1 className='text-3xl'>Available Bike Categories </h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 gap-6 md:card-side my-16 mx-auto ">
                
                   {
                    categories?.map(item => <CategoriesCard item={item} key={item._id}></CategoriesCard>)
                   }
                
            </div>
        </div>
    );
};

export default Categories;