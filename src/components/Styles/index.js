/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { transform } from 'lodash';
import { reduce } from 'lodash';
import { every } from 'lodash';
import { renderProps } from 'utilities';
import parse from './parse';
import type { Props } from './types';
import type { State } from './types';

class Styles extends React.Component<Props, State> {
  static defaultProps = {
    styles: {}
  };

  constructor(props) {
    super(props);
    // TODO: transformStyles(styles)
    const transformedStyles = transform(
      props.styles,
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
    const { transformedStyles } = state;
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
    return renderProps(this.props, this.state);
  }
}

export default Styles;
