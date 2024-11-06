import React from 'react';

function ComputerSkills() {
  return (
    <div className="text-gray-600 p-4 rounded-t">
      <h2 className="text-lg font-semibold">7. BİLGİSAYAR PROGRAMLARINI KULLANMA BECERİLERİ</h2>
      <form>
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Program</th>
              <th className="border border-gray-300 p-2">Seviye (1-4)</th>
              <th className="border border-gray-300 p-2">Pratik (1-4)</th>
              <th className="border border-gray-300 p-2">Hız (1-4)</th>
            </tr>
          </thead>
          <tbody>
            {["Microsoft Word", "Microsoft Excel", "Power Point", "Microsoft Access", "Ms Project", "Primavera P6", "Asta Powerproject", "Synchro"].map((program, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{program}</td>
                {["Seviye", "Pratik", "Hız"].map((category, categoryIndex) => (
                  <td key={categoryIndex} className="border border-gray-300 p-2">
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4].map((level) => (
                        <label key={level} className="inline-flex items-center">
                          <input type="radio" name={`${program}-${category}`} value={level} />
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

export default ComputerSkills;
