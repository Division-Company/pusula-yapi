import React from 'react';
import { Field, ErrorMessage } from 'formik';

function CertificatesInfo() {
  return (
    <div className="text-gray-600 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">5. Sertifika, Belge ve Lisanslar</h2>
      <div>
        <Field
          as="textarea"
          name="certificatesInfo.certificates"
          className="w-full p-2 rounded border"
          rows="5"
          placeholder="Sahip olduğunuz sertifika, belge veya lisansları giriniz"
        />
        <ErrorMessage name="certificatesInfo.certificates" component="div" className="text-red-500 text-sm mt-1" />
      </div>
    </div>
  );
}

export default CertificatesInfo;
