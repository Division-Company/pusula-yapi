// components/layout/AdminLayout.jsx
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CommonModal from '../components/pages/admin/modal/CommonModal';

const AdminLayout = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const [activeNav, setActiveNav] = useState('basvurular');

    useEffect(() => {
        if (auth.currentUser) {
            setAdminEmail(auth.currentUser.email);
        }
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            openModal('Başarıyla çıkış yapıldı.');
        } catch (error) {
            console.error('Çıkış yaparken hata oluştu:', error);
            openModal('Çıkış yapılamadı. Lütfen tekrar deneyin.');
        }
    };

    const openModal = (message) => {
        setModalMessage(message);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sol Kenar Çubuğu */}
            <aside className="w-64 bg-gradient-to-br from-green-500 to-green-700 p-4 text-white fixed h-full flex flex-col justify-between">
                <div>
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-20 h-20 rounded-full bg-white mb-4">
                            <img src="https://via.placeholder.com/80" alt="Admin Avatar" className="w-full h-full rounded-full" />
                        </div>
                        <h2 className="text-lg font-bold">{adminEmail || 'Admin'}</h2>
                    </div>
                    <nav className="space-y-4">
                        <Link
                            to="/admin/applications"
                            className={`flex items-center space-x-2 w-full text-left px-4 py-2 rounded ${activeNav === 'basvurular' ? 'bg-white text-green-700' : 'text-white hover:bg-green-600'
                                }`}
                        >
                            <FaFileAlt /> <span>Başvurular</span>
                        </Link>
                    </nav>
                </div>
                <footer className="mt-auto">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                    >
                        Çıkış Yap
                    </button>
                </footer>
            </aside>

            {/* Sağ Ana İçerik */}
            <main className="flex-1 ml-64 p-6 overflow-y-auto h-screen">
                <header className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-700">Hoşgeldiniz, {adminEmail || 'Admin'}!</h1>
                        <p className="text-gray-500">Günün Tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
                    </div>
                </header>

                {/* Ana İçerik */}
                <section className="w-full">
                    {children}
                </section>

                {/* Ortak Modal */}
                <CommonModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    title="Bilgilendirme"
                    message={modalMessage}
                />
            </main>
        </div>
    );
};

export default AdminLayout;
