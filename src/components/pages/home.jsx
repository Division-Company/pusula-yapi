import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-900">

      {/* Üst Menü */}
      <header className="flex items-center justify-center bg-gray-800 border-b border-gray-700 py-3">
        <nav className="flex space-x-4 text-gray-400 text-sm">
          <a href="#" className="hover:text-blue-400">Silikon Giydirme Cephe</a>
          <a href="#" className="hover:text-blue-400">Akıllı Cephe</a>
          <a href="#" className="hover:text-blue-400">Panel Sistemi</a>
          <a href="#" className="text-blue-400 border-b-2 border-blue-400">Özel Tasarım Cephe</a>
          <a href="#" className="hover:text-blue-400">Çift Cilt Cephe</a>
        </nav>
      </header>

      {/* Ana İçerik Alanı */}
      <main className="flex-1 flex items-center justify-center">
        {/* Sabit Çerçeve */}
        <div className="w-[70vw] h-[70vh] overflow-hidden border-4 border-gray-700 relative">
          {/* Hareketli Fotoğraf */}
          <div
            className="absolute inset-0 bg-cover bg-center animate-vertical-pan"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?cs=srgb&dl=pexels-pixabay-258160.jpg&fm=jpg')",
              transformOrigin: "center",
            }}
          ></div>
        </div>

        {/* Harita ve Metin Kutusu */}
        <div className="absolute top-10 right-10 bg-gray-800 p-4 shadow-lg rounded-lg border border-gray-700">
          <h2 className="text-blue-400 font-semibold">15 RENWICK STREET</h2>
          <p className="text-sm text-gray-400">New York City</p>
        </div>
      </main>

      {/* Alt Menü */}
      <footer className="bg-gray-800 border-t border-gray-700 py-2">
        <div className="flex justify-center space-x-6 text-gray-400 text-xs">
          <a href="#" className="hover:text-blue-400">Konut</a>
          <a href="#" className="hover:text-blue-400">Akademik</a>
          <a href="#" className="hover:text-blue-400">Hükümet</a>
          <a href="#" className="hover:text-blue-400 text-blue-400 border-b-2 border-blue-400">Ticari</a>
          <a href="#" className="hover:text-blue-400">Kültürel</a>
          <a href="#" className="hover:text-blue-400">Spor</a>
          <a href="#" className="hover:text-blue-400">Kongre Merkezi</a>
        </div>
      </footer>
    </div>
  );
}
