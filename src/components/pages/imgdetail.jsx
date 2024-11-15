import React, { useState } from 'react';

// Thumbnail olarak kullanacağımız görsellerin URL'leri
const imageUrls = [
  "https://i.imgur.com/xeWecIe.jpeg",
  "https://i.imgur.com/QlHWFF8.jpeg",
  "https://i.imgur.com/DF6kjXq.jpeg",
  "https://i.imgur.com/8We2SaP.jpeg",
];

const Imagedetail = () => {
  // Arka plan resmini yönetmek için useState kullanıyoruz
  const [backgroundImage, setBackgroundImage] = useState(imageUrls[0]);

  // Thumbnail'a tıklanınca arka plan resmini değiştirecek fonksiyon
  const handleThumbnailClick = (url) => {
    setBackgroundImage(url);
  };

  return (
    <div className="relative h-screen bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}  // Arka plan resmi
          alt="Background"
          className="object-cover w-full h-full transition-all duration-300 ease-in-out"
        />
      </div>
      
      {/* Overlay with Details */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white bg-opacity-40 bg-black">
        {/* Header */}
        <div className="p-6 w-96">
          <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg">
            <h1 className="text-2xl font-bold">Bodrum Güllük</h1>
            <p className="mt-2">Bodrum - 2024</p>
          </div>
        </div>
        
        {/* Information Box */}
        <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg absolute bottom-20 left-6">
          <div className="flex flex-col space-y-1 text-sm">
            <p><strong>Mimar:</strong> Bilinmiyor</p>
            <p><strong>Müteahhit:</strong> Bilinmiyor</p>
            <p><strong>Sahip:</strong> Bilinmiyor</p>
            <p><strong>Katagori:</strong> Bilinmiyor</p>
          </div>
        </div>
        
        {/* Thumbnails Section */}
        <div className="absolute bottom-20 right-2 flex space-x-2 z-20 bg-black bg-opacity-50 w-80 h-24 items-center justify-center rounded-xl">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover cursor-pointer rounded-lg border-2 border-transparent hover:border-white transition-all duration-200"
              onClick={() => handleThumbnailClick(url)}
            />
          ))}
        </div>

        {/* Footer - Navigation Buttons */}
        <div className="flex space-x-2 p-6 absolute bottom-0 left-0 w-full bg-black bg-opacity-50 z-10">
          <a href="ongoing-projects" className="text-gray-300 hover:text-white">Devam Eden Projeler</a>
          <span className="flex-grow"></span>
        </div>
      </div>
    </div>
  );
};

export default Imagedetail;
