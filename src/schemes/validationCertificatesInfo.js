// validationCertificatesInfo.js
import * as Yup from 'yup';

const validationCertificatesInfoSchema = Yup.object().shape({
  certificates: Yup.string()
    .min(5, 'Sertifika bilgisi en az 5 karakter olmalıdır.')
    .required('Sertifika, belge veya lisans bilgisi zorunludur.'),
});

export default validationCertificatesInfoSchema;
