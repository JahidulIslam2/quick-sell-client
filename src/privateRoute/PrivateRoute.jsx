import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../components/authContext/AuthContext';

const PrivateRoute = () => {

    const {user,loader} =useContext(ContextProvider)

    



    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;