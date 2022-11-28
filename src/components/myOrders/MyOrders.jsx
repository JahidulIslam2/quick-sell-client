import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ContextProvider } from './../authContext/AuthContext';
import { useState } from 'react';
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { user,setLoader } = useContext(ContextProvider)
    const [ordersData, setOrdersData] = useState()

    useEffect(() => {
        fetch(`https://quick-sell-server.vercel.app/booking?email=${user?.email}`)

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
                                <tr key={order._id}>
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
                                    <td>
                                        {
                                             order.resalePrice && !order.paid &&
                                        <Link to={`/payment/${order._id}`}>
                                        <button className="btn btn-sm bg-red-600">Pay Now</button>
                                        </Link>
                                        }
                                         {
                                            order.resalePrice && order.paid && <span className='text-green-600'>paid</span>
                                        }
                                        </td>
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