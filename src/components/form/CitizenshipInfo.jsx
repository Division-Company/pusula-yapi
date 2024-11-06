import React from 'react';

function CitizenshipInfo() {
  return (
    <div className="p-6 rounded-lg text-gray-600">
      <h2 className="text-gray-600 text-xl font-semibold mb-6">3. Vatandaşlık Bilgileri</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Türk Vatandaşı mısınız?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="turk_vatandasi" value="evet" className="mr-2" />
              Evet
            </label>
            <label className="flex items-center">
              <input type="radio" name="turk_vatandasi" value="hayir" className="mr-2" />
              Hayır
            </label>
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">TC. Kimlik No :</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Kimlik numaranızı giriniz" />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Başka bir ülke vatandaşı iseniz ve/veya oturumunuz, çalışma izniniz var ise hangi ülke ve kaç yıl belirtiniz</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Ülke ve yıl bilgisi" />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Yurtdışında çalışmanıza engel bir durumunuz var mı?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="yurtdisi_engel" value="evet" className="mr-2" />
              Evet
            </label>
            <label className="flex items-center">
              <input type="radio" name="yurtdisi_engel" value="hayir" className="mr-2" />
              Hayır
            </label>
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Varsa Açıklayınız</label>
          <textarea className="w-full p-2 rounded border" rows="3" placeholder="Açıklama yazınız"></textarea>
        </div>
      </form>
    </div>
  );
}

export default CitizenshipInfo;
