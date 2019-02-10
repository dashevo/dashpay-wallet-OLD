/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ThemeConsumer from './ThemeConsumer';
import { transform } from 'lodash';
import { reduce } from 'lodash';
import { every } from 'lodash';
import { renderProps } from 'utilities';
import parse from './parse';

const themes = {
  light: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    color: '#000'
  },
  dark: {
    backgroundColor: '#000',
    borderColor: '#000',
    color: '#fff'
  }
};

const withStyles = styles => Component => {
  const tmpStyles = {};
  Object.keys(themes).forEach(theme => {
    tmpStyles[theme] = StyleSheet.create(styles(themes[theme]));
  });

  class Styles extends React.Component<any, any> {
    static defaultProps = {
      styles: {}
    };

    constructor(props) {
      super(props);
      // TODO: transformStyles(styles)
      const transformedStyles = transform(
        props.styles[props.theme],
        (result, styleId, selector) => {
          const [block, modifier, state] = parse(selector);
          result[selector] = Object.assign(
            { block, styleId },
            modifier && { modifier },
            state && { state }
          );
          return result;
        },
        {}
      );
      this.state = {
        transformedStyles
      };
    }

    static getDerivedStateFromProps(props: Props, state: State): State {
      const transformedStyles = transform(
        props.styles[props.theme],
        (result, styleId, selector) => {
          const [block, modifier, state] = parse(selector);
          result[selector] = Object.assign(
            { block, styleId },
            modifier && { modifier },
            state && { state }
          );
          return result;
        },
        {}
      );

      // TODO: groupStyles(transformedStyles)
      // Prevents the component from unnecessary updating.
      const styles = reduce(
        transformedStyles,
        (result, value, key) => {
          const { block, styleId, ...requredProps } = value;
          const propIsTrue = propKey => props[propKey] === true;
          const hasRequredProps = every(requredProps, propIsTrue);

          if (!hasRequredProps) {
            return result;
          }

          if (!result[block]) {
            result[block] = [];
          }

          result[block].push(styleId);
          return result;
        },
        {}
      );
      return {
        transformedStyles,
        styles
      };
    }

    render(): Object {
      return <Component {...this.props} {...this.state} />;
    }
  }

  const StyledComponent = props => {
    return (
      <ThemeConsumer>
        {themeProps => <Styles {...themeProps} {...props} styles={tmpStyles} />}
      </ThemeConsumer>
    );
  };

  // StyledComponent.displayName = `withStyles(${Component.displayName ||
  //   Component.name})`;
  // StyledComponent.WrappedComponent = Component;
  //
  // if (__DEV__) {
  //   StyledComponent.propTypes = {
  //     wrappedComponentRef: PropTypes.func
  //   };
  // }

  return StyledComponent;
};

export default withStyles;
