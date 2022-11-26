import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ContextProvider } from './../authContext/AuthContext';
import { useState } from 'react';
import { HiOutlineUserCircle } from "react-icons/hi";

const MyOrders = () => {
    const { user,setLoader } = useContext(ContextProvider)
    const [ordersData, setOrdersData] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`)

            .then(res => res.json())
            .then(data => {
                setOrdersData(data)
            })
    }, [user?.email])

    console.log(ordersData)
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ordersData?.map((order, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <th> 
                                         <div className="avatar">
                                        <div className="rounded w-16 h-14">
                                            {
                                               user?.photoURL ?
                                            
                                                <img src={user?.photoURL} alt="" />
                                                :
                                                <HiOutlineUserCircle />
                                              
                                            }
                                        </div>
                                    </div>
                                    </th>
                                    <td>{order?.name}</td>
                                    <td>${order?.resalePrice}</td>
                                    <td><button className="btn btn-sm bg-red-600">Pay Now</button></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;