// validationReferenceInfo.js
import * as Yup from 'yup';

const validationReferenceInfoSchema = Yup.object().shape({
  references: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Adı ve soyadı zorunludur.'),
      workplace: Yup.string().required('İş yeri bilgisi zorunludur.'),
      position: Yup.string().required('Görevi bilgisi zorunludur.'),
      phone: Yup.string()
        .matches(/^[0-9]{10,11}$/, 'Geçerli bir telefon numarası girin.')
        .required('Telefon numarası zorunludur.'),
    })
  ),
});

export default validationReferenceInfoSchema;
