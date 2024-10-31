import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({ activeSection, handleMenuClick }) {
  const menuItems = [
    { label: 'Ana Sayfa', path: '/' },
    { label: 'Şirket', path: '/company' },
    { label: 'Faaliyet Alanlarımız', path: '/services' },
    { label: 'Referanslarımız', path: '/references' },
    { label: 'Devam Eden Projeler', path: '/ongoing-projects' },
    { label: 'Süreçler', path: '/processes' },
    { label: 'Kariyer', path: '/careers' },
    { label: 'İletişim', path: '/contact' },
  ]

  return (
    <aside className="w-1/5 bg-gray-800 text-white flex flex-col p-4">
      <Link to={"/"} className="text-2xl font-bold mb-6">Pusula Group</Link>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={() => handleMenuClick(item.label)}
            className={`relative flex items-center pl-4 pr-2 py-2 rounded-lg text-lg font-medium transition-all duration-300 cursor-pointer 
              ${activeSection === item.label
                ? 'text-orange-400 bg-gray-700'
                : 'text-gray-300 hover:text-orange-400 hover:bg-gray-700'
              }`}
          >
            {activeSection === item.label && (
              <span className="absolute left-0 h-full w-1 bg-orange-400 rounded-r-md" />
            )}
            <span
              className={`transition-transform duration-300 ${activeSection === item.label ? 'translate-x-1' : 'translate-x-0'
                }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
