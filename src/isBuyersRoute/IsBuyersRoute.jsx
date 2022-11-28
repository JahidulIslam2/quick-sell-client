import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextProvider } from '../components/authContext/AuthContext';
import useBuyers from '../hooks/useBuyers';
import Loader from '../shared/loader/Loader';

const IsBuyersRoute = ({children}) => {

    const {user,loader} =useContext(ContextProvider)
    const [itsBuyers,loadingBuyers] =useBuyers(user?.email)


    const location =useLocation();

    if(loader || loadingBuyers){
        return <Loader></Loader>
    }

    if(user && itsBuyers){
        return children
    }
    return <Navigate to='/signIn' state={{from:location}} replace />
};

export default IsBuyersRoute;