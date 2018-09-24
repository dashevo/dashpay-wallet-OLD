/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { View } from 'react-native';
import { ProgressBar } from 'components';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import styles from './styles';
import { SharedElement } from 'components';
import { Reanimatable } from 'libraries';
import { Logo } from 'components';
import defaultProps from './props';

const Screen = (props: Props): React.Element<any> => (
  <View style={styles.container}>
    <View style={styles.body}>
      <View style={styles.section}>
        <Reanimatable
          duration={3000}
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
  </View>
);

Screen.defaultProps = defaultProps;
export default Screen;
