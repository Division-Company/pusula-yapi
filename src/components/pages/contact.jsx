import React from 'react';
import logo from '../assets/logo.png';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-500 p-4">
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="Logo" className="w-[300px] sm:w-[400px] md:w-[500px] h-auto" /> {/* Logonun responsive genişliği */}
      </div>

      {/* İçerik ve Harita Bölümü */}
      <div className="border-slate-700 border-2 shadow-2xl flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 p-4 sm:p-8 bg-slate-500 text-white rounded-lg max-w-4xl w-full">
        
        {/* İletişim Bilgileri */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">İletişim Bilgileri</h2>
          <p className="mb-4 text-sm sm:text-base">Bize aşağıdaki iletişim bilgilerinden ulaşabilirsiniz.</p>
          
          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">📞</span>
              <a href="tel:+903123944321" className="hover:underline hover:text-orange-400 cursor-pointer transition-colors">+90 (312) 394 43 21</a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">📞</span>
              <a href="tel:+903123944322" className="hover:underline hover:text-orange-400 cursor-pointer transition-colors">+90 (312) 394 43 22</a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">✉️</span>
              <a href="mailto:info@pusulaalüminyum.com.tr" className="hover:underline hover:text-orange-400 cursor-pointer transition-colors">
                info@pusulaalüminyum.com.tr
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">📍</span>
              <a href="https://maps.app.goo.gl/FgKdATyPsovXhqWP6" className="hover:underline hover:text-orange-400 cursor-pointer transition-colors">İvedik OSB. Mahallesi 1476 Cadde No: 8/26 Yenimahalle/ANKARA</a>
            </div>
          </div>
        </div>
        
        {/* Harita */}
        <div className="w-full lg:w-auto">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.2180194899437!2d32.84504817608161!3d39.96462037941996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f5ecb1b37b3%3A0xb66d52ab8d020b93!2sAz%C4%B1k%20Sk.%20No%3A4%2C%2006010%20Ke%C3%A7i%C3%B6ren%2FAnkara!5e0!3m2!1str!2str!4v1690000000000!5m2!1str!2str"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
