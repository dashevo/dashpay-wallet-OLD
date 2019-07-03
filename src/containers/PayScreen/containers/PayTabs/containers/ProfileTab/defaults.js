import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('The recipient field is required.'),
  avatarUrl: Yup.string(),
});

export default {
  validationSchema,
};
