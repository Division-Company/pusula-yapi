import React from 'react';

export default function Careers() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl text-orange-400 font-bold mb-8">Kariyer Fırsatları</h2>
      
      <section className="w-full max-w-8xl bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl text-orange-300 font-semibold mb-4">KVKK Aydınlatma Metni</h3>
        <p className="text-gray-400 mb-4">
          Şu anda şirketimizde açık bir pozisyon bulunmamaktadır. Ancak, gelecekteki iş fırsatlarımız hakkında bilgi almak ve bizimle çalışmak için iletişime geçmekten çekinmeyin.
        </p>
      </section>
    </div>
  );
}
