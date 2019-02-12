/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

function mapStateToProps(state, props) {
  const address = props.navigation.getParam('recipient', '');
  const contact = state.contacts.local.items[address] || {};
  const { name = '', image = '' } = contact;
  const initialValues = {
    address,
    name,
    image
  };

  return {
    initialValues
  };
}

export default mapStateToProps;
