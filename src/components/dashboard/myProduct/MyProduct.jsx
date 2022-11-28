import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { ContextProvider } from './../../authContext/AuthContext';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const { user } = useContext(ContextProvider)
    console.log(user?.email)

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            try {

                const res = await fetch(`http://localhost:5000/myProduct?email=${user?.email}`)
                const data = await res.json();
                return data;

            }
            catch {

            }
        }

    })

    console.log(products)

    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 gap-6 md:card-side my-16 sm:mx-auto">
            {
                products.map((product) => <MyProductCard
                    product={product}
                    key={product._id}>

                </MyProductCard>)
            }
        </div>
    );
};

export default MyProduct;