/**
 * Copyright (c) 2017-present, Elephant, Inc.
 *
 */

// External dependencies
import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { transform, reduce, every } from 'lodash';

// Internal dependencies
import { useTheme } from 'hooks/Theme';
import themes from 'themes';
import parse from './parse';

// This is temp solution for no-param-reassign error.
// https://github.com/airbnb/javascript/issues/1342
/* eslint no-param-reassign: "error" */
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
  });

  const useStyles = (props = {}) => {
    const { theme } = useTheme();
    const [groupedStyles, setGroupedStyles] = useState(() => reduce(
      transformedStyles[theme],
      (result, value) => {
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
    ));
    useEffect(
      () => {
        const newGroupedStyles = reduce(
          transformedStyles[theme],
          (result, value) => {
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
        setGroupedStyles(newGroupedStyles);
      },
      [props.active],
    );

    return groupedStyles;
  };

  return useStyles;
}

export default makeStyles;
