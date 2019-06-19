import React from 'react';
import Interval from 'hooks/Interval';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPendingRequests } from 'state/contacts/actions';

type Props = { getPendingRequestsAction: Function };
const DapiPoll = ({ getPendingRequestsAction }: Props) => (
  <Interval callback={getPendingRequestsAction} delay={10000} />
);

const actions = (dispatch: Function): Object => bindActionCreators({
  getPendingRequestsAction: getPendingRequests,
}, dispatch);

export default connect(state => ({ state }), actions)(DapiPoll);
