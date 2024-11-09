import React from 'react';
import { Field, ErrorMessage } from 'formik';

function ApplicationInfo() {
  return (
    <div className="space-y-4 border-b pb-4 text-gray-600">
      <h2 className="text-lg font-semibold text-gray-700">1. Başvuru Bilgisi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Başvurulan Departman</label>
          <Field as="select" name="applicationInfo.department" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="">Seçiniz</option>
            <option value="BİLGİ SİSTEMLERİ">BİLGİ SİSTEMLERİ</option>
            <option value="BÜTÇE & PLANLAMA">BÜTÇE & PLANLAMA</option>
            <option value="DIŞ TİCARET & LOJİSTİK">DIŞ TİCARET & LOJİSTİK</option>
            {/* Diğer seçenekler */}
          </Field>
          <ErrorMessage name="applicationInfo.department" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Başvurulan Görev Adı</label>
          <Field as="select" name="applicationInfo.jobTitle" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="">Seçiniz</option>
            {/* Diğer görev adı seçenekleri */}
          </Field>
          <ErrorMessage name="applicationInfo.jobTitle" component="div" className="text-red-500 text-sm mt-1" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">İş ilanı yeri / kodu</label>
        <Field name="applicationInfo.jobCode" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        <ErrorMessage name="applicationInfo.jobCode" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Başvurduğunuz görevi isteme nedeninizi, eğitiminizi, iş tecrübenizi, yeteneklerinizi değerlendiriniz.</label>
        <Field as="textarea" name="applicationInfo.reasonForApplication" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows="3" />
        <ErrorMessage name="applicationInfo.reasonForApplication" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Talep ettiğiniz aylık net ücret</label>
          <Field name="applicationInfo.requestedSalary" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <ErrorMessage name="applicationInfo.requestedSalary" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">İşe başlayabileceğiniz tarih</label>
          <Field name="applicationInfo.startDate" type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <ErrorMessage name="applicationInfo.startDate" component="div" className="text-red-500 text-sm mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="block text-sm font-medium text-gray-700">Şu anda çalışıyor musunuz?</span>
          <div className="flex items-center space-x-4 mt-1">
            <label className="inline-flex items-center">
              <Field type="radio" name="applicationInfo.currentlyWorking" value="yes" className="form-radio text-blue-600" />
              <span className="ml-2">Evet</span>
            </label>
            <label className="inline-flex items-center">
              <Field type="radio" name="applicationInfo.currentlyWorking" value="no" className="form-radio text-blue-600" />
              <span className="ml-2">Hayır</span>
            </label>
          </div>
          <ErrorMessage name="applicationInfo.currentlyWorking" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Çalışıyorsanız; firma adı/göreviniz</label>
          <Field name="applicationInfo.currentCompanyDetails" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <ErrorMessage name="applicationInfo.currentCompanyDetails" component="div" className="text-red-500 text-sm mt-1" />
        </div>
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-700">Gerektiğinde fazla mesai yapmayı kabul eder misiniz?</span>
        <div className="flex items-center space-x-4 mt-1">
          <label className="inline-flex items-center">
            <Field type="radio" name="applicationInfo.overtimeAcceptance" value="yes" className="form-radio text-blue-600" />
            <span className="ml-2">Evet</span>
          </label>
          <label className="inline-flex items-center">
            <Field type="radio" name="applicationInfo.overtimeAcceptance" value="no" className="form-radio text-blue-600" />
            <span className="ml-2">Hayır</span>
          </label>
        </div>
        <ErrorMessage name="applicationInfo.overtimeAcceptance" component="div" className="text-red-500 text-sm mt-1" />
      </div>
    </div>
  );
}

export default ApplicationInfo;
