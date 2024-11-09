import React from 'react';
import { Formik, Form } from 'formik';
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
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';

const sanitizeValues = (values) => {
  return JSON.parse(JSON.stringify(values, (key, value) => (value === undefined ? null : value)));
};

const handleFormSubmit = async (values, { setSubmitting }) => {
  try {
    // `values` nesnesindeki `undefined` alanları `null` yapın
    const sanitizedValues = sanitizeValues(values);

    // Verileri Firestore'a kaydedin
    await setDoc(doc(db, 'applications', new Date().toISOString()), sanitizedValues);
    alert('Form başarıyla gönderildi!');
  } catch (error) {
    console.error('Form gönderme hatası:', error);
    alert('Form gönderilirken bir hata oluştu.');
  }
  setSubmitting(false);
};

function FormPage() {
  return (
    <Formik
      initialValues={{
        applicationInfo: {
          department: '', // Boş string kullanarak undefined olmamasını sağlıyoruz
          jobTitle: '',
          jobCode: '',
          reasonForApplication: '',
          requestedSalary: '',
          startDate: '',
          currentlyWorking: '',
          currentCompanyDetails: '',
          overtimeAcceptance: '',
        },
        personalInfo: {
          firstName: '',
          lastName: '',
          // Diğer alanları da boş string veya uygun başlangıç değerleri olarak ayarlayın
        },
        healthInfo: {
          height: '',
          weight: '',
          chronicDisease: '',
          physicalDisability: '',
          phobias: '',
        },
        // Diğer bölümler için de aynı düzenlemeyi yapın
      }}
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
