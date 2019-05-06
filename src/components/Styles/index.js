/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
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
      (result, styleId, selector) => {
        const [block, modifier, state] = parse(selector);
        result[selector] = Object.assign(
          { block, styleId },
          modifier && { modifier },
          state && { state },
        );
        return result;
      },
      {},
    );
    this.state = {
      transformedStyles,
    };
  }

  static getDerivedStateFromProps(props: Props, state: State): State {
    const theme = props.themes[props.theme];
    const transformedStyles = transform(
      props.styles[props.theme],
      (result, styleId, selector) => {
        const [block, modifier, state] = parse(selector);
        result[selector] = Object.assign(
          { block, styleId },
          modifier && { modifier },
          state && { state },
        );
        return result;
      },
      {},
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
      {},
    );
    return {
      transformedStyles,
      styles,
      theme,
    };
  }

  render(): Object {
    return renderProps(this.props, this.state);
  }
}

// The code below should be refactored.
function Theme(props) {
  const tmpStyles = {};

  if (isFunction(props.styles)) {
    Object.keys(themes).forEach((theme) => {
      tmpStyles[theme] = StyleSheet.create(props.styles(themes[theme]));
    });
  }

  return (
    <ThemeConsumer>
      {themeProps => <Styles {...themeProps} {...props} styles={tmpStyles} themes={themes} />}
    </ThemeConsumer>
  );
}

export default Theme;
