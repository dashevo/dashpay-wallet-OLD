import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  address: Yup.string().required('The recipient field is required.'),
  name: Yup.string(),
  image: Yup.string(),
});

export default {
  validationSchema,
};
