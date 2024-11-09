import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import CVListPage from './CVListPage';
import CVListContainer from './CVListContainer';

export default function AdminPage() {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert('Çıkış yapıldı');
        } catch (error) {
            console.error('Çıkış yaparken hata oluştu:', error);
            alert('Çıkış yapılamadı. Lütfen tekrar deneyin.');
        }
    };

    return (
        <div>
            <h1>admin-page</h1>
            <CVListContainer/>
            <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4">
                Logout
            </button>
        </div>
    );
}
