import React from 'react'

export default function HomeFooter() {
    return (
        <footer className="bg-gray-800 border-t border-gray-700 py-2">
            <div className="flex justify-center space-x-6 text-gray-400 text-xs">
                <div className="hover:text-blue-400">Konut</div>
                <div className="hover:text-blue-400">Akademik</div>
                <div className="hover:text-blue-400">Hükümet</div>
                <div className="hover:text-blue-400 text-blue-400 border-b-2 border-blue-400">Ticari</div>
                <div className="hover:text-blue-400">Kültürel</div>
                <div className="hover:text-blue-400">Spor</div>
                <div className="hover:text-blue-400">Kongre Merkezi</div>
            </div>
        </footer>
    )
}
