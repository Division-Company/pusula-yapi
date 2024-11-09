// validationWorkExperience.js
import * as Yup from 'yup';

const validationWorkExperienceSchema = Yup.object().shape({
  experiences: Yup.array().of(
    Yup.object().shape({
      companyName: Yup.string().required('İş yeri adı zorunludur.'),
      city: Yup.string().required('Şehir bilgisi zorunludur.'),
      position: Yup.string().required('Görevi bilgisi zorunludur.'),
      monthlySalary: Yup.number()
        .typeError('Geçerli bir maaş girin.')
        .positive('Maaş pozitif bir sayı olmalıdır.')
        .required('Aylık net maaş zorunludur.'),
      startDate: Yup.date().required('İşe giriş tarihi zorunludur.'),
      endDate: Yup.date()
        .required('Ayrılma tarihi zorunludur.')
        .min(Yup.ref('startDate'), 'Ayrılma tarihi, işe giriş tarihinden sonra olmalıdır.'),
      managerName: Yup.string().required('Yöneticinizin adı zorunludur.'),
      managerPosition: Yup.string().required('Yöneticinizin görevi zorunludur.'),
      managerPhone: Yup.string()
        .matches(/^[0-9]{10,11}$/, 'Geçerli bir telefon numarası girin.')
        .required('Yöneticinizin telefon numarası zorunludur.'),
      reasonForLeaving: Yup.string().required('Ayrılma sebebi zorunludur.'),
    })
  ),
});

export default validationWorkExperienceSchema;
