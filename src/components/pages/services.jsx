import React from 'react';

export default function Services() {
  const services = [
    "Yatay düşey kapaklı giydirme cepheler",
    "Yarı kapaklı giydirme cepheler",
    "Silikon giydirme cepheler",
    "Çelik takviyeli alüminyum giydirme cepheler",
    "Panel giydirme cepheler",
    "Transparan giydirme cepheler (spider Systems)",
    "Kompozit panel cephe kaplamaları",
    "Alüminyum levha cephe kaplamaları",
    "Compact laminat cephe kaplamaları",
    "Terra cotta tuğla cephe kaplamaları",
    "Alüminyum pencere ve kapılar",
    "Ahşap görünümlü alüminyum pencere ve kapılar",
    "Kurşun geçirmez alüminyum pencere ve kapılar",
    "Kurşun geçirmez alüminyum ce camlı doğramalar",
    "F30 s60 s90 yangına dayanıklı alüminyum sistemler",
    "Camlı kapılar",
    "Işıklık sistemleri",
    "Kış bahçesi sistemleri",
    "Özel tasarım giriş kanopileri",
    "Otomatik kayar ve dairesel - kanat açılır kapılar",
    "Otomatik ve manuel döner kapılar",
    "Otomatik hangar kapıları",
    "Sabit ve hareketli güneş kırıcı sistemler",
    "Poliüretan sandviç panel çatı ve cephe kaplamaları",
    "BGS kenetli çatı ve cephe kaplamaları",
    "Çelik konstrüksiyon"
  ];

  return (
    <div className="bg-slate-500 text-gray-300 min-h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl text-orange-400 font-bold mb-12 animate-fadeIn">Faaliyet Alanlarımız</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
          >
            <h3 className="text-xl font-semibold text-orange-300 mb-2">{service}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
