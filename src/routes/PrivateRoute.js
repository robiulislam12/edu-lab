import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    
    if(loading){
        return <h1 className='text-3xl font-bold text-center mt-12'>Loading....</h1>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else{
        
        return children;
    }
    
}

export default PrivateRoute;