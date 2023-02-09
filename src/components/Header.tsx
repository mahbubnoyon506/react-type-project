import React from 'react';
type childrenProp = {
    children : string
}
const Header = ({children}:childrenProp) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Header;