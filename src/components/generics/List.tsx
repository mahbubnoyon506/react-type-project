import React from 'react';
// type ListProp = {
//     items: string[] | number[]
//     onClick: (value:string | number) => void
// }
type ListProp<T> = {
    items: T[]
    onClick: (value: T) => void
}
const List = <T extends {}>({items, onClick}:ListProp<T> ) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return(
                    <div key={index} onClick={() => onClick(item)}></div>
                )
            })}
        </div>
    );
};

export default List;