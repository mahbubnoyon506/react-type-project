import React from 'react';
type oscarProp = {
    children : React.ReactNode
}
const Oscar = ({children}:oscarProp) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Oscar;