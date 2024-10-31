import React, { useState, useEffect } from 'react';
import LocationMap from '../LocationMap';

export default function Home() {
  const photoDataArray = [
    {
      url: "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202309150915591-img.jpg",
      year: 2021,
      location: "Istanbul",
      coordinates: [41.0082, 28.9784],
      name: "Ülker Fenerbahçe Şükrü Saracoğlu Stadyumu",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EttD5MTn9hgOD-PrGkB756lnqGE44ZfYQQ&s",
      year: 2020,
      location: "Paris",
      coordinates: [48.864716, 2.349014],
      name: "Eyfel Kulesi",
    },
    {
      url: "https://assets.cityexperiences.com/wp-content/uploads/2022/12/Golden-Gate-Bridge.jpg",
      year: 2019,
      location: "San Francisco",
      coordinates: [-122.40113866533824, 37.78929917611065],
      name: "Golden Gate Köprüsü",
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhotoData, setCurrentPhotoData] = useState(photoDataArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photoDataArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [photoDataArray.length]);

  // currentIndex değiştikçe currentPhotoData güncelleniyor
  useEffect(() => {
    setCurrentPhotoData(photoDataArray[currentIndex]);
  }, [currentIndex, photoDataArray]);

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <header className="flex items-center justify-center bg-gray-800 border-b border-gray-700 py-3">
        <nav className="flex space-x-4 text-gray-400 text-sm">
          <div className="hover:text-blue-400">Silikon Giydirme Cephe</div>
          <div className="hover:text-blue-400">Akıllı Cephe</div>
          <div className="hover:text-blue-400">Panel Sistemi</div>
          <div className="text-blue-400 border-b-2 border-blue-400">Özel Tasarım Cephe</div>
          <div className="hover:text-blue-400">Çift Cilt Cephe</div>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center">
        {/* Sabit Çerçeve */}
        <div className="w-[70vw] h-[70vh] overflow-hidden border-4 border-gray-700 relative">
          <div
            className="absolute inset-0 bg-cover bg-center animate-vertical-pan"
            style={{
              backgroundImage: `url('${currentPhotoData.url}')`,
              transformOrigin: "center",
            }}
          ></div>
        </div>

        {/* Harita ve Bilgi Kutu Tasarımı */}
        <div className="absolute top-10 right-10 flex flex-col space-y-2 items-center">
          {/* Harita Kutusu */}
          <div className="bg-gray-800 p-2 shadow-lg rounded-lg border border-gray-700 w-40 h-40 flex items-center justify-center">
            <LocationMap
              location={currentPhotoData.location}
              coordinates={currentPhotoData.coordinates}
            />
          </div>

          {/* Bilgi Kutusu */}
          <div className="bg-gray-800 p-3 shadow-lg rounded-lg border border-gray-700 w-40 h-40 flex flex-col items-center justify-center">
            <h2 className="text-blue-400 font-semibold text-md">{currentPhotoData.name}</h2>
            <p className="text-gray-400">{currentPhotoData.location}</p>
            <p className="text-xs text-gray-500">Yıl: {currentPhotoData.year}</p>
          </div>
        </div>
      </main>

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
    </div>
  );
}
