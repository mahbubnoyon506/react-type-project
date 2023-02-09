import React from 'react';
type person = {
    name: {
        firstName: string;
        lastName: string
    }
}

const Guest = ({name}: person) => {
    return (
        <div>
            Our guest name is {name.firstName} {name.lastName}
        </div>
    );
};

export default Guest;