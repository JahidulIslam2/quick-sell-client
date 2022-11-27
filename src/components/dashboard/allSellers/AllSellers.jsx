import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../shared/loader/Loader';

const AllSellers = () => {

    const {data: sellers =[], isLoading,refetch} =useQuery({
        queryKey: ['sellers'],
        queryFn: async() => {

            const res = await fetch('http://localhost:5000/usersRole/sellers')
            const data = await res.json();
            return data;
        }

    })

    const handleDelete =(id) =>{

        
        fetch(`http://localhost:5000/usersRole/sellers/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                toast.success('Successfully Delete Sellers')
            refetch();
        }
           

        })
    }

    if(isLoading){
        return <Loader></Loader>
    }

    console.log(sellers)

    return (
       
            <div className=" border">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>role</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            sellers?.map((seller, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td><button onClick={()=> handleDelete(seller._id)} className='btn bg-red-700 text-white btn-xs '>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        
    );
};

export default AllSellers;