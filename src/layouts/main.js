import React, { useState } from 'react';
import Sidebar from '../components/sidebar';

const MainLayout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Ana Sayfa');

    const handleMenuClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);
    };

    return (
        <div className="h-screen w-screen flex  bg-gray-50 overflow-hidden">
            {/* Yan Menü */}
            <Sidebar activeSection={activeSection} menuOpen={menuOpen} handleMenuClick={handleMenuClick} />

            {/* Ana İçerik */}
            <main className="flex-1 overflow-y-auto  bg-gray-900 text-white p-4">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
