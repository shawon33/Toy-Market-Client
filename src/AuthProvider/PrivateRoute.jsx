import React, { useContext } from 'react';
import { AuthContext } from './AuthPovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();

     if(loader){
        return <div className='mx-48'><span className="loading loading-bars loading-lg"></span></div>
     }

     if(user?.email){
        return children
     }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
   
};

export default PrivateRoute;