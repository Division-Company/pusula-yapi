import React from 'react';
import { Field, ErrorMessage } from 'formik';

function ComputerSkills() {
  const programs = ["Microsoft Word", "Microsoft Excel", "Power Point", "Microsoft Access", "Ms Project", "Primavera P6", "Asta Powerproject", "Synchro"];
  const categories = ["Seviye", "Pratik", "Hız"];

  return (
    <div className="text-gray-600 p-4 rounded-t">
      <h2 className="text-lg font-semibold">7. BİLGİSAYAR PROGRAMLARINI KULLANMA BECERİLERİ</h2>
      <table className="w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Program</th>
            {categories.map((category, index) => (
              <th key={index} className="border border-gray-300 p-2">{category} (1-4)</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {programs.map((program, programIndex) => (
            <tr key={programIndex}>
              <td className="border border-gray-300 p-2">{program}</td>
              {categories.map((category, categoryIndex) => (
                <td key={categoryIndex} className="border border-gray-300 p-2">
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4].map((level) => (
                      <label key={level} className="inline-flex items-center">
                        <Field
                          type="radio"
                          name={`computerSkills[${programIndex}].${category.toLowerCase()}`}
                          value={String(level)}
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-1">{level}</span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name={`computerSkills[${programIndex}].${category.toLowerCase()}`}
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-4 mt-4">
        <label className="block font-semibold mb-1">Diğer</label>
        <Field
          name="computerSkills.otherSkills"
          type="text"
          className="border rounded w-full p-2"
          placeholder="Diğer bilgisayar becerileri"
        />
        <ErrorMessage name="computerSkills.otherSkills" component="div" className="text-red-500 text-sm mt-1" />
      </div>
    </div>
  );
}

export default ComputerSkills;
