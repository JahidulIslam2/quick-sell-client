import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { ContextProvider } from './../../authContext/AuthContext';
import MyProductCard from './MyProductCard';
import { toast } from 'react-hot-toast';
import Loader from './../../../shared/loader/Loader';

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


    
    const handleDeleteProduct =(id) =>{

        fetch(`http://localhost:5000/myProduct/${id}`,{
            method: 'DELETE',
          
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                toast.success('Successfully deleted')
                refetch();

            }
           
        })

    }

    if (isLoading) {
     return <Loader></Loader>
    }


    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 gap-6 md:card-side my-16 ">
            {
                products.map((product) => <MyProductCard
                    product={product}
                    key={product._id}
                    handleDeleteProduct={handleDeleteProduct}>

                </MyProductCard>)
            }
        </div>
    );
};

export default MyProduct;