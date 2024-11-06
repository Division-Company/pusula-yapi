import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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
import FileUpload from '../form/FileUpload';
import SubmitButton from '../form/SubmitButton';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Formdaki diğer alanlar burada tanımlanır
  });
  const [file, setFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleCheckboxChange = (e) => setIsChecked(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Lütfen onay kutusunu işaretleyin.");
      return;
    }

    // EmailJS'yi kullanarak form verilerini gönder
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Başvurunuz başarıyla gönderildi!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Form gönderilirken bir hata oluştu.');
      });
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full p-6 space-y-6">
        <h1 className="text-xl font-bold text-orange-400">Çalışan Adayı Başvuru Formu</h1>
        <form onSubmit={handleSubmit}>
          <ApplicationInfo handleChange={handleChange} formData={formData} />
          <PersonalInfo handleChange={handleChange} formData={formData} />
          <HealthInfo handleChange={handleChange} formData={formData} />
          <CitizenshipInfo handleChange={handleChange} formData={formData} />
          <EducationInfo handleChange={handleChange} formData={formData} />
          <CertificatesInfo handleChange={handleChange} formData={formData} />
          <LanguageSkills handleChange={handleChange} formData={formData} />
          <ComputerSkills handleChange={handleChange} formData={formData} />
          <ReferenceInfo handleChange={handleChange} formData={formData} />
          <WorkExperience handleChange={handleChange} formData={formData} />
          <FileUpload
            file={file}
            handleFileChange={handleFileChange}
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}

export default FormPage;
