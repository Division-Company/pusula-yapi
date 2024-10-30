import React from 'react'
import { motion } from 'framer-motion'

// Referans verileri ve resim yolları
const references = [
    { city: 'İstanbul', country: 'TÜRKİYE', description: 'Istanbul Tower 205', year: 2020, image: 'https://burst.shopifycdn.com/photos/chicago-city-lights-at-night.jpg?width=1000&format=pjpg&exif=0&iptc=0' },
    { city: 'Pendik', country: 'TÜRKİYE', description: 'Garanti BBVA Pendik Teknoloji Kampüsü', year: 2019, image: 'https://burst.shopifycdn.com/photos/chicago-city-lights-at-night.jpg?width=1000&format=pjpg&exif=0&iptc=0' },
    { city: 'İstanbul', country: 'TÜRKİYE', description: 'Arter', year: 2019, image: 'https://burst.shopifycdn.com/photos/chicago-city-lights-at-night.jpg?width=1000&format=pjpg&exif=0&iptc=0' },
    // Daha fazla referans gerektiğinde buraya ekleyin
]

export default function Referanslar() {
    return (
        <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-900 p-8">
            <h1 className="text-4xl font-bold text-white mb-10">Öne Çıkan Projeler</h1>

            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5x1">
                {references.map((ref, index) => (
                    <motion.div
                        key={index}
                        className=" filter grayscale-[100%] hover:fliter hover:grayscale-[0%] relative min-w-96 w-full h-80 rounded-lg overflow-hidden shadow-lg group bg-cover bg-center"
                        style={{ backgroundImage: `url(${ref.image})` }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        
                        {/* Siyah-beyaz filtre, hover ile renkli geçiş */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-500">
                            <div className="absolute inset-0 filter grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                        </div>

                        {/* Yazı etiketi şeklinde stil verilmiş metin */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 rounded-full px-4 py-2 shadow text-black text-sm font-semibold">
                            <p className="truncate">{ref.description}</p>
                            <p className="text-xs font-light truncate">{ref.country} {ref.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
