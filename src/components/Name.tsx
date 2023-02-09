
import React from 'react';

type person ={
    name: string
}

const Name = (props: person) => {
    return (
        <div>
            <h2>Hello {props.name}, welcome to the site.</h2>
        </div>
    );
};

export default Name;