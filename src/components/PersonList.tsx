import React from 'react';

type person = {
    name : {
     first: string,
     last: string
    }[]
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