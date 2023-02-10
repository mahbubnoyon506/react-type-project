import React from 'react';
import { Name } from './alltypes/person.type';

type person = {
    name : Name[]
}

const PersonList = ({name}:person) => {

    return (
        <div>
            {name.map((name, i) => {
                return (
                    <p key={i}>{name.first} {name.last}</p>
                )
            })}
        </div>
    );
};

export default PersonList;