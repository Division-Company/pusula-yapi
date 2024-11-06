import React from 'react';

function FileUpload({ file, handleFileChange, isChecked, handleCheckboxChange }) {
  return (
    <div className="border border-gray-300 p-4 rounded">
      <label className="block mb-2 font-bold">Dosya Ekle</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="block border p-2 w-full"
      />
      {file && <p className="mt-2 text-gray-600">Seçilen Dosya: {file.name}</p>}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mt-1"
        />
        <p className="text-sm text-gray-700">
          İş Başvuru Formu'nda paylaştığım...
        </p>
      </div>
    </div>
  );
}

export default FileUpload;
