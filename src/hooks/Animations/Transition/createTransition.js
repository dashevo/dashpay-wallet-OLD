/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// /////////////////////////////////////////////////////////////////////////////
// This file is still in progress.                                            //
// /////////////////////////////////////////////////////////////////////////////

// External dependencies
import * as React from 'react';
import Animated from 'react-native-reanimated';

// Internal dependencies
import useTransition from './useTransition';

type Ttem = {
  child: React.Node,
  key: string,
};

type Props = {
  index: number,
  item: Ttem,
  value: any,
  getStyles: Function,
};

function Item(props: Props) {
  const {
    index, item, value, getStyles,
  } = props;
  const memoStyles = React.useMemo(
    () => getStyles(value, index),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [index],
  );

  return <Animated.View style={memoStyles}>{item.child}</Animated.View>;
}

function createTransition(config) {
  function Transition(props) {
    let keys = [];

    React.Children.map(props.children, c => c).forEach((child) => {
      keys.push(child.key);
    });

    keys = keys.join();

    const memoItems = React.useMemo(() => {
      const items = [];
      React.Children.map(props.children, c => c).forEach((child) => {
        items.push({
          child,
          key: child.key,
        });
      });

      return items;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keys]);

    const transition = useTransition(config, memoItems);

    return transition.items.map(item => <Item {...item} />);
  }

  return Transition;
}

export default createTransition;
