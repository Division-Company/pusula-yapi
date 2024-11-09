// validationCitizenshipInfo.js
import * as Yup from 'yup';

const validationCitizenshipInfoSchema = Yup.object().shape({
  turk_vatandasi: Yup.string().required('Türk vatandaşlığı durumu zorunludur.'),
  tcKimlikNo: Yup.string()
    .matches(/^[0-9]{11}$/, 'TC. Kimlik numarası 11 haneli olmalıdır.')
    .when('turk_vatandasi', {
      is: 'evet',
      then: Yup.string().required('TC. Kimlik numarası zorunludur.'),
    }),
  otherCitizenshipDetails: Yup.string().when('turk_vatandasi', {
    is: 'hayir',
    then: Yup.string().required('Diğer ülke vatandaşlık bilgisi zorunludur.'),
  }),
  yurtdisi_engel: Yup.string().required('Yurtdışında çalışmaya engel durumu belirtmek zorunludur.'),
  engelAciklama: Yup.string().when('yurtdisi_engel', {
    is: 'evet',
    then: Yup.string().min(5, 'Açıklama en az 5 karakter olmalıdır.'),
  }),
});

export default validationCitizenshipInfoSchema;
