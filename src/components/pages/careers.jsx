import React from 'react';

export default function Careers() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-8 flex flex-col items-center justify-center">
      {/* Başlık */}
      <h2 className="text-4xl text-orange-400 font-bold mb-8">Kariyer Fırsatları</h2>

      {/* Açıklama */}
      <p className="text-lg text-gray-300 max-w-3xl mb-6 text-center">
        Pusula Yapı olarak, modern yapı projelerinde birlikte çalışabileceğimiz, yenilikçi ve dinamik ekip arkadaşları arıyoruz. 
        <br />
        <span className="text-orange-400 font-bold">CV’nizi bizimle paylaşın, geleceği birlikte inşa edelim!</span>
      </p>

      {/* CV Gönder Butonu */}
      <a
        href="mailto:hr@pusulayapi.com?subject=İş Başvurusu&body=Merhaba, CV'mi ekliyorum."
        className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg"
      >
        CV’nizi Gönderin
      </a>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-500">
        <p>© 2024 Pusula Yapı. Tüm hakları saklıdır.</p>
        <p>Gönderim sırasında CV’nizi eklemeyi unutmayın.</p>
      </footer>
    </div>
  );
}
