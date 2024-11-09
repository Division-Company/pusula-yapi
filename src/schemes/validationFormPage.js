// validationFormPage.js
import * as Yup from 'yup';
import validationApplicationInfoSchema from './validationApplicationInfo';
import validationPersonalInfoSchema from './validationPersonalInfo';
import validationHealthInfoSchema from './validationHealthInfo';
import validationCitizenshipInfoSchema from './validationCitizenshipInfo';
import validationEducationInfoSchema from './validationEducationInfo';
import validationCertificatesInfoSchema from './validationCertificatesInfo';
import validationLanguageSkillsSchema from './validationLanguageSkills';
import validationComputerSkillsSchema from './validationComputerSkills';
import validationReferenceInfoSchema from './validationReferenceInfo';
import validationWorkExperienceSchema from './validationWorkExperience';
import validationFileUploadSchema from './validationFileUpload';

const validationFormPageSchema = Yup.object().shape({
    applicationInfo: validationApplicationInfoSchema,
    personalInfo: validationPersonalInfoSchema,
    healthInfo: validationHealthInfoSchema,
    citizenshipInfo: validationCitizenshipInfoSchema,
    educationInfo: validationEducationInfoSchema,
    certificatesInfo: validationCertificatesInfoSchema,
    languageSkills: validationLanguageSkillsSchema,
    computerSkills: validationComputerSkillsSchema,
    referenceInfo: validationReferenceInfoSchema,
    workExperience: validationWorkExperienceSchema,
    fileUpload: validationFileUploadSchema,
});

export default validationFormPageSchema;
