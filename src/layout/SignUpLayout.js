import React from 'react';
import SignUpHeader from '../pages/Shared/Header/SignUpHeader';
import { Outlet } from 'react-router-dom';

const SignUpLayout = () => {
    return (
        <div>
            <SignUpHeader></SignUpHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default SignUpLayout;