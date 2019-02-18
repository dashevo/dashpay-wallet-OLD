/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';
import Styles from './index';

const withStyles = styles => Component => {
  const StyledComponent = props => {
    const { wrappedComponentRef, ...remainingProps } = props;

    return (
      <Styles
        styles={styles}
        {...remainingProps}
        children={props => (
          <Component
            {...remainingProps}
            styles={props.styles}
            ref={wrappedComponentRef}
          />
        )}
      />
    );
  };

  StyledComponent.displayName = `withStyles(${Component.displayName ||
    Component.name})`;
  StyledComponent.WrappedComponent = Component;

  if (__DEV__) {
    StyledComponent.propTypes = {
      wrappedComponentRef: PropTypes.func
    };
  }

  return hoistStatics(StyledComponent, Component);
};

export default withStyles;
