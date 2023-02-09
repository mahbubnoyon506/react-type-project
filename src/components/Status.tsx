import React from 'react';
type StatusType = {
    status: 'loading' | 'success' | 'error'
}

const Status = ({status}:StatusType) => {
    return (
        <div>
            <p>Status is {status}</p>
        </div>
    );
};

export default Status;