import React, { useState } from 'react'
import Sidebar from '../components/sidebar';

const MainLayout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Referanslarımız');

    const handleMenuClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);
    };

    return (

        <div className="flex  min-h-screen bg-gray-50 overflow-hidden">
            {/* Yan Menü */}
            <Sidebar activeSection={activeSection} menuOpen={menuOpen} handleMenuClick={handleMenuClick} />
            {/* Hamburger Menü Butonu */}
            {/* <button
        onClick={toggleMenu}
        className="absolute top-4 left-4 md:hidden z-20 p-2 bg-gray-800 text-white rounded-md"
      >
        ☰
      </button> */}
            {/* Ana İçerik */}
            {/* <Content activeSection={activeSection} /> */}
            <main className='w-full bg-gray-900  text-white'>{children}</main>
        </div>
    );
};

export default MainLayout;