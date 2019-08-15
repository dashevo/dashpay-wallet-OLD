/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// /////////////////////////////////////////////////////////////////////////////
// This file is still in progress.                                            //
// /////////////////////////////////////////////////////////////////////////////

// External dependencies
import { useState, useEffect, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {
  transform, reduce, every, isArray, mergeWith,
} from 'lodash';

// Internal dependencies
import { useTheme } from 'hooks/Theme';
import themes from 'themes';
import parse from './parse';

function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
  return objValue;
}

// This is temp solution for no-param-reassign error.
// https://github.com/airbnb/javascript/issues/1342
/* eslint no-param-reassign: "error" */
function makeStyles(componentStyles, animatedStyles = () => ({})) {
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
    const { styles } = props;
    const allAnimatedStyles = useMemo(
      () => animatedStyles(props),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );

    const [groupedStyles, setGroupedStyles] = useState(() => {
      let tmpStyles = reduce(
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

      if (styles) {
        tmpStyles = mergeWith({}, tmpStyles, styles, customizer);
      }

      return tmpStyles;
    });

    useEffect(() => {
      let newGroupedStyles = reduce(
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

      if (styles) {
        newGroupedStyles = mergeWith({}, newGroupedStyles, styles, customizer);
      }

      if (allAnimatedStyles) {
        newGroupedStyles = mergeWith({}, newGroupedStyles, allAnimatedStyles, customizer);
      }

      setGroupedStyles(newGroupedStyles);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.active]);

    return groupedStyles;
  };

  return useStyles;
}

export default makeStyles;
