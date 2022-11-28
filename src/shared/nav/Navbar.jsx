import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../../components/authContext/AuthContext';
import useBuyers from './../../hooks/useBuyers';



const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const { logOutMethod, user } = useContext(ContextProvider)
    const [itsBuyers] = useBuyers(user?.email)


    const HandleLogOut = () => {
        logOutMethod()
            .then(() => { })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <>

            <nav className="w-full bg-regal-blue text-white shadow-lg">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">

                            <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                            </label>

                            <Link to='/'>
                                <h2 className="text-2xl font-bold flex gap-4 justify-center items-center"><img src="motorbike.png"
                                    className='h-12' alt="" />Quick Sell</h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white font-bold hover:text-blue-600">
                                    <Link to='/'>Home</Link>
                                </li>
                                {
                                    itsBuyers &&
                                    <>
                                        <li className="text-white font-bold hover:text-blue-600">
                                            <Link to='/myOrders'>My Orders</Link>
                                        </li>

                                    </>
                                }
                                <li className="text-white font-bold hover:text-blue-600">
                                    <Link to='/dashboard'>Dashboard</Link>
                                </li>
                                <li className="text-white font-bold hover:text-blue-600">
                                    <Link to='/blog'>Blog</Link>
                                </li>
                                <li className="text-white font-bold hover:text-blue-600">
                                    {
                                        user?.email ?
                                            <button onClick={HandleLogOut} className="btn btn-ghost text-red-600">Sign Out</button>
                                            :
                                            <Link to='/signIn'>Sign In</Link>


                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;