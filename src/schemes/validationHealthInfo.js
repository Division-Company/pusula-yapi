// validationHealthInfo.js
import * as Yup from 'yup';

const validationHealthInfoSchema = Yup.object().shape({
  height: Yup.number()
    .typeError('Boyunuz geçerli bir sayı olmalıdır.')
    .positive('Boyunuz pozitif bir değer olmalıdır.')
    .required('Boyunuz zorunludur.'),
  weight: Yup.number()
    .typeError('Kilonuz geçerli bir sayı olmalıdır.')
    .positive('Kilonuz pozitif bir değer olmalıdır.')
    .required('Kilonuz zorunludur.'),
  chronicDisease: Yup.string().required('Kronik rahatsızlık bilgisi zorunludur.'),
  physicalDisability: Yup.string().required('Bedensel engel bilgisi zorunludur.'),
  phobias: Yup.string().required('Fobi bilgisi zorunludur.'),
});

export default validationHealthInfoSchema;
