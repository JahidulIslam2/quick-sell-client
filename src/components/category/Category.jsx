import { useLoaderData } from 'react-router-dom';
import Bookingmodal from '../bookingModal/Bookingmodal';
import CategoryCard from './CategoryCard';
import { useState } from 'react';


const Category = () => {
    const categories = useLoaderData();
    const [data,setData]=useState(null)

    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 gap-6 md:card-side my-16 sm:mx-auto">
            {
                categories.map(category => <CategoryCard category={category} key={category._id}
                    setData={setData}
                ></CategoryCard>)
            }

            <div>
            </div>

            {
                data &&
                <Bookingmodal data={data} setData={setData}></Bookingmodal>

            }

        </div>
    );
};

export default Category;