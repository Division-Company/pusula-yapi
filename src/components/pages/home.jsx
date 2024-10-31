import React, { useState, useEffect } from 'react';
import HomeHeader from "../home/home-header";
import HomeFooter from "../home/home-footer";

export default function Home() {
  const photoDataArray = [
    {
      url: "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202309150915591-img.jpg",
      year: 2021,
      location: "Kayseri",
      name: "Kayseri Büyükşehir Belediyesi Kadir Has Şehir Stadyumu",
      city:"Adana"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EttD5MTn9hgOD-PrGkB756lnqGE44ZfYQQ&s",
      year: 2020,
      location: "Ankara",
      name: "Ankara Etlik Entegre Sağlık Kampüsü",
      city:"Ankara"
    },
    {
      url: "https://assets.cityexperiences.com/wp-content/uploads/2022/12/Golden-Gate-Bridge.jpg",
      year: 2019,
      location: "Yozgat",
      name: "Yozgat Eğitim ve Araştırma Hastanesi",
      city:"Yozgat"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhotoData, setCurrentPhotoData] = useState(photoDataArray[0]);
  const [animateImage, setAnimateImage] = useState(true); // Animasyon durumu

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photoDataArray.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photoDataArray.length]);

  useEffect(() => {
    setCurrentPhotoData(photoDataArray[currentIndex]);
  }, [currentIndex, photoDataArray]);

  useEffect(() => {
    // Sayfa açıldıktan 2 saniye sonra küçülme animasyonu başlar
    const timer = setTimeout(() => {
      setAnimateImage(false);
    }, 500);
    return () => clearTimeout(timer); // Temizlik işlemi
  }, []);

  return (
    <div className="flex flex-col relative h-screen bg-gray-900">
      <HomeHeader />

      {/* Başlangıçta tüm sayfayı kaplayan ve küçülen görsel */}
      <img
        src={require(`../assets/${currentPhotoData.city}.png`)}
        className={`bg-center transition-all duration-[2000ms] ease-out ${animateImage
            ? 'absolute inset-0 w-full h-[90%] mt-11' // Tüm ekranı kaplayan
            : 'absolute w-[23%] shadow-2xl rounded-lg  h-[18%] right-2 mt-32' // Küçülmüş ve Sabit Çerçeve içinde
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
            <div className="absolute top-2 right-1 bg-gray-800 p-3 shadow-lg rounded-lg border border-gray-700  flex flex-col items-center justify-center">
              <h2 className="text-blue-400 font-semibold text-md">{currentPhotoData.name}</h2>
            </div>
          )}
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
