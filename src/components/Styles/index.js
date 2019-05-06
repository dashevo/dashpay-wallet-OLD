/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import {
  transform, reduce, every, isFunction,
} from 'lodash';

import { renderProps } from 'utilities';
import { ThemeConsumer } from 'hooks/Theme';
import parse from './parse';
import type { Props, State } from './types';

import themes from './themes';

// The code below should be refactored.
class Styles extends React.Component<Props, State> {
  static defaultProps = {
    styles: {},
  };

  constructor(props) {
    super(props);
    // TODO: transformStyles(styles)
    const transformedStyles = transform(
      props.styles[props.theme],
      (accumulator, styleId, selector) => {
        const [block, modifier, state] = parse(selector);
        const styles = Object.assign(
          { block, styleId },
          modifier && { modifier },
          state && { state },
        );
        return Object.assign({}, accumulator, { [selector]: styles });
      },
      {},
    );
    this.state = {
      transformedStyles,
    };
  }

  static getDerivedStateFromProps(props) {
    const theme = props.themes[props.theme];
    const transformedStyles = transform(
      props.styles[props.theme],
      (accumulator, styleId, selector) => {
        const [block, modifier, state] = parse(selector);
        const styles = Object.assign(
          { block, styleId },
          modifier && { modifier },
          state && { state },
        );
        return Object.assign({}, accumulator, { [selector]: styles });
      },
      {},
    );

    // TODO: groupStyles(transformedStyles)
    // Prevents the component from unnecessary updating.
    const groupStyles = reduce(
      transformedStyles,
      (accumulator, value) => {
        const { block, styleId, ...requredProps } = value;
        const propIsTrue = propKey => props[propKey] === true;
        const hasRequredProps = every(requredProps, propIsTrue);
        const styles = {};

        if (!hasRequredProps) {
          return accumulator;
        }

        if (!styles[block]) {
          styles[block] = [];
        }

        styles[block].push(styleId);
        return Object.assign({}, accumulator, styles);
      },
      {},
    );
    return {
      transformedStyles,
      styles: groupStyles,
      theme,
    };
  }

  render(): Object {
    return renderProps(this.props, this.state);
  }
}

// The code below should be refactored.
function Theme({ styles, ...rest }) {
  const tmpStyles = {};

  if (isFunction(styles)) {
    Object.keys(themes).forEach((theme) => {
      tmpStyles[theme] = StyleSheet.create(styles(themes[theme]));
    });
  }

  return (
    <ThemeConsumer>
      {themeProps => <Styles {...themeProps} {...rest} styles={tmpStyles} themes={themes} />}
    </ThemeConsumer>
  );
}

Theme.propTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired,
  ]).isRequired,
};

export default Theme;
