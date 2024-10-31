import React from 'react'
import { motion } from 'framer-motion'

// Referans verileri ve resim yolları
const references = [
    { city: 'Kayseri', country: 'TÜRKİYE', description: 'Kadir Has Şehir Stadyumu', year: 2020, image: 'https://www.kayseri.bel.tr/uploads/hizmetler/images/stadyum1.jpg' },
    { city: 'Ankara', country: 'TÜRKİYE', description: 'Ankara Etlik Entegre Sağlık Kampüsü', year: 2019, image: 'https://turkerler.com/media/4-240918115350.jpg' },
    { city: 'Yozgat', country: 'TÜRKİYE', description: 'Yozgat Eğitim ve Araştırma Hastanesi', year: 2019, image: 'https://ronesans.com/content/files/yozgat-seh-06632632db20b7a23d4.45889694.webp' },
    { city: 'Adana', country: 'TÜRKİYE', description: 'Adana Entegre Sağlık Kampüsü', year: 2020, image: 'https://www.pppadanahastanesi.com/upload/Node/21082/xpics/001.p1.jpg' },
    { city: 'Elazığ', country: 'TÜRKİYE', description: 'Elazığ Entegre Sağlık Kampüsü', year: 2020, image: 'https://lh3.googleusercontent.com/proxy/lQVv6YMzeE4IENaSDuLDf7raODVCg6RwfIR1Ze1uJ-Mf41q796U8ttTQse_AdZhvL00vKzD-Um_54VvMElIgk-VHS8loVLc4raL1Xj4P8-5gJxCj7JlUgGOVGZqpAYQAaVj0LDuC9cosLjtlyWsCl1hG0Cw_N04-d0HNddi9NEMHxLcW72dk' },
    { city: 'Kayseri', country: 'TÜRKİYE', description: 'Türkiye Barolar Birliği Hizmet Binası ve Sosyal Tesisleri', year: 2020, image: 'https://avatars.mds.yandex.net/get-altay/1992662/2a0000016fd217f49933ebc40a3a457d3962/orig' },
    { city: 'Ankara', country: 'TÜRKİYE', description: 'T.B.M.M. Alüminyum Doğrama ve Yenileme', year: 2020, image: 'https://cdn.discordapp.com/attachments/1045448096575918110/1301532944095252560/image.png?ex=6724d283&is=67238103&hm=8920cd472c58e9c87aaf75787602de70f97ec4ba62c5431d5d27e2d8b6705995&' },
    { city: 'Ankara', country: 'TÜRKİYE', description: 'Elvankent Gimsa', year: 2020, image: 'https://safagrupinsaat.com/wp-content/uploads/2017/03/IMG_6898.jpg' },
    { city: 'Ankara', country: 'TÜRKİYE', description: 'Devlet Mahellesi Gimsa', year: 2020, image: 'https://cdn.discordapp.com/attachments/1045448096575918110/1301534095985348690/image.png?ex=6724d395&is=67238215&hm=01c5d9481718a6ac0f045c0a5b0494ee19ea21e5015b2d6ce6330d6597f17863&' },
    { city: 'Ankara', country: 'TÜRKİYE', description: 'Atayıldız Plaza 1', year: 2020, image: 'https://cdn.discordapp.com/attachments/1045448096575918110/1301534733947113554/image.png?ex=6724d42d&is=672382ad&hm=9d68b26d728a997e28dd2e88b8ea675eab1765a13d98f0ecf9552ab62f967c1a&' },
    { city: 'Ankara', country: 'TÜRKİYE', description: 'Atayıldız Plaza 2', year: 2020, image: 'https://cdn.discordapp.com/attachments/1045448096575918110/1301535096964124692/image.png?ex=6724d484&is=67238304&hm=7394b59b0d4f90eb8bcfabe4c5373bf336d26ddf241f3db496afb2981946eed4&' },

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
