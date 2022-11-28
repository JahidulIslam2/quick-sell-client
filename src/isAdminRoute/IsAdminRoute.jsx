import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../components/authContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../shared/loader/Loader';
import useAdmin from './../hooks/useAdmin';

const IsAdminRoute = ({children}) => {

    const {user,loader} =useContext(ContextProvider)
    const [itsAdmin,adminLoader] = useAdmin(user?.email);

    const location=useLocation();


    if(loader || adminLoader){
        return <Loader></Loader>
    }

    if(user && itsAdmin){
        return children;
    }
    return <Navigate to='/signIn' state={{from:location}} replace/>
   

};

export default IsAdminRoute;