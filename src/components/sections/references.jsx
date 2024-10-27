import React from 'react';

export default function References() {
    const references = [
        {
            name: "Kayseri Büyükşehir Belediyesi Kadir Has Şehir Stadyumu",
            country: "Türkiye",
            year: "2009",
            imageUrl: "your-image-url-1.jpg",
        },
        {
            name: "Donbass Arena",
            country: "Ukrayna",
            year: "2012",
            imageUrl: "your-image-url-2.jpg",
        },
        {
            name: "Another Project",
            country: "Azerbaycan",
            year: "2018",
            imageUrl: "your-image-url-3.jpg",
        },
        // Diğer referansları buraya ekleyebilirsiniz
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {references.map((reference, index) => (
                <div
                    key={index}
                    className="relative h-64 flex items-center justify-center text-white rounded-lg shadow-lg overflow-hidden"
                    style={{ backgroundImage: `url(${reference.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 grayscale hover:grayscale-0" />
                    <div className="relative z-10 text-center p-4">
                        <h3 className="text-lg font-bold">{reference.name}</h3>
                        <p className="text-sm mt-2">
                            {reference.country}, {reference.year}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
