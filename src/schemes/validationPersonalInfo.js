// validationPersonalInfo.js
import * as Yup from 'yup';

const validationPersonalInfoSchema = Yup.object().shape({
  firstName: Yup.string().required('Adınız zorunludur.'),
  lastName: Yup.string().required('Soyadınız zorunludur.'),
  birthPlace: Yup.string().required('Doğum yeri zorunludur.'),
  birthDate: Yup.date().required('Doğum tarihi zorunludur.'),
  gender: Yup.string().required('Cinsiyet zorunludur.'),
  phone: Yup.string()
    .matches(/^[0-9]{10,11}$/, 'Geçerli bir telefon numarası girin.')
    .required('Cep telefonu zorunludur.'),
  maritalStatus: Yup.string().required('Medeni hal zorunludur.'),
  numberOfChildren: Yup.number()
    .min(0, 'Çocuk sayısı 0 veya daha büyük olmalıdır.')
    .integer('Geçerli bir sayı girin.')
    .required('Çocuk sayısı zorunludur.'),
  address: Yup.string().required('Ev adresi zorunludur.'),
  email1: Yup.string().email('Geçerli bir e-posta girin.').required('E-mail 1 zorunludur.'),
  email2: Yup.string().email('Geçerli bir e-posta girin.').notRequired(),
  hasLicense: Yup.string().required('Ehliyet durumu zorunludur.'),
  licenseClass: Yup.string().when('hasLicense', {
    is: 'evet',
    then: Yup.string().required('Ehliyet sınıfı zorunludur.'),
  }),
});

export default validationPersonalInfoSchema;
