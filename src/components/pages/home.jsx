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
  // Diğer veri öğeleri burada...
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
    // Sayfa açıldıktan 0.5 saniye sonra küçülme animasyonu başlar
    const timer = setTimeout(() => {
      setAnimateImage(false);
    }, 500);
    return () => clearTimeout(timer); // Temizlik işlemi
  }, []);

  const currentPhotoData = photoDataArray[currentIndex];

  return (
    <div className="flex flex-col relative h-screen bg-gray-900">
      <HomeHeader />

      {/* Başlangıçta tüm sayfayı kaplayan ve küçülen görsel, sadece masaüstü cihazlarda görünür */}
      <img
        src={require(`../assets/${currentPhotoData.city}.png`)}
        className={`bg-center transition-all duration-[2000ms] ease-out hidden md:block ${animateImage
          ? 'absolute inset-0 w-full h-[60%] sm:h-[70%] md:h-[80%] lg:h-[90%] mt-11' // Mobilde gizlenir, ekran büyüdükçe büyür
          : 'absolute w-[80%] sm:w-[60%] md:w-[20%] lg:w-[30%] xl:w-[15%] shadow-2xl rounded-lg h-[20%] right-2 mt-32' // Küçülmüş ve Sabit Çerçeve içinde (Responsive)
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
            <div className="absolute top-2 right-1 bg-gray-800 p-2 md:p-3 shadow-lg rounded-lg border border-gray-700 flex flex-col items-center justify-center">
              <h2 className="text-blue-400 font-semibold text-sm md:text-md">{currentPhotoData.name}</h2>
            </div>
          )}
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}