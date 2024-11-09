import React from 'react';
import { Field, ErrorMessage } from 'formik';

function ReferenceInfo() {
  return (
    <div className="text-gray-600 p-4 rounded">
      <h2 className="font-bold mb-4">8. Referanslar / Reference Contacts</h2>
      <p className="text-sm mb-4">
        Referans verdiğiniz kişilerden, isimlerini, iletişim ve mesleki bilgilerini şirketimizle paylaşmak için izin alınması çalışan adayının yükümlülüğüdür.
      </p>
      {Array(4).fill(0).map((_, index) => (
        <div key={index} className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <Field
              name={`referenceInfo.references[${index}].name`}
              type="text"
              placeholder="Adı S.Ad"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage name={`referenceInfo.references[${index}].name`} component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Field
              name={`referenceInfo.references[${index}].workplace`}
              type="text"
              placeholder="İş Yeri"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage name={`referenceInfo.references[${index}].workplace`} component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Field
              name={`referenceInfo.references[${index}].position`}
              type="text"
              placeholder="Görevi"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage name={`referenceInfo.references[${index}].position`} component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Field
              name={`referenceInfo.references[${index}].phone`}
              type="text"
              placeholder="Telefon No"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage name={`referenceInfo.references[${index}].phone`} component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReferenceInfo;
