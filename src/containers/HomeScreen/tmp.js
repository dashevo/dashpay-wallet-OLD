/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { connect } from 'react-redux';

import ProgressBar from 'components/ProgressBar';
import Avatar from 'components/Avatar';

import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { Text } from 'react-native';
import { IconButton } from 'components';
import { Logo } from 'components';
import { Icon } from 'components';
import { View } from 'react-native';
import { Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import selectors from './selectors';
import actions from './actions';
import styles from './styles';

type Props = any;
type State = any;

export function Activities(props) {
  const { height } = props;
  return (
    <FlatList
      data={[
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
        { key: 'd' },
        { key: 'e' },
        { key: 'f' },
        { key: 'k' },
        { key: 'l' },
        { key: 't' }
      ]}
      contentContainerStyle={{}}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => alert(item.key)}
          style={{
            height: 128,
            backgroundColor: '#fff',
            borderColor: '#fff',
            padding: 32,
            borderRadius: 6,
            marginTop: 16
          }}>
          <Text>{item.key}</Text>
        </TouchableOpacity>
      )}
    />
  );
}



export class SpringProvider extends React.Component<any, any> {

}
