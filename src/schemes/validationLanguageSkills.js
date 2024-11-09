// validationLanguageSkills.js
import * as Yup from 'yup';

const validationLanguageSkillsSchema = Yup.object().shape({
  nativeLanguage: Yup.string().required('Ana dilinizi belirtmek zorunludur.'),
  languages: Yup.array().of(
    Yup.object().shape({
      language: Yup.string().required('Dil adı zorunludur.'),
      speaking: Yup.number()
        .min(1, 'Konuşma seviyesi en az 1 olmalıdır.')
        .max(4, 'Konuşma seviyesi en fazla 4 olmalıdır.')
        .required('Konuşma seviyesi zorunludur.'),
      reading: Yup.number()
        .min(1, 'Okuma seviyesi en az 1 olmalıdır.')
        .max(4, 'Okuma seviyesi en fazla 4 olmalıdır.')
        .required('Okuma seviyesi zorunludur.'),
      writing: Yup.number()
        .min(1, 'Yazma seviyesi en az 1 olmalıdır.')
        .max(4, 'Yazma seviyesi en fazla 4 olmalıdır.')
        .required('Yazma seviyesi zorunludur.'),
    })
  ),
  otherLanguages: Yup.string().notRequired(),
});

export default validationLanguageSkillsSchema;
