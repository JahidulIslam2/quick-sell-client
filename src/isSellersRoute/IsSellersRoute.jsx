import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../components/authContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../shared/loader/Loader';
import useSellers from '../hooks/useSellers';


const IsSellersRoute = ({children}) => {

    const {user,loader} =useContext(ContextProvider)
    const [itsSellers,loadingSeller] = useSellers(user?.email);

    const location=useLocation();


    if(loader || loadingSeller){
        return <Loader></Loader>
    }

    if(user && itsSellers){
        return children;
    }
    return <Navigate to='/signIn' state={{from:location}} replace/>
   

};

export default IsSellersRoute;