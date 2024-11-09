import React from 'react';
import { Field, ErrorMessage } from 'formik';

function WorkExperience() {
  return (
    <div className="p-4 rounded text-gray-600">
      <h2 className="font-bold mb-4">9. İş Tecrübesi</h2>
      <p className="text-sm mb-4">Son işinizden başlayarak doldurunuz.</p>
      {Array(3).fill(0).map((_, index) => (
        <div key={index} className="mb-6">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <Field
                name={`workExperience.experiences[${index}].companyName`}
                type="text"
                placeholder="İş Yeri Adı"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage name={`workExperience.experiences[${index}].companyName`} component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <Field
                name={`workExperience.experiences[${index}].city`}
                type="text"
                placeholder="Şehir"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage name={`workExperience.experiences[${index}].city`} component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <Field
                name={`workExperience.experiences[${index}].position`}
                type="text"
                placeholder="Görevi"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage name={`workExperience.experiences[${index}].position`} component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <Field
                name={`workExperience.experiences[${index}].monthlySalary`}
                type="text"
                placeholder="Aylık Net Maaş"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage name={`workExperience.experiences[${index}].monthlySalary`} component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <Field
                name={`workExperience.experiences[${index}].startDate`}
                type="date"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage name={`workExperience.experiences[${index}].startDate`} component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <Field
                name={`workExperience.experiences[${index}].endDate`}
                type="date"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage name={`workExperience.experiences[${index}].endDate`} component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <Field
                name={`workExperience.experiences[${index}].managerName`}
                type="text"
                placeholder="Yöneticinizin Adı"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage name={`workExperience.experiences[${index}].managerName`} component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <Field
                name={`workExperience.experiences[${index}].managerPosition`}
                type="text"
                placeholder="Yöneticinizin Görevi"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage name={`workExperience.experiences[${index}].managerPosition`} component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <Field
                name={`workExperience.experiences[${index}].managerPhone`}
                type="text"
                placeholder="Yöneticinizin Telefonu"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage name={`workExperience.experiences[${index}].managerPhone`} component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>
          <div className="mb-4">
            <Field
              as="textarea"
              name={`workExperience.experiences[${index}].reasonForLeaving`}
              placeholder="Ayrılma Sebebiniz"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage name={`workExperience.experiences[${index}].reasonForLeaving`} component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
