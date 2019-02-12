/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  recipient: Yup.string().required('The recipient field is required.')
});

export default {
  validationSchema,
  initialValues: {
    recipient: '',
  }
};
