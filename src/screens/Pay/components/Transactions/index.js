/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';

// Internal dependencies
import { SCREEN_HEIGHT } from 'constants';
import TransactionCard from 'hooks/Card/Transaction';
import type { Transaction } from 'state/transactions/types';
import useOnLayout from './useOnLayout';
import runAnimation from './runAnimation';

const { Value } = Animated;

type Items = Array<Transaction>;
type Props = {
  data: Items,
  children: React.Node,
};

// This list should be refactored and beautified and should be used on HomeScreen as well.
const INITIAL_HEIGHT = SCREEN_HEIGHT - 70;

function renderListHeaderComponent(minHeight, children) {
  return <Animated.View style={{ minHeight }}>{children}</Animated.View>;
}

function renderItem({ item }: { item: Transaction }) {
  return <TransactionCard key={item.transactionId} {...item} />;
}

function Transactions({ children, ...rest }: Props) {
  const { onLayout, height } = useOnLayout(INITIAL_HEIGHT);
  const [minHeight] = useState(() => runAnimation(new Value(INITIAL_HEIGHT), height));

  const ListHeaderComponent = renderListHeaderComponent(minHeight, children);

  return (
    <FlatList
      {...rest}
      onLayout={onLayout}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={renderItem}
    />
  );
}

export default Transactions;
