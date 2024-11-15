import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Imagedetail = () => {
  const location = useLocation();
  const { item } = location.state || {};


  const imageUrls = item?.images || [];
  const [backgroundImage, setBackgroundImage] = useState(imageUrls[0] || '' || backgroundImage);

  useEffect(() => {
    if (item?.name) {
      document.title = `${item.name} - Proje Detayı`;
    } else {
      document.title = 'Proje Detayı';
    }
  }, [item]);

  return (
    <div className="relative h-screen bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Background"
          className="object-cover w-full h-full transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Overlay with Details */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white bg-opacity-40 bg-black">
        {/* Header */}
        <div className="p-6 w-96">
          <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg">
            <h1 className="text-2xl font-bold">{item?.name || 'Başlık Bilinmiyor'}</h1>
            <p className="mt-2">{item?.subTitle || 'Alt Başlık Bilinmiyor'}</p>
          </div>
        </div>

        {/* Information Box */}
        <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg absolute bottom-20 left-6">
          <div className="flex flex-col space-y-1 text-sm">
            <p><strong>Mimar:</strong> {item?.architect || 'Bilinmiyor'}</p>
            <p><strong>Müteahhit:</strong> {item?.contractor || 'Bilinmiyor'}</p>
            <p><strong>Sahip:</strong> {item?.owner || 'Bilinmiyor'}</p>
            <p><strong>Kategori:</strong> {item?.category || 'Bilinmiyor'}</p>
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
              onClick={() => setBackgroundImage(url)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imagedetail;
