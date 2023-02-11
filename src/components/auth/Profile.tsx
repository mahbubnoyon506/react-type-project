import React from 'react';
export type ProfileName = {
    name: string
}
const Profile = ({name}:ProfileName) => {
    return (
        <div>
            This is profile page and name is {name}.
        </div>
    );
};

export default Profile;