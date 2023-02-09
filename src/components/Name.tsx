
import React from 'react';

type person ={
    name: string;
    messages: number;
    isLoggedIn?: boolean
}

const Name = ({name, messages}: person) => {
    return (
        <div>
            <h2>Hello {name}, welcome to the site.</h2>
            <p>You have {messages} unread message.</p>
        </div>
    );
};

export default Name;