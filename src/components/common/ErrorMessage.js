import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <div className="text-center text-red-500 mt-4">
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
