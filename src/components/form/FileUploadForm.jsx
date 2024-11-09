import React from 'react';
import { Field, ErrorMessage } from 'formik';

function FileUploadForm({ setFieldValue, values }) {
  return (
    <div className="border border-gray-300 p-4 rounded">
      <label className="block mb-2 font-bold">Dosya Ekle</label>
      <input
        type="file"
        onChange={(event) => {
          setFieldValue('fileUpload.file', event.currentTarget.files[0]);
        }}
        className="block border p-2 w-full"
      />
      {values.fileUpload?.file && <p className="mt-2 text-gray-600">Seçilen Dosya: {values.fileUpload.file.name}</p>}
      <ErrorMessage name="fileUpload.file" component="div" className="text-red-500 text-sm mt-1" />

      <div className="flex items-start space-x-2 mt-4">
        <Field
          type="checkbox"
          name="fileUpload.isChecked"
          className="mt-1"
        />
        <p className="text-sm text-gray-700">
          İş Başvuru Formu'nda paylaştığım...
        </p>
      </div>
      <ErrorMessage name="fileUpload.isChecked" component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
}

export default FileUploadForm;
