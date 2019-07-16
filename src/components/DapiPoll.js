// @flow
import React from 'react';
import Interval from 'hooks/Interval';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { dpaIsInitializedSelector } from 'state/account/selectors';
import { getPendingRequests } from 'state/contacts/actions';

type Props = {
  getPendingRequestsAction: Function,
  dpaIsInitialized: Boolean,
};
const DapiPoll = ({
  dpaIsInitialized,
  getPendingRequestsAction,
}: Props) => (
  dpaIsInitialized && <Interval callback={getPendingRequestsAction} delay={10000} />
);

const actions = (dispatch: Function): Object => bindActionCreators({
  getPendingRequestsAction: getPendingRequests,
}, dispatch);

const selectors = createSelector(
  dpaIsInitializedSelector,
  dpaIsInitialized => ({
    dpaIsInitialized,
  }),
);

export default connect(selectors, actions)(DapiPoll);
