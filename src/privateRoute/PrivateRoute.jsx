import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../components/authContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../shared/loader/Loader';

const PrivateRoute = ({children}) => {

    const {user,loader} =useContext(ContextProvider)
    const location=useLocation();


    if(loader){
        return <Loader></Loader>
    }


    if(!user){
      return <Navigate to='/Login' state={{from:location}} replace/>
    }


    return children;
};

export default PrivateRoute;