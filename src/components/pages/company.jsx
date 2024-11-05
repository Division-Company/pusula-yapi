import React from 'react';

function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/V8FlLln.png')" }}>
      {/* Siyah Opak Katman */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* İçerik */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          <p className='text-orange-500'>Pusula Alüminyum</p>
        </h1>
        <p className="text-lg md:text-xl mb-6">
        Pusula Alüminyum, alüminyum sektöründe lider konumda bulunan, yenilikçi ve müşteri odaklı bir şirkettir. Yılların tecrübesi ve uzman kadrosu ile yüksek kaliteli alüminyum ürünleri üretmekte ve geniş bir yelpazede hizmet sunmaktadır. Misyonumuz, sektörde en iyi çözümleri sağlayarak müşteri memnuniyetini en üst düzeyde tutmak ve sürdürülebilir başarı elde etmektir. <br /><br />
          <p className='text-orange-300'><strong>Misyonumuz</strong></p><br />
Teknoloji ve inovasyonu birleştirerek, müşterilerimize en yüksek kalitede alüminyum ürünleri ve çözümleri sunmak. Çevreye duyarlı üretim süreçleri ve sürdürülebilirlik ilkeleri ile sektörde fark yaratmak. <br /><br />
<p className='text-orange-300'><strong>Vizyonumuz </strong></p><br />
Global pazarda tanınan ve tercih edilen bir lider olarak, alüminyum sektöründe yenilikçi ve sürdürülebilir çözümler geliştirmek. <br /><br />
 <p className='text-orange-300'><strong>Değerlerimiz</strong></p><br />
<strong>Kalite:</strong> Ürünlerimizin her aşamasında mükemmelliği hedefleyerek, müşteri memnuniyetini sağlamayı taahhüt ederiz. <br />
<strong>İnovasyon:</strong> Sürekli olarak yeni teknolojiler ve yöntemler geliştirerek sektörde öncü olmayı amaçlarız. <br />
<strong>Çevreye Duyarlılık:</strong> Üretim süreçlerimizde çevresel sürdürülebilirliği ve doğa dostu uygulamaları ön planda tutarız. <br />
<strong>Müşteri Odaklılık:</strong> Müşterilerimizin ihtiyaçlarına en uygun çözümleri sunarak, onların başarısına katkıda bulunuruz. <br />
<strong>Takım Çalışması:</strong> İşbirliği ve dayanışma ile güçlü bir ekip ruhu oluşturur, başarılarımızı birlikte kutlarız.
        </p>
        
      </div>
    </div>
  );
}

export default HeroSection;
