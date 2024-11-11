import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // react-hot-toast'dan toast import edildi
import validationFormPageSchema from '../../schemes/validationFormPage';
import ApplicationInfo from '../form/ApplicationInfo';
import PersonalInfo from '../form/PersonalInfo';
import HealthInfo from '../form/HealthInfo';
import CitizenshipInfo from '../form/CitizenshipInfo';
import EducationInfo from '../form/EducationInfo';
import CertificatesInfo from '../form/CertificatesInfo';
import LanguageSkills from '../form/LanguageSkills';
import ComputerSkills from '../form/ComputerSkills';
import ReferenceInfo from '../form/ReferenceInfo';
import WorkExperience from '../form/WorkExperience';
import FileUpload from '../form/FileUploadForm';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import initialValues from "../../utils/initialValues";

const sanitizeValues = (values) => {
  return JSON.parse(JSON.stringify(values, (key, value) => (value === undefined ? null : value)));
};

const handleFormSubmit = async (values, { setSubmitting }) => {
  try {
    // `applicationDate` alanını şu anki tarih ve saat olarak ayarla
    const sanitizedValues = {
      ...sanitizeValues(values),
      applicationDate: new Date().toISOString(),
    };

    // Verileri Firestore'a kaydedin
    await setDoc(doc(db, 'applications', new Date().toISOString()), sanitizedValues);

    // Başarı mesajını react-hot-toast ile göster
    toast.success('Başvurunuz başarıyla gönderildi!');

    // 2 saniye sonra kariyer sayfasına yönlendir
    setTimeout(() => {
      window.location.href = '/careers';
    }, 2000);

  } catch (error) {
    console.error('Form gönderme hatası:', error);
    toast.error('Form gönderilirken bir hata oluştu.');
  }
  setSubmitting(false);
};

function FormPage() {
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationFormPageSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="bg-gray-900 min-h-screen p-6 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full p-6 space-y-6">
            <h1 className="text-xl font-bold text-orange-400">Çalışan Adayı Başvuru Formu</h1>
            <ApplicationInfo />
            <PersonalInfo />
            <HealthInfo />
            <CitizenshipInfo />
            <EducationInfo />
            <CertificatesInfo />
            <LanguageSkills />
            <ComputerSkills />
            <ReferenceInfo />
            <WorkExperience />
            <FileUpload setFieldValue={setFieldValue} values={values} />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Başvur'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormPage;
