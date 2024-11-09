import React from 'react';
import { Field, ErrorMessage } from 'formik';

function PersonalInfo() {
  return (
    <div className="text-gray-600 p-6 rounded-lg shadow-md mx-auto">
      <h2 className="text-gray-600 text-xl font-semibold mb-6">2. Kişisel Bilgiler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Adı</label>
          <Field
            name="personalInfo.firstName"
            type="text"
            className="w-full p-2 rounded border"
            placeholder="Adınız"
          />
          <ErrorMessage name="personalInfo.firstName" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Soyadı</label>
          <Field
            name="personalInfo.lastName"
            type="text"
            className="w-full p-2 rounded border"
            placeholder="Soyadınız"
          />
          <ErrorMessage name="personalInfo.lastName" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Doğum Yeri</label>
          <Field
            name="personalInfo.birthPlace"
            type="text"
            className="w-full p-2 rounded border"
            placeholder="Doğum Yeriniz"
          />
          <ErrorMessage name="personalInfo.birthPlace" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Doğum Tarihi</label>
          <Field
            name="personalInfo.birthDate"
            type="date"
            className="w-full p-2 rounded border"
          />
          <ErrorMessage name="personalInfo.birthDate" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Cinsiyetiniz</label>
          <Field
            name="personalInfo.gender"
            type="text"
            className="w-full p-2 rounded border"
            placeholder="Cinsiyetiniz"
          />
          <ErrorMessage name="personalInfo.gender" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Cep Telefon</label>
          <Field
            name="personalInfo.phone"
            type="tel"
            className="w-full p-2 rounded border"
            placeholder="Cep Telefonu"
          />
          <ErrorMessage name="personalInfo.phone" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Medeni Hali</label>
          <Field
            name="personalInfo.maritalStatus"
            type="text"
            className="w-full p-2 rounded border"
            placeholder="Medeni Haliniz"
          />
          <ErrorMessage name="personalInfo.maritalStatus" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Çocuk Sayısı</label>
          <Field
            name="personalInfo.numberOfChildren"
            type="number"
            className="w-full p-2 rounded border"
            placeholder="Çocuk Sayısı"
          />
          <ErrorMessage name="personalInfo.numberOfChildren" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Ev Adresiniz</label>
          <Field
            as="textarea"
            name="personalInfo.address"
            className="w-full p-2 rounded border"
            rows="3"
            placeholder="Ev Adresiniz"
          />
          <ErrorMessage name="personalInfo.address" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">E-mail 1</label>
          <Field
            name="personalInfo.email1"
            type="email"
            className="w-full p-2 rounded border"
            placeholder="E-mail 1"
          />
          <ErrorMessage name="personalInfo.email1" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">E-mail 2</label>
          <Field
            name="personalInfo.email2"
            type="email"
            className="w-full p-2 rounded border"
            placeholder="E-mail 2"
          />
          <ErrorMessage name="personalInfo.email2" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Sürücü Ehliyetiniz Var Mı?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <Field type="radio" name="personalInfo.hasLicense" value="evet" className="mr-2" />
              Evet
            </label>
            <label className="flex items-center">
              <Field type="radio" name="personalInfo.hasLicense" value="hayir" className="mr-2" />
              Hayır
            </label>
          </div>
          <ErrorMessage name="personalInfo.hasLicense" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Varsa sınıfını belirtiniz.</label>
          <Field
            name="personalInfo.licenseClass"
            type="text"
            className="w-full p-2 rounded border"
            placeholder="Ehliyet Sınıfı"
          />
          <ErrorMessage name="personalInfo.licenseClass" component="div" className="text-red-500 text-sm mt-1" />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
