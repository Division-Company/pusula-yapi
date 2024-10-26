import React from 'react';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Yan Menü */}
      <aside className="w-1/5 bg-gray-800 text-white flex flex-col items-start p-4">
        <h1 className="text-2xl font-bold mb-6">Metal Yapı</h1>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-orange-400">Ana Sayfa</a>
          <a href="#" className="hover:text-orange-400">Şirket</a>
          <a href="#" className="hover:text-orange-400">Referanslar</a>
          <a href="#" className="hover:text-orange-400">Devam Eden Projeler</a>
          <a href="#" className="hover:text-orange-400">Süreçler</a>
          <a href="#" className="hover:text-orange-400">Kariyer</a>
          <a href="#" className="hover:text-orange-400">İletişim</a>
        </nav>
      </aside>

      {/* Ana İçerik */}
      <div className="flex flex-col flex-grow">
        {/* Üst Menü */}
        <header className="bg-gray-200 p-4 flex justify-around items-center text-sm">
          <button className="py-2 px-4 hover:bg-gray-300">Genel Silikon Kaplama Sistem</button>
          <button className="py-2 px-4 hover:bg-gray-300">Akıllı Cephe</button>
          <button className="py-2 px-4 hover:bg-orange-400 bg-orange-300">Birleştirilmiş Panel Sistem</button>
          <button className="py-2 px-4 hover:bg-gray-300">Özel Tasarım Cephe</button>
          <button className="py-2 px-4 hover:bg-gray-300">Çift Katmanlı Cephe</button>
        </header>

        {/* Ana Görsel Bölümü */}
        <main className="flex-grow bg-white p-8 relative">
          <div className="relative flex items-center justify-center">
            <img src="your-image-url.jpg" alt="Bina Görseli" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-md text-lg font-semibold">
              DONBASS ARENA
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-light text-gray-700">2023 yılına kadar dünyanın en iyi cephe şirketi olmayı hedefliyoruz</p>
            <div className="bg-gray-300 p-2 rounded">
              <span className="text-xs">Donetsk</span>
              <img src="map-image-url.jpg" alt="Harita" className="w-16 h-16 rounded-md" />
            </div>
          </div>
        </main>

        {/* Alt Menü */}
        <footer className="bg-gray-800 text-white p-4 flex justify-between items-center text-xs">
          <div className="flex space-x-4">
            <a href="#">Bilgi Toplumu Hizmetleri</a>
            <a href="#">KVKK</a>
            <a href="#">PDP</a>
          </div>
          <div className="flex space-x-4">
            <a href="#">Yasal Sorumluluklar</a>
            <a href="#">Modern Kölelik Bildirimi</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
