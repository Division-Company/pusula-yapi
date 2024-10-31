import React from 'react'
import { motion } from 'framer-motion'

// Referans verileri ve resim yolları
const references = [
    { city: 'Kayseri', country: 'Kayseri', description: 'Kadir Has Şehir Stadyumu', image: 'https://www.kayseri.bel.tr/uploads/hizmetler/images/stadyum1.jpg' },
    { city: 'Ankara', country: 'Ankara', description: 'Ankara Etlik Entegre Sağlık Kampüsü', image: 'https://turkerler.com/media/4-240918115350.jpg' },
    { city: 'Yozgat', country: 'Yozgat', description: 'Yozgat Eğitim ve Araştırma Hastanesi', image: 'https://ronesans.com/content/files/yozgat-seh-06632632db20b7a23d4.45889694.webp' },
    { city: 'Adana', country: 'Adana', description: 'Adana Entegre Sağlık Kampüsü', image: 'https://www.pppadanahastanesi.com/upload/Node/21082/xpics/001.p1.jpg' },
    { city: 'Elazığ', country: 'Elazığ', description: 'Elazığ Entegre Sağlık Kampüsü', image: 'https://lh3.googleusercontent.com/proxy/lQVv6YMzeE4IENaSDuLDf7raODVCg6RwfIR1Ze1uJ-Mf41q796U8ttTQse_AdZhvL00vKzD-Um_54VvMElIgk-VHS8loVLc4raL1Xj4P8-5gJxCj7JlUgGOVGZqpAYQAaVj0LDuC9cosLjtlyWsCl1hG0Cw_N04-d0HNddi9NEMHxLcW72dk' },
    { city: 'Ankara', country: 'Ankara', description: 'Türkiye Barolar Birliği Hizmet Binası ve Sosyal Tesisleri', image: 'https://avatars.mds.yandex.net/get-altay/1992662/2a0000016fd217f49933ebc40a3a457d3962/orig' },
    { city: 'Ankara', country: 'Ankara', description: 'T.B.M.M. Alüminyum Doğrama ve Yenileme', image: 'https://i.imgur.com/5tphzCm.png' },
    { city: 'Ankara', country: 'Ankara', description: 'Elvankent Gimsa', image: 'https://safagrupinsaat.com/wp-content/uploads/2017/03/IMG_6898.jpg' },
    { city: 'Ankara', country: 'Ankara', description: 'Devlet Mahellesi Gimsa', image: 'https://i.imgur.com/aL7KIKp.png' },
    { city: 'Ankara', country: 'Ankara', description: 'Atayıldız Plaza 1', image: 'https://i.imgur.com/qywXJ9I.png' },
    { city: 'Ankara', country: 'Ankara', description: 'Atayıldız Plaza 2', image: 'https://i.imgur.com/V8FlLln.png' },
    { city: 'Ankara', country: 'Ankara', description: 'Atayıldız Plaza 2', image: 'https://i.imgur.com/V8FlLln.png' },

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
                            <p className="truncate hover:overflow-auto hover:whitespace-normal ">{ref.description}</p>
                            <p className="text-xs font-light truncate">{ref.country}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
