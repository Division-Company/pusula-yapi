import React from 'react';

function ReferenceInfo() {
  return (
    <div className="text-gray-600 p-4 rounded">
      <h2 className="font-bold mb-4">8. Referanslar / Reference Contacts</h2>
      <p className="text-sm mb-4">
        Referans verdiğiniz kişilerden, isimlerini, iletişim ve mesleki bilgilerini şirketimizle paylaşmak için izin alınması çalışan adayının yükümlülüğüdür.
      </p>
      <form>
        {Array(4).fill(0).map((_, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-4">
            <input type="text" placeholder="Adı S.Ad" className="border p-2 rounded" />
            <input type="text" placeholder="İş Yeri" className="border p-2 rounded" />
            <input type="text" placeholder="Görevi" className="border p-2 rounded" />
            <input type="text" placeholder="Telefon No" className="border p-2 rounded" />
          </div>
        ))}
      </form>
    </div>
  );
}

export default ReferenceInfo;
