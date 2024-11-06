import React from 'react';

function FormPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 space-y-6">
        <h1 className="text-xl font-bold text-blue-700">Çalışan Adayı Aydınlatma Metni</h1>

        {/* 1. Başvuru Bilgisi */}
        <div className="space-y-4 border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-700">1. Başvuru Bilgisi</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Başvurulan Departman</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>Seçiniz</option>
                {/* Diğer seçenekler burada olacak */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Başvurulan Görev Adı</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>Seçiniz</option>
                {/* Diğer seçenekler burada olacak */}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">İş ilanı yeri / kodu</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Başvurduğunuz görevi isteme nedeninizi, eğitiminizi, iş tecrübenizi, yeteneklerinizi değerlendiriniz.
            </label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Talep ettiğiniz aylık net ücret</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">İşe başlayabileceğiniz tarih</label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="block text-sm font-medium text-gray-700">Şu anda çalışıyor musunuz?</span>
              <div className="flex items-center space-x-4 mt-1">
                <label className="inline-flex items-center">
                  <input type="radio" name="current_working" value="yes" className="form-radio text-blue-600" />
                  <span className="ml-2">Evet</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="current_working" value="no" className="form-radio text-blue-600" />
                  <span className="ml-2">Hayır</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Çalışıyorsanız; firma adı/göreviniz</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700">Gerektiğinde fazla mesai yapmayı kabul eder misiniz?</span>
            <div className="flex items-center space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input type="radio" name="overtime" value="yes" className="form-radio text-blue-600" />
                <span className="ml-2">Evet</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="overtime" value="no" className="form-radio text-blue-600" />
                <span className="ml-2">Hayır</span>
              </label>
            </div>
          </div>
        </div>

        {/* 2. Kişisel Bilgiler */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">2. Kişisel Bilgiler</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Adı</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Soyadı</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Doğum Yeri</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Doğum Tarihi</label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          {/* Diğer kişisel bilgiler burada olacak */}
        </div>
      </div>
    </div>
  );
}

export default FormPage;
