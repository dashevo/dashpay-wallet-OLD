/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { transform, reduce, every } from 'lodash';

// Internal dependencies
import parse from './parse';
import { useTheme } from 'hooks/Theme';
import themes from 'themes';

const defaultObj = {};
const defaultFunc = () => ({});

function makeStyles(componentStyles) {
  const allStyles = {};
  const transformedStyles = {};

  Object.keys(themes).forEach(themeName => {
    const theme = themes[themeName];
    const styles = componentStyles(theme);
    allStyles[themeName] = StyleSheet.create(styles);
  });

  Object.keys(themes).forEach(themeName => {
    const theme = themes[themeName];
    transformedStyles[themeName] = transform(
      allStyles[themeName],
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
  });

  const useStyles = (props = {}) => {
    const { theme } = useTheme();

    const [groupedStyles, setGroupedStyles] = useState(() => {
      return reduce(
        transformedStyles[theme],
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
    });

    useEffect(
      () => {
        const groupedStyles = reduce(
          transformedStyles[theme],
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
        setGroupedStyles(groupedStyles);
      },
      [props.active]
    );

    return groupedStyles;
  };

  return useStyles;
}

export default makeStyles;
