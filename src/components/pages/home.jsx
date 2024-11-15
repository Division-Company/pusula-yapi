import React, { useState, useEffect } from 'react';
import HomeHeader from "../home/home-header";
import HomeFooter from "../home/home-footer";

// Move photoDataArray outside of the component to avoid re-creation on each render
const photoDataArray = [
  {
    url: "https://i.imgur.com/OGovwwP.gif",
    location: "Kayseri",
    name: "Kayseri Büyükşehir Belediyesi Kadir Has Şehir Stadyumu",
    city: "Kayseri"
  },
  {
    url: "https://i.imgur.com/3GJjdkz.gif",
    location: "Ankara",
    name: "Ankara Etlik Entegre Sağlık Kampüsü",
    city: "Ankara"
  },
  {
    url: "https://i.imgur.com/lnjwL6q.gif",
    location: "Yozgat",
    name: "Yozgat Eğitim ve Araştırma Hastanesi",
    city: "Yozgat"
  },
  {
    url: "https://i.imgur.com/FUCV6Wg.gif",
    location: "Adana",
    name: "Adana Entegre Sağlık Kampüsü",
    city: "Adana"
  },
  {
    url: "https://i.imgur.com/piohHCu.gif",
    location: "Elazığ",
    name: "Elazığ Entegre Sağlık Kampüsü",
    city: "Elazig"
  },
  {
    url: "https://i.imgur.com/UEARwnT.gif",
    location: "Ankara",
    name: "Türkiye Barolar Birliği Hizmet Binası ve Sosyal Tesisleri",
    city: "Ankara"
  },
  {
    url: "https://i.imgur.com/tunYkMB.gif",
    location: "Ankara",
    name: "T.B.M.M. Alüminyum Doğrama ve Yenileme",
    city: "Ankara"
  },
  {
    url: "https://i.imgur.com/pb92Xix.gif",
    location: "Ankara",
    name: "Elvankent Gimsa",
    city: "Ankara"
  },
  {
    url: "https://i.imgur.com/amJ13xo.gif",
    location: "Ankara",
    name: "Devlet Mahallesi Gimsa",
    city: "Ankara"
  },
  {
    url: "https://i.imgur.com/i3GCYJk.gif",
    location: "Ankara",
    name: "Atayıldız Plaza 1",
    city: "Ankara"
  },
  {
    url: "https://i.imgur.com/6X4mNDc.gif",
    location: "Ankara",
    name: "Atayıldız Plaza 2",
    city: "Ankara"
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateImage, setAnimateImage] = useState(true); // Animasyon durumu

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photoDataArray.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []); // Dependency array simplified to run once

  useEffect(() => {
    // Sayfa açıldıktan 2 saniye sonra küçülme animasyonu başlar
    const timer = setTimeout(() => {
      setAnimateImage(false);
    }, 500);
    return () => clearTimeout(timer); // Temizlik işlemi
  }, []);

  const currentPhotoData = photoDataArray[currentIndex];

  return (
    <div className="flex flex-col relative h-screen bg-gray-900">
      <HomeHeader />

      {/* Başlangıçta tüm sayfayı kaplayan ve küçülen görsel */}
      <img
        src={require(`../assets/${currentPhotoData.city}.png`)}
        className={`bg-center transition-all duration-[2000ms] ease-out ${animateImage
          ? 'absolute inset-0 w-full h-[90%] mt-11' // Tüm ekranı kaplayan
          : 'absolute w-[15%] shadow-2xl rounded-lg  h-[18%] right-2 mt-32' // Küçülmüş ve Sabit Çerçeve içinde
          } z-10`}
      />

      <main className="flex-1 flex items-center justify-center">
        {/* Sabit Çerçeve */}
        <div className="overflow-hidden w-full h-full border-4 border-gray-700 relative">
          <div
            className="absolute inset-0 bg-cover bg-center animate-vertical-pan"
            style={{
              backgroundImage: `url('${currentPhotoData.url}')`,
              transformOrigin: "center",
            }}
          ></div>

          {/* Bilgi Kutusu */}
          {!animateImage && (
            <div className="absolute top-2 right-1 bg-gray-800 p-3 shadow-lg rounded-lg border border-gray-700 flex flex-col items-center justify-center">
              <h2 className="text-blue-400 font-semibold text-md">{currentPhotoData.name}</h2>
            </div>
          )}
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
