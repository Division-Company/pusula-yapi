import React from 'react';

export default function Careers() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl text-orange-400 font-bold mb-8">Kariyer Fırsatları</h2>
      
      <section className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl text-orange-300 font-semibold mb-4">Aktif İş İlanlarımız</h3>
        <p className="text-gray-400 mb-4">
          Şu anda şirketimizde açık bir pozisyon bulunmamaktadır. Ancak, gelecekteki iş fırsatlarımız hakkında bilgi almak ve bizimle çalışmak için iletişime geçmekten çekinmeyin.
        </p>
      </section>

      <section className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl text-orange-300 font-semibold mb-4">Bizimle Çalışmak İster Misiniz?</h3>
        <p className="text-gray-400 mb-4">
          Şirketimizde gelecekteki kariyer fırsatlarını değerlendirmek için özgeçmişinizi ve iletişim bilgilerinizi bize iletebilirsiniz.
          Aşağıdaki e-posta adresimizden bizimle iletişime geçin:
        </p>
        <div className="text-lg font-semibold text-orange-400 mb-4">
          <a href="mailto:hr@pusulagroup.com">hr@pusulagroup.com</a>
        </div>
        <p className="text-gray-400">
          İlgilendiğiniz pozisyonu belirterek özgeçmişinizi gönderin, gelecekteki pozisyon açılışlarında sizinle iletişime geçebiliriz.
        </p>
      </section>
    </div>
  );
}
