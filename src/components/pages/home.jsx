import React, { useState, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

export default function Home() {
  const photoDataArray = useMemo(() => [
    { url: "https://i.imgur.com/iln8oeM.png", location: "Ankara", name: "Atayıldız Plaza 1"},
    { url: "https://i.imgur.com/2nL9lwD.png", year: 2020, location: "Ankara", name: "Ankara Etlik Entegre Sağlık Kampüsü" },
    { url: "https://i.imgur.com/U0v42uN.jpeg", location: "Muğla", name: "Fethiye Özyer Merkez Ofis" },
    { url: "https://i.imgur.com/aWMg9M9.png", location: "Elazığ", name: "Elazığ Entegre Sağlık Kampüsü" },
    { url: "https://i.imgur.com/rQ33nBK.jpeg", location: "Ankara", name: "Türkiye Barolar Birliği Hizmet Binası ve Sosyal Tesisleri" },
    { url: "https://i.imgur.com/vVR3b6D.png", location: "Ankara", name: "T.B.M.M. Alüminyum Doğrama ve Yenileme" },
    { url: "https://i.imgur.com/fPIm7Tr.png", location: "Ankara", name: "Elvankent Gimsa"},
    { url: "https://i.imgur.com/j5hsXbp.jpeg", location: "Ankara", name: "Devlet Mahallesi Gimsa"},
    { url: "https://i.imgur.com/KgLSiO1.png", location: "Ankara", name: "Atayıldız Plaza 2"},
    { url: "https://i.imgur.com/nOvLfBa.png", location: "Kayseri", name: "Kayseri Büyükşehir Belediyesi Kadir Has Şehir Stadyumu"},
    // ... Diğer girdiler
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handlePrevious = () => {
    if (currentIndex === 0) return;
    setSwipeDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photoDataArray.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    if (currentIndex === photoDataArray.length - 1) return;
    setSwipeDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photoDataArray.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwipeDirection("right");
      handleNext();
    },
    onSwipedRight: () => {
      setSwipeDirection("left");
      handlePrevious();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === photoDataArray.length - 1;

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <main className="flex-1 flex items-center justify-center overflow-hidden relative" {...handlers}>
        <div key={currentIndex} className="relative w-full h-full ">
          {/* Slideshow Image */}
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url('${photoDataArray[currentIndex].url}')` }}
          ></div>

          {/* Info Box */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-black bg-opacity-70 p-4 rounded-md shadow-md z-10 max-w-xs md:max-w-md">
            <h2 className="text-lg md:text-xl font-bold text-white text-opacity-90">{photoDataArray[currentIndex].name}</h2>
            <p className="text-sm md:text-base text-white text-opacity-70">{photoDataArray[currentIndex].location}</p>
          </div>

          {/* Controls ve Fotoğraf Sayısı */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
            <button
              onClick={handlePrevious}
              className={`p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 ${isAtStart ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isAtStart}
              aria-label="Previous Image"
            >
              <FaChevronLeft size={30} className="text-white" />
            </button>
            <p className="text-sm md:text-base bg-black bg-opacity-70 px-4 py-1 rounded-md">
              {` ${currentIndex + 1} / ${photoDataArray.length}`}
            </p>
            <button
              onClick={handleNext}
              className={`p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 ${isAtEnd ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isAtEnd}
              aria-label="Next Image"
            >
              <FaChevronRight size={30} className="text-white" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
