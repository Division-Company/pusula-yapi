import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OngoingProjects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: 'Fethiye Güllük',
      img: 'https://i.imgur.com/xeWecIe.jpeg',
      images: [
        'https://i.imgur.com/b8N1EHo.jpeg',
        'https://i.imgur.com/ActXZVG.jpeg',
        'https://i.imgur.com/HDujsxl.jpeg',
      ],
      title: 'Fethiye Projesi',
      subTitle: 'Ege Bölgesi İnşaatı',
    },
    {
      id: 2,
      name: 'Batı Koleji Batıkent',
      img: 'https://i.imgur.com/ITUX6sL.jpeg',
      images: [
        'https://i.imgur.com/ITUX6sL.jpeg',
        'https://i.imgur.com/wcD6foz.jpeg',
        'https://i.imgur.com/2nK5ni0.jpeg',
        'https://i.imgur.com/WLHrgB5.jpeg',
        'https://i.imgur.com/RiUpwS6.jpeg',
      ],
      title: 'Batı Koleji',
      subTitle: 'Eğitim Kurumu İnşaatı',
    },
    {
      id: 3,
      name: 'Ankara Nokta Şara Grup',
      img: 'https://i.imgur.com/15CT6Hw.jpeg',
      images: [
        'https://i.imgur.com/15CT6Hw.jpeg',
        'https://i.imgur.com/8DwyzAy.jpeg',
        'https://i.imgur.com/CdXazoZ.jpeg',
      ],
      title: 'Nokta Şara Projesi',
      subTitle: 'Başkentte Prestijli Yapı',
    },
    {
      id: 4,
      name: 'Kutaylar AŞ Renault Bayii Fethiye',
      img: 'https://imgur.com/P5kERR4.jpeg',
      images: [
        'https://imgur.com/P5kERR4.jpeg',
        'https://i.imgur.com/OW5fzjw.png',
        'https://i.imgur.com/YHOf25z.jpeg',
      ],
      title: 'Renault Bayii',
      subTitle: 'Otomotiv Bayii Binası',
    },
    {
      id: 5,
      name: 'Muğla Ortaca Çok Amaçlı Salonlar',
      img: 'https://i.imgur.com/6ouINg2.jpeg',
      images: [
        'https://i.imgur.com/6ouINg2.jpeg',
        'https://i.imgur.com/8UZ29pz.jpeg',
        'https://i.imgur.com/pVt6XPR.jpeg',
      ],
      title: 'Ortaca Salonlar',
      subTitle: 'Toplantı ve Etkinlik Alanları',
    },
    {
      id: 6,
      name: 'Fethiye Özyer Merkez Ofis',
      img: 'https://i.imgur.com/WK1jgOi.png',
      images: [
        'https://i.imgur.com/WK1jgOi.png',
        'https://i.imgur.com/K2D78LF.jpeg',
        'https://i.imgur.com/vz8JwB4.jpeg',
      ],
      title: 'Merkez Ofis Projesi',
      subTitle: 'Fethiye Ofis Yapısı',
    },

  ];
  return (
    <div className="bg-slate-500 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Devam Eden Projeler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              navigate(`/img-detail/${item.id}`, {
                state: { item },
              })
            }
            className="group relative bg-slate-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
