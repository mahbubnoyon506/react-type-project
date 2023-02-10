import React from 'react';
type inputProp = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({value, handleChange}: inputProp) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    }
    return (
        <div>
            <input type="text" name="" value={value} onChange={handleInputChange} id="" />
        </div>
    );
};

export default Input;