import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../../shared/loader/Loader';

const AllBuyers = () => {

    const { data: users =[] ,isLoading,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://quick-sell-server.vercel.app/usersRole/buyers')
            const data = await res.json();
            return data
        }
    })

    //delete buyers
    const handleDelete =(id) => {

        fetch(`https://quick-sell-server.vercel.app/usersRole/buyers/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                toast.success('Successfully Delete Buyers')
            refetch();
        }
           

        })


    }

    if (isLoading) {
        
        return <Loader></Loader>

    }

    return (
        <div>
            <div className="">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user,i) => <tr className="hover" key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button onClick={()=> handleDelete(user._id)} className='btn bg-red-700 text-white btn-xs '>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;