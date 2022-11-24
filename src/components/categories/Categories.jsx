import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CategoriesCard from './categoriesCard';



const Categories = () => {
    const [categories,setCategories] =useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/categories`)
        .then( res => res.json())
        .then(data => {
            setCategories(data)
        })
    },[])


    return (
        <div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 gap-6 md:card-side my-16 ">
                
                   {
                    categories?.map(item => <CategoriesCard item={item} key={item._id}></CategoriesCard>)
                   }
                
            </div>
        </div>
    );
};

export default Categories;