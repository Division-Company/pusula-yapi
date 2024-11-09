// validationFileUpload.js
import * as Yup from 'yup';

const validationFileUploadSchema = Yup.object().shape({
  file: Yup.mixed()
    .required('Dosya eklemek zorunludur.')
    .test('fileSize', 'Dosya boyutu en fazla 5MB olmalıdır.', (value) => {
      return value && value.size <= 5 * 1024 * 1024; // 5MB
    })
    .test('fileType', 'Sadece PDF ve DOCX dosyaları kabul edilir.', (value) => {
      return value && ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type);
    }),
  isChecked: Yup.boolean().oneOf([true], 'Bu onayı kabul etmek zorunludur.'),
});

export default validationFileUploadSchema;
