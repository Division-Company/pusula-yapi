import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { FaBars } from 'react-icons/fa';

const MainLayout = ({ children }) => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Ana Sayfa');

    const handleMenuClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);
    };

    // Close the menu on outside click
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && !event.target.closest('.sidebar') && !event.target.closest('.hamburger-button')) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [menuOpen]);

    // Define paths where the sidebar should stay fixed
    const fixedSidebarPaths = ['/', '/contact'];

    return (
        <div className="h-screen w-screen flex overflow-hidden">
            {/* Hamburger Menu - always visible */}
            <button
                className="hamburger-button hover:opacity-50 p-2 bg-gray-700 opacity-90  text-gray-100 fixed top-0 left-0 z-20"
                onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(!menuOpen);
                }}
            >
                <FaBars size={24} />
            </button> 

            {/* Sidebar - show fixed on specific paths, otherwise toggleable */}
            {(fixedSidebarPaths.includes(location.pathname) || menuOpen) && (
                <div
                    className={`sidebar fixed z-30 lg:relative transform lg:transform-none transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                        } lg:translate-x-0 h-full w-64 bg-slate-600 border-r-2 border-slate-700 border-b-2`}
                >
                    <Sidebar activeSection={activeSection} menuOpen={menuOpen} handleMenuClick={handleMenuClick} />
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-gray-500 text-white lg:pt-0">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
