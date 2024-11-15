import React from 'react';

export default function HomeHeader() {
    return (
        <header className="flex  items-center justify-center bg-gray-800 border-b border-gray-700 py-3 px-4">
            <nav className="flex space-x-4 text-gray-400 text-sm overflow-x-hidden">
                <div className="flex-shrink-0 hover:text-blue-400 opacity-100 transition-opacity duration-500">Silikon Giydirme Cephe</div>
                <div className="flex-shrink-0 hover:text-blue-400 opacity-90 transition-opacity duration-500">Akıllı Cephe</div>
                <div className="flex-shrink-0 hover:text-blue-400 opacity-80 transition-opacity duration-500">Panel Sistemi</div>
                <div className="flex-shrink-0 hover:text-blue-400 opacity-70 transition-opacity duration-500">Özel Tasarım Cephe</div>
                <div className="flex-shrink-0 hover:text-blue-400 opacity-60 transition-opacity duration-500">Çift Cilt Cephe</div>
            </nav>
        </header>
    );
}
