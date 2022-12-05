import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Athcontext } from '../Context/UserContext';

const PraveteRout = ({children}) => {
    const {user,loading} = useContext(Athcontext);
    const location = useLocation();
    if(loading){
        return <div>Loading....</div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PraveteRout; 