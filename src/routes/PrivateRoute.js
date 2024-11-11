import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 border-4 border-t-4 border-green-500 rounded-full animate-spin"></div>
                <span className="text-gray-700 font-semibold">Yükleniyor...</span>
            </div>
        </div>
    );


    return user ? children : <Navigate to="/admin" />;
};

export default PrivateRoute