import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OngoingProjects() {
  const navigate = useNavigate();

  const projeler = [
    {
      id: 1,
      isim: 'Bodrum Güllük',
      resim: 'https://i.imgur.com/xeWecIe.jpeg',
    },
    {
      id: 2,
      isim: 'Batı Koleji Batıkent',
      resim: 'https://i.imgur.com/ITUX6sL.jpeg',
    },
    {
      id: 3,
      isim: 'Ankara Nokta Şara Grup',
      resim: 'https://i.imgur.com/15CT6Hw.jpeg',
    },
    {
      id: 4,
      isim: 'Kutaylar AŞ  Renault Bayii Fethiye',
      resim: 'https://imgur.com/P5kERR4.jpeg',
    },
    {
      id: 5,
      isim: 'Muğla Ortaca Çok Amaçlı Salonlar',
      resim: 'https://i.imgur.com/6ouINg2.jpeg',
    },
    {
      id: 6,
      isim: 'Fethiye Özyer Merkez Ofis',
      resim: 'https://i.imgur.com/WK1jgOi.png',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Devam Eden Projeler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projeler.map((proje) => (
          <div
            key={proje.id}
            onClick={() =>
              navigate(`/img-detail/${proje.id}`, {
                state: { proje },
              })
            }
            className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <img
              src={proje.resim}
              alt={proje.isim}
              className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{proje.isim}</h2>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
