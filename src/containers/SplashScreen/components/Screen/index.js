/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { ProgressBar } from 'components';
import { SharedElement } from 'components';
import { Reanimatable } from 'libraries';
import { Logo } from 'components';
import styles from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';

const Screen = (props: Props): ReactElement => (
  <SafeAreaView style={styles.container}>
    <View style={styles.body}>
      <View style={styles.section}>
        <Reanimatable
          ref={props.reanimatableRefs[0]}
          style={styles.reanimatable}>
          <SharedElement elementId={props.elementId}>
            <Logo style={styles.logo} />
          </SharedElement>
        </Reanimatable>
      </View>
      <View style={styles.section}>
        <Reanimatable
          ref={props.reanimatableRefs[1]}
          style={styles.reanimatable}>
          <ProgressBar onComplete={props.handleOnComplete} />
        </Reanimatable>
      </View>
    </View>
  </SafeAreaView>
);

export default Screen;
