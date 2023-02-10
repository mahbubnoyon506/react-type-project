import React from 'react';
type buttonProp = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Button = ({handleClick}:buttonProp) => {
    return (
        <div>
            <button onClick={(event) => handleClick(event, 1)}>Click Here</button>
        </div>
    );
};

export default Button;