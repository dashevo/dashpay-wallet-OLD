/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { transform } from 'lodash';
import { reduce } from 'lodash';
import { every } from 'lodash';
import { renderProps } from 'utilities';
import ThemeConsumer from 'theme/ThemeConsumer';
import parse from './parse';
import type { Props } from './types';
import type { State } from './types';
import { isFunction } from 'lodash';

const themes = {
  blue: {
    avatarContainerBackgroundColor: '#088BE2',
    avatarContainerBorderColor: '#088BE2',
    avatarIconColor: '#fff',
    avatarTextColor: '#fff',
    avatarTitleColor: '#222',
    btnContainerBackgroundColor: '#088BE2',
    btnTextColor: '#fff',
    cardContainerBackgroundColor: '#fff',
    cardContainerBorderColor: 'rgba(0, 0, 0, 0.125)',
    cardHighlightedBackgroundColor: '#088BE2',
    cardHighlightedBorderColor: '#088BE2',
    cardIconColor: '#fff',
    cardSmallColor: 'rgba(0, 0, 0, 0.50)',
    cardSubtitleColor: 'rgba(0, 0, 0, 0.50)',
    cardTextColor: '#fff',
    cardTitleColor: 'rgba(0, 0, 0, 0.75)',
    containerBackgroundColor: '#fff',
    containerBorderColor: '#fff',
    fieldContainerBackgroundColor: '#fff',
    fieldContainerBorderColor: '#fff',
    fieldIconColor: '#222',
    fieldInputBackgroundColor: '#fff',
    fieldInputBorderColor: '#fff',
    fieldInputColor: '#222',
    fieldSeparatorBackgroundColor: '#ccc',
    fieldSeparatorBorderColor: '#ccc',
    navbarContainerBackgroundColor: '#088BE2',
    navbarContainerBorderColor: '#088BE2',
    navbarContainerBorderWidth: 0,
    navbarContainerHeight: 56,
    navbarIconColor: '#fff',
    navbarIconFontSize: 13,
    navbarIconFontWeight: '500',
    navbarIconLineHeight: 15,
    navbarTextColor: '#fff',
    navbarTextFontSize: 13,
    navbarTextFontWeight: '400',
    navbarTextLineHeight: 15,
    navbarTitleColor: '#fff',
    navbarTitleFontSize: 17,
    navbarTitleFontWeight: '500',
    navbarTitleLineHeight: 19
  },
  dark: {
    avatarContainerBackgroundColor: '#7c55fb',
    avatarContainerBorderColor: '#7c55fb',
    avatarIconColor: '#fff',
    avatarTextColor: '#fff',
    avatarTitleColor: '#a7a9af',
    btnContainerBackgroundColor: '#7c55fb',
    btnTextColor: '#fff',
    cardContainerBackgroundColor: '#fff',
    cardContainerBorderColor: 'rgba(0, 0, 0, 0.125)',
    cardHighlightedBackgroundColor: '#7c55fb',
    cardHighlightedBorderColor: '#7c55fb',
    cardIconColor: '#fff',
    cardSmallColor: 'rgba(0, 0, 0, 0.50)',
    cardSubtitleColor: 'rgba(0, 0, 0, 0.50)',
    cardTextColor: '#fff',
    cardTitleColor: 'rgba(0, 0, 0, 0.75)',
    containerBackgroundColor: '#16212e',
    containerBorderColor: '#16212e',
    fieldContainerBackgroundColor: '#16212e',
    fieldContainerBorderColor: '#16212e',
    fieldIconColor: '#a7a9af',
    fieldInputBackgroundColor: '#16212e',
    fieldInputBorderColor: '#16212e',
    fieldInputColor: '#a7a9af',
    fieldSeparatorBackgroundColor: '#ccc',
    fieldSeparatorBorderColor: '#ccc',
    navbarContainerBackgroundColor: '#7c55fb',
    navbarContainerBorderColor: '#7c55fb',
    navbarContainerBorderWidth: 0,
    navbarContainerHeight: 56,
    navbarIconColor: '#fff',
    navbarIconFontSize: 13,
    navbarIconFontWeight: '500',
    navbarIconLineHeight: 15,
    navbarTextColor: '#fff',
    navbarTextFontSize: 13,
    navbarTextFontWeight: '400',
    navbarTextLineHeight: 15,
    navbarTitleColor: '#fff',
    navbarTitleFontSize: 17,
    navbarTitleFontWeight: '500',
    navbarTitleLineHeight: 19
  },
  red: {
    avatarContainerBackgroundColor: '#C92C2D',
    avatarContainerBorderColor: '#C92C2D',
    avatarIconColor: '#fff',
    avatarTextColor: '#fff',
    avatarTitleColor: '#222',
    btnContainerBackgroundColor: '#C92C2D',
    btnTextColor: '#fff',
    cardContainerBackgroundColor: '#fff',
    cardContainerBorderColor: 'rgba(0, 0, 0, 0.125)',
    cardHighlightedBackgroundColor: '#C92C2D',
    cardHighlightedBorderColor: '#C92C2D',
    cardIconColor: '#fff',
    cardSmallColor: 'rgba(0, 0, 0, 0.50)',
    cardSubtitleColor: 'rgba(0, 0, 0, 0.50)',
    cardTextColor: '#fff',
    cardTitleColor: 'rgba(0, 0, 0, 0.75)',
    containerBackgroundColor: '#fff',
    containerBorderColor: '#fff',
    fieldContainerBackgroundColor: '#fff',
    fieldContainerBorderColor: '#fff',
    fieldIconColor: '#222',
    fieldInputBackgroundColor: '#fff',
    fieldInputBorderColor: '#fff',
    fieldInputColor: '#222',
    fieldSeparatorBackgroundColor: '#ccc',
    fieldSeparatorBorderColor: '#ccc',
    navbarContainerBackgroundColor: '#C92C2D',
    navbarContainerBorderColor: '#C92C2D',
    navbarContainerBorderWidth: 0,
    navbarContainerHeight: 56,
    navbarIconColor: '#fff',
    navbarIconFontSize: 13,
    navbarIconFontWeight: '500',
    navbarIconLineHeight: 15,
    navbarTextColor: '#fff',
    navbarTextFontSize: 13,
    navbarTextFontWeight: '400',
    navbarTextLineHeight: 15,
    navbarTitleColor: '#fff',
    navbarTitleFontSize: 17,
    navbarTitleFontWeight: '500',
    navbarTitleLineHeight: 19
  }
};

class Styles extends React.Component<Props, State> {
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
      styles,
      theme
    };
  }

  render(): Object {
    return renderProps(this.props, this.state);
  }
}

function Theme(props) {
  let tmpStyles = {};

  if (isFunction(props.styles)) {
    Object.keys(themes).forEach(theme => {
      tmpStyles[theme] = StyleSheet.create(props.styles(themes[theme]));
    });
  }

  return (
    <ThemeConsumer>
      {themeProps => (
        <Styles {...themeProps} {...props} styles={tmpStyles} themes={themes} />
      )}
    </ThemeConsumer>
  );
}

export default Theme;
