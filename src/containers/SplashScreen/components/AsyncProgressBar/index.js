/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from 'components';

class AsyncProgressBar extends React.Component {
  render(): React.Element<any> {
    return <ProgressBar {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

AsyncProgressBar = connect(mapStateToProps)(AsyncProgressBar);

export default AsyncProgressBar;
