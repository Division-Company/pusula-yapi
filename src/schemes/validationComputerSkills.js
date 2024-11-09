// validationComputerSkills.js
import * as Yup from 'yup';

const validationComputerSkillsSchema = Yup.object().shape({
  skills: Yup.array().of(
    Yup.object().shape({
      program: Yup.string().required('Program adı zorunludur.'),
      level: Yup.number()
        .min(1, 'Seviye en az 1 olmalıdır.')
        .max(4, 'Seviye en fazla 4 olmalıdır.')
        .required('Seviye zorunludur.'),
      practice: Yup.number()
        .min(1, 'Pratik en az 1 olmalıdır.')
        .max(4, 'Pratik en fazla 4 olmalıdır.')
        .required('Pratik zorunludur.'),
      speed: Yup.number()
        .min(1, 'Hız en az 1 olmalıdır.')
        .max(4, 'Hız en fazla 4 olmalıdır.')
        .required('Hız zorunludur.'),
    })
  ),
  otherSkills: Yup.string().notRequired(),
});

export default validationComputerSkillsSchema;
