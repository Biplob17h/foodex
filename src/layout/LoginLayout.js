import React from 'react';
import LoginHeader from '../pages/Shared/Header/LoginHeader';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <LoginHeader></LoginHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;