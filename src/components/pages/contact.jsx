import React from 'react'

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      {/* Logo Section */}
      <div className="mb-8 text-center">
        <img src="/path-to-your-logo.png" alt="Pusula Group Logo" className="h-20 mb-4" /> {/* Replace with the actual logo path */}
        <h1 className="text-4xl font-bold text-orange-500">Pusula Group</h1>
      </div>

      {/* Contact Information Section in Full-Width Box */}
      <div className="w-full max-w-3xl bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">İletişim</h2>
        <p className="text-lg font-semibold mb-4 text-center">
          <span className="block">İvedik OSB. Mahallesi</span>
          <span className="block">1476 Cadde No: 8/26</span>
          <span className="block">Yenimahalle/ANKARA</span>
        </p>
        <div className="text-lg font-semibold text-center">
          <p className="text-orange-400 mb-2">Telefon:</p>
          <p className="hover:text-orange-400 cursor-pointer transition-colors">+90 312 394 43 21</p>
          <p className="hover:text-orange-400 cursor-pointer transition-colors">+90 312 394 43 22</p>
        </div>
      </div>
    </div>
  )
}
