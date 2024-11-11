import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            <p className="ml-4 text-blue-500">Veriler yükleniyor...</p>
        </div>
    );
};

export default LoadingSpinner;
