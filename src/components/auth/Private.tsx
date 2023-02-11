import React from 'react';
import Login from './Login';
import { ProfileName } from './Profile';

type PrivateType = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileName>
}

export const Private = ({isLoggedIn, component:Component}: PrivateType) => {
    if(isLoggedIn){
        return <Component name='Noyon' />
    }else{
        return <Login />
    }
};
