import React from 'react';

function PersonalInfo() {
  return (
    <div className="text-gray-600 p-6 rounded-lg shadow-md mx-auto">
      <h2 className="text-gray-600 text-xl font-semibold mb-6">2. Kişisel Bilgiler</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Adı</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Adınız" />
        </div>
        <div>
          <label className="block font-medium mb-1">Soyadı</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Soyadınız" />
        </div>
        <div>
          <label className="block font-medium mb-1">Doğum Yeri</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Doğum Yeriniz" />
        </div>
        <div>
          <label className="block font-medium mb-1">Doğum Tarihi</label>
          <input type="date" className="w-full p-2 rounded border" />
        </div>
        <div>
          <label className="block font-medium mb-1">Cinsiyetiniz</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Cinsiyetiniz" />
        </div>
        <div>
          <label className="block font-medium mb-1">Cep Telefon</label>
          <input type="tel" className="w-full p-2 rounded border" placeholder="Cep Telefonu" />
        </div>
        <div>
          <label className="block font-medium mb-1">Medeni Hali</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Medeni Haliniz" />
        </div>
        <div>
          <label className="block font-medium mb-1">Çocuk Sayısı</label>
          <input type="number" className="w-full p-2 rounded border" placeholder="Çocuk Sayısı" />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Ev Adresiniz</label>
          <textarea className="w-full p-2 rounded border" rows="3" placeholder="Ev Adresiniz"></textarea>
        </div>
        <div>
          <label className="block font-medium mb-1">E-mail 1</label>
          <input type="email" className="w-full p-2 rounded border" placeholder="E-mail 1" />
        </div>
        <div>
          <label className="block font-medium mb-1">E-mail 2</label>
          <input type="email" className="w-full p-2 rounded border" placeholder="E-mail 2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Sürücü Ehliyetiniz Var Mı?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="ehliyet" value="evet" className="mr-2" />
              Evet
            </label>
            <label className="flex items-center">
              <input type="radio" name="ehliyet" value="hayir" className="mr-2" />
              Hayır
            </label>
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Varsa sınıfını belirtiniz.</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Ehliyet Sınıfı" />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
