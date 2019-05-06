/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { transform, reduce, every } from 'lodash';

// Internal dependencies
import { useTheme } from 'hooks/Theme';
import themes from 'themes';
import parse from './parse';

function makeStyles(componentStyles) {
  const allStyles = {};
  const transformedStyles = {};

  Object.keys(themes).forEach((themeName) => {
    const theme = themes[themeName];
    const styles = componentStyles(theme);
    allStyles[themeName] = StyleSheet.create(styles);
  });

  Object.keys(themes).forEach((themeName) => {
    transformedStyles[themeName] = transform(
      allStyles[themeName],
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
  });

  const useStyles = (props = {}) => {
    const { theme } = useTheme();
    const [groupedStyles, setGroupedStyles] = useState(() => reduce(
      transformedStyles[theme],
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
    ));
    useEffect(
      () => {
        const newStyles = reduce(
          transformedStyles[theme],
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
        setGroupedStyles(newStyles);
      },
      [props.active],
    );

    return [groupedStyles, themes[theme]];
  };

  return useStyles;
}

export default makeStyles;
