import React from 'react';
import { Field, ErrorMessage } from 'formik';

function CitizenshipInfo() {
  return (
    <div className="p-6 rounded-lg text-gray-600">
      <h2 className="text-gray-600 text-xl font-semibold mb-6">3. Vatandaşlık Bilgileri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Türk Vatandaşı mısınız?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <Field type="radio" name="citizenshipInfo.turk_vatandasi" value="evet" className="mr-2" />
              Evet
            </label>
            <label className="flex items-center">
              <Field type="radio" name="citizenshipInfo.turk_vatandasi" value="hayir" className="mr-2" />
              Hayır
            </label>
          </div>
          <ErrorMessage name="citizenshipInfo.turk_vatandasi" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label className="block font-medium mb-1">TC. Kimlik No :</label>
          <Field name="citizenshipInfo.tcKimlikNo" type="text" className="w-full p-2 rounded border" placeholder="Kimlik numaranızı giriniz" />
          <ErrorMessage name="citizenshipInfo.tcKimlikNo" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Başka bir ülke vatandaşı iseniz ve/veya oturumunuz, çalışma izniniz var ise hangi ülke ve kaç yıl belirtiniz</label>
          <Field name="citizenshipInfo.otherCitizenshipDetails" type="text" className="w-full p-2 rounded border" placeholder="Ülke ve yıl bilgisi" />
          <ErrorMessage name="citizenshipInfo.otherCitizenshipDetails" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Yurtdışında çalışmanıza engel bir durumunuz var mı?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <Field type="radio" name="citizenshipInfo.yurtdisi_engel" value="evet" className="mr-2" />
              Evet
            </label>
            <label className="flex items-center">
              <Field type="radio" name="citizenshipInfo.yurtdisi_engel" value="hayir" className="mr-2" />
              Hayır
            </label>
          </div>
          <ErrorMessage name="citizenshipInfo.yurtdisi_engel" component="div" className="text-red-500 text-sm mt-1" />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Varsa Açıklayınız</label>
          <Field as="textarea" name="citizenshipInfo.engelAciklama" className="w-full p-2 rounded border" rows="3" placeholder="Açıklama yazınız" />
          <ErrorMessage name="citizenshipInfo.engelAciklama" component="div" className="text-red-500 text-sm mt-1" />
        </div>
      </div>
    </div>
  );
}

export default CitizenshipInfo;
