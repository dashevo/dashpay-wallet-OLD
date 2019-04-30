/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import * as React from 'react';
import { useState, useContext, useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { transform, reduce, every } from 'lodash';

// Internal dependencies
import parse from './parse';
import { ThemeContext } from 'hooks/Theme';
import { themes } from 'hooks/Theme';

const defaultObj = {};
const defaultFunc = () => ({});

function useStyles(styles, props) {
  const [allStyles, setAllStyles] = useState({});
  const [groupedStyles, setGroupedStyles] = useState({});
  const [transformedStyles, setTransformedStyles] = useState({});
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const allStyles = {};
    Object.keys(themes).forEach(theme => {
      allStyles[theme] = StyleSheet.create(styles(themes[theme]));
    });

    const transformedStyles = transform(
      allStyles[theme],
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

    const groupedStyles = reduce(
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

    setAllStyles(allStyles);
    setTransformedStyles(transformedStyles);
    setGroupedStyles(groupedStyles);
  }, [theme]);

  useEffect(() => {
    const groupedStyles = reduce(
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

    setGroupedStyles(groupedStyles);
  }, [props]);

  return [groupedStyles, themes[theme]];
}

export default useStyles;
