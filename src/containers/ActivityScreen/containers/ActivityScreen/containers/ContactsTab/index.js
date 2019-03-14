/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Internal dependencies
import Transactions from './components/Transactions';
import selector from './selectors';
import actions from './actions';

export default connect(
  selector,
  actions
)(Transactions);
