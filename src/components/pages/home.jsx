import React, { useState, useEffect, useMemo } from "react";
import HomeHeader from "../home/home-header";
import HomeFooter from "../home/home-footer";

export default function Home() {
  const photoDataArray = useMemo(() => [
    { url: "https://i.imgur.com/3GJjdkz.gif", year: 2020, location: "Ankara", name: "Ankara Etlik Entegre Sağlık Kampüsü", city: "Ankara" },
    { url: "https://i.imgur.com/U0v42uN.jpeg", location: "Adana", name: "Fethiye Özyer Merkez Ofis", city: "Adana" },
    { url: "https://i.imgur.com/FUCV6Wg.gif", location: "Adana", name: "Adana Entegre Sağlık Kampüsü", city: "Adana" },
    { url: "https://i.imgur.com/piohHCu.gif", location: "Elazığ", name: "Elazığ Entegre Sağlık Kampüsü", city: "Elazig" },
    // ... Diğer girdiler
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photoDataArray.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, photoDataArray.length]);

  const currentPhotoData = photoDataArray[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photoDataArray.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photoDataArray.length);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <HomeHeader />

      <main className="flex-1 flex items-center justify-center">
        <div className="relative w-full h-full border-4 border-gray-700 rounded-lg overflow-hidden">
          {/* Slideshow Image */}
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url('${currentPhotoData.url}')` }}
          ></div>

          {/* Info Box */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-70 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold text-blue-400">{currentPhotoData.name}</h2>
            <p className="text-sm text-gray-300">{currentPhotoData.location}</p>
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button
              onClick={handlePrevious}
              className="bg-gray-800 hover:bg-gray-600 p-2 rounded-full transition duration-200"
              aria-label="Previous Image"
            >
              ◀
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="bg-gray-800 hover:bg-gray-600 p-2 rounded-full transition duration-200"
              aria-label="Pause/Resume Slideshow"
            >
              {isPaused ? "▶" : "❚❚"}
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-800 hover:bg-gray-600 p-2 rounded-full transition duration-200"
              aria-label="Next Image"
            >
              ▶
            </button>
          </div>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
