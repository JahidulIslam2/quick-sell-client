import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import CategoriesCard from './categoriesCard';
import Loader from './../../shared/loader/Loader';



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
        <div className=''>
            <h1 className='text-3xl'>Available Bike Categories </h1>
            <div className=" grid lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 gap-4 my-16 mx-auto  justify-items-center">
                
                   {
                    categories?.map(item => <CategoriesCard item={item} key={item._id}></CategoriesCard>)
                   }
                
            </div>
        </div>
    );
};

export default Categories;