import React from 'react';

function WorkExperience() {
  return (
    <div className="p-4 rounded text-gray-600">
      <h2 className="font-bold mb-4">9. İş Tecrübesi</h2>
      <p className="text-sm mb-4">Son işinizden başlayarak doldurunuz.</p>
      <form>
        {Array(3).fill(0).map((_, index) => (
          <div key={index} className="mb-6">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <input type="text" placeholder="İş Yeri Adı" className="border p-2 rounded" />
              <input type="text" placeholder="Şehir" className="border p-2 rounded" />
              <input type="text" placeholder="Görevi" className="border p-2 rounded" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <input type="text" placeholder="Aylık Net Maaş" className="border p-2 rounded" />
              <input type="date" placeholder="İşe Giriş Tarihi" className="border p-2 rounded" />
              <input type="date" placeholder="Ayrılma Tarihi" className="border p-2 rounded" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <input type="text" placeholder="Yöneticinizin Adı" className="border p-2 rounded" />
              <input type="text" placeholder="Yöneticinizin Görevi" className="border p-2 rounded" />
              <input type="text" placeholder="Yöneticinizin Telefonu" className="border p-2 rounded" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Ayrılma Sebebiniz" className="border p-2 rounded w-full"></textarea>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

export default WorkExperience;
