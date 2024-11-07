import React from 'react'

export default function OngoingProjects() {
  const projeler = [
    {
      id: 1,
      isim: 'Proje Adı 1',
      aciklama: 'Bu, devam eden projelerden biri hakkında kısa bir açıklama.',
      resim: 'https://via.placeholder.com/300', // Örnek resim URL'si
    },
    {
      id: 2,
      isim: 'Proje Adı 2',
      aciklama: 'Bu, devam eden projelerden biri hakkında kısa bir açıklama.',
      resim: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      isim: 'Proje Adı 3',
      aciklama: 'Bu, devam eden projelerden biri hakkında kısa bir açıklama.',
      resim: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Devam Eden Projeler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projeler.map((proje) => (
          <div
            key={proje.id}
            className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={proje.resim}
              alt={proje.isim}
              className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{proje.isim}</h2>
              <p className="text-gray-400 mb-4">{proje.aciklama}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};