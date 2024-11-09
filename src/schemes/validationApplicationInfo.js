// validationApplicationInfo.js
import * as Yup from 'yup';

const validationApplicationInfoSchema = Yup.object().shape({
  department: Yup.string().required('Başvurulan departman zorunludur.'),
  jobTitle: Yup.string().required('Başvurulan görev adı zorunludur.'),
  jobCode: Yup.string().required('İş ilanı yeri / kodu zorunludur.'),
  reasonForApplication: Yup.string()
    .min(10, 'Bu alan en az 10 karakter olmalıdır.')
    .required('Başvuru nedeni ve açıklaması zorunludur.'),
  requestedSalary: Yup.number()
    .typeError('Geçerli bir sayı girin.')
    .positive('Pozitif bir sayı girin.')
    .required('Talep ettiğiniz aylık net ücret zorunludur.'),
  startDate: Yup.date().required('İşe başlayabileceğiniz tarih zorunludur.'),
  currentlyWorking: Yup.string().required('Bu alan zorunludur.'),
  currentCompanyDetails: Yup.string().when('currentlyWorking', {
    is: 'yes',
    then: Yup.string().required('Çalışıyorsanız, firma adı/göreviniz zorunludur.'),
  }),
  overtimeAcceptance: Yup.string().required('Fazla mesai kabul durumu zorunludur.'),
});

export default validationApplicationInfoSchema;
