import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-gray-800 min-h-screen p-8 md:p-16 lg:p-32'>
            <Outlet />
        </div>
    );
};

export default Main;