import React from 'react'

export default function Header() {
    return (
        <header className="bg-gray-200 p-4 flex justify-around items-center text-sm">
            <button className="py-2 px-4 hover:bg-gray-300">Genel Silikon Kaplama Sistem</button>
            <button className="py-2 px-4 hover:bg-gray-300">Akıllı Cephe</button>
            <button className="py-2 px-4 hover:bg-orange-400 bg-orange-300">Birleştirilmiş Panel Sistem</button>
            <button className="py-2 px-4 hover:bg-gray-300">Özel Tasarım Cephe</button>
            <button className="py-2 px-4 hover:bg-gray-300">Çift Katmanlı Cephe</button>
        </header>
    )
}
