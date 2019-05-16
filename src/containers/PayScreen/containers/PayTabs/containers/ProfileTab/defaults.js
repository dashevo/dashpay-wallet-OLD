/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  address: Yup.string().required('The recipient field is required.'),
  username: Yup.string().required('The username field is required.'),
  name: Yup.string(),
  image: Yup.string(),
});

export default {
  validationSchema,
};
