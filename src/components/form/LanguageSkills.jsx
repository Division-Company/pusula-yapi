import React from 'react';
import { Field, ErrorMessage } from 'formik';

function LanguageSkills() {
  const languageOptions = ["İngilizce", "Fransızca", "Almanca", "Rusça", "Arapça"];
  const skillCategories = ["Konuşma", "Okuma", "Yazma"];

  return (
    <div className="p-4 rounded-t">
      <h2 className="text-lg font-semibold">6. Yabancı Dil Bilgisi</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Ana Dil</label>
        <Field
          name="languageSkills.nativeLanguage"
          type="text"
          className="border rounded w-full p-2"
          placeholder="Ana dilinizi girin"
        />
        <ErrorMessage name="languageSkills.nativeLanguage" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <table className="w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Dil</th>
            {skillCategories.map((category, index) => (
              <th key={index} className="border border-gray-300 p-2">{category} (1-4)</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {languageOptions.map((language, languageIndex) => (
            <tr key={languageIndex}>
              <td className="border border-gray-300 p-2">{language}</td>
              {skillCategories.map((category, categoryIndex) => (
                <td key={categoryIndex} className="border border-gray-300 p-2">
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4].map((level) => (
                      <label key={level} className="inline-flex items-center">
                        <Field
                          type="radio"
                          name={`languageSkills.languages[${languageIndex}].${category.toLowerCase()}`}
                          value={String(level)}
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-1">{level}</span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name={`languageSkills.languages[${languageIndex}].${category.toLowerCase()}`}
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
          name="languageSkills.otherLanguages"
          type="text"
          className="border rounded w-full p-2"
          placeholder="Diğer diller"
        />
        <ErrorMessage name="languageSkills.otherLanguages" component="div" className="text-red-500 text-sm mt-1" />
      </div>
    </div>
  );
}

export default LanguageSkills;
