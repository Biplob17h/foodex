import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import AuthHeader from '../pages/Shared/Header/AuthHeader';

const AuthenticationLayout = () => {
    
    return (
        <div>
            <AuthHeader></AuthHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthenticationLayout;