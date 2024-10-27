import React from 'react'

export default function Sidebar({ activeSection, menuOpen, handleMenuClick }) {
  return (
    <aside
      className="w-1/5 bg-gray-800 text-white flex flex-col p-4"
    >
      <h1 className="text-2xl font-bold mb-6">Pusula Group</h1>
      <nav className="flex flex-col space-y-4">
        {['Ana Sayfa', 'Şirket', 'Faaliyet Alanlarımız', 'Referanslarımız', 'Devam Eden Projeler', 'Süreçler', 'Kariyer', 'İletişim'].map((item) => (
          <div
            key={item}
            onClick={() => handleMenuClick(item)}
            className={`hover:text-orange-400 cursor-pointer ${activeSection === item ? 'text-orange-400' : ''}`}
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  )
}
