// validationEducationInfo.js
import * as Yup from 'yup';

const validationEducationInfoSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      schoolName: Yup.string().required('Okul adı/şehir bilgisi zorunludur.'),
      startDate: Yup.date().required('Başlangıç tarihi zorunludur.'),
      endDate: Yup.date()
        .required('Bitiş tarihi zorunludur.')
        .min(Yup.ref('startDate'), 'Bitiş tarihi, başlangıç tarihinden sonra olmalıdır.'),
      department: Yup.string().required('Bölüm bilgisi zorunludur.'),
      graduationDegree: Yup.string().required('Mezuniyet derecesi zorunludur.'),
    })
  ),
});

export default validationEducationInfoSchema;
