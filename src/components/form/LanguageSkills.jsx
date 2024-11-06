import React from 'react';

function LanguageSkills() {
  return (
    <div className="p-4 rounded-t">
      <h2 className="text-lg font-semibold">6. Yabancı Dil Bilgisi</h2>
      <form>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Ana Dil</label>
          <input type="text" className="border rounded w-full p-2" placeholder="Ana dilinizi girin" />
        </div>
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Dil</th>
              <th className="border border-gray-300 p-2">Konuşma (1-4)</th>
              <th className="border border-gray-300 p-2">Okuma (1-4)</th>
              <th className="border border-gray-300 p-2">Yazma (1-4)</th>
            </tr>
          </thead>
          <tbody>
            {["İngilizce", "Fransızca", "Almanca", "Rusça", "Arapça"].map((language, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{language}</td>
                {["Konuşma", "Okuma", "Yazma"].map((skill, skillIndex) => (
                  <td key={skillIndex} className="border border-gray-300 p-2">
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4].map((level) => (
                        <label key={level} className="inline-flex items-center">
                          <input type="radio" name={`${language}-${skill}`} value={level} />
                          <span className="ml-1">{level}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Diğer</label>
          <input type="text" className="border rounded w-full p-2" />
        </div>
      </form>
    </div>
  );
}

export default LanguageSkills;
