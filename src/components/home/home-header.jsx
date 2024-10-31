import React from 'react'

export default function HomeHeader() {
    return (
        <header className="flex items-center justify-center bg-gray-800 border-b border-gray-700 py-3">
            <nav className="flex space-x-4 text-gray-400 text-sm">
                <div className="hover:text-blue-400">Silikon Giydirme Cephe</div>
                <div className="hover:text-blue-400">Akıllı Cephe</div>
                <div className="hover:text-blue-400">Panel Sistemi</div>
                <div className="text-blue-400 border-b-2 border-blue-400">Özel Tasarım Cephe</div>
                <div className="hover:text-blue-400">Çift Cilt Cephe</div>
            </nav>
        </header>)
}
