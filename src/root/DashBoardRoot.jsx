import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ContextProvider } from '../components/authContext/AuthContext';
import useAdmin from '../hooks/useAdmin';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/nav/Navbar';



const DashBoardRoot = () => {

    const { user } = useContext(ContextProvider)
    const [itsAdmin] = useAdmin(user.email)

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            itsAdmin &&
                            <>
                                <li><Link to={'/dashboard/allbuyers'}>All Buyers</Link></li>
                                <li><Link to={'/dashboard/allsellers'}>All Sellers</Link></li>

                            </>
                        }

                        <li><Link to={'/dashboard/addproduct'}>Add Product</Link></li>
                        <li><Link to={'/dashboard/myproduct'}>My Product</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default DashBoardRoot;