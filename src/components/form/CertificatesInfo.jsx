import React from 'react';

function CertificatesInfo() {
  return (
    <div className="text-gray-600 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">5. Sertifika, Belge ve Lisanslar</h2>
      <textarea
        className="w-full p-2 rounded border"
        rows="5"
        placeholder="Sahip olduğunuz sertifika, belge veya lisansları giriniz"
      ></textarea>
    </div>
  );
}

export default CertificatesInfo;
