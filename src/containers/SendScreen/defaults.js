/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  amount: Yup.string().required('Required'),
  currency: Yup.string().required('Required'),
  recipient: Yup.string().required('Required')
});

export default {
  validationSchema,
  initialValues: {}
};
