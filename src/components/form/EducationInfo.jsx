import React from 'react';

function EducationInfo() {
  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-gray-600 text-xl font-semibold mb-6">4. Öğrenim Durumu</h2>
      <form>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="p-3 border">Okul Adı/Şehir</th>
              <th className="p-3 border">Başlangıç</th>
              <th className="p-3 border">Bitiş Tarihi</th>
              <th className="p-3 border">Bölümü</th>
              <th className="p-3 border">Mezuniyet Derecesi</th>
            </tr>
          </thead>
          <tbody>
            {["İlköğretim", "Ortaokul", "Lise/ Meslek", "Üniversite", "Yüksek Lisans Ve Üzeri"].map((level, index) => (
              <tr key={index} className="bg-white text-gray-600">
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder={`${level} Okul Adı/Şehir`} />
                </td>
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder="gg.aa.yyyy" />
                </td>
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder="gg.aa.yyyy" />
                </td>
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder="Bölüm" />
                </td>
                <td className="p-3 border">
                  <input type="text" className="w-full p-2 rounded border" placeholder="Mezuniyet Derecesi" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default EducationInfo;
