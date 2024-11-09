import React from 'react';
import { Field, ErrorMessage } from 'formik';

function EducationInfo() {
  const educationLevels = ["İlköğretim", "Ortaokul", "Lise/ Meslek", "Üniversite", "Yüksek Lisans Ve Üzeri"];

  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-gray-600 text-xl font-semibold mb-6">4. Öğrenim Durumu</h2>
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
          {educationLevels.map((level, index) => (
            <tr key={index} className="bg-white text-gray-600">
              <td className="p-3 border">
                <Field
                  name={`educationInfo[${index}].schoolName`}
                  type="text"
                  className="w-full p-2 rounded border"
                  placeholder={`${level} Okul Adı/Şehir`}
                />
                <ErrorMessage name={`educationInfo[${index}].schoolName`} component="div" className="text-red-500 text-sm mt-1" />
              </td>
              <td className="p-3 border">
                <Field
                  name={`educationInfo[${index}].startDate`}
                  type="date"
                  className="w-full p-2 rounded border"
                />
                <ErrorMessage name={`educationInfo[${index}].startDate`} component="div" className="text-red-500 text-sm mt-1" />
              </td>
              <td className="p-3 border">
                <Field
                  name={`educationInfo[${index}].endDate`}
                  type="date"
                  className="w-full p-2 rounded border"
                />
                <ErrorMessage name={`educationInfo[${index}].endDate`} component="div" className="text-red-500 text-sm mt-1" />
              </td>
              <td className="p-3 border">
                <Field
                  name={`educationInfo[${index}].department`}
                  type="text"
                  className="w-full p-2 rounded border"
                  placeholder="Bölüm"
                />
                <ErrorMessage name={`educationInfo[${index}].department`} component="div" className="text-red-500 text-sm mt-1" />
              </td>
              <td className="p-3 border">
                <Field
                  name={`educationInfo[${index}].graduationDegree`}
                  type="text"
                  className="w-full p-2 rounded border"
                  placeholder="Mezuniyet Derecesi"
                />
                <ErrorMessage name={`educationInfo[${index}].graduationDegree`} component="div" className="text-red-500 text-sm mt-1" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EducationInfo;
