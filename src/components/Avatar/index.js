/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import Composer from 'utilities/compose';
import { Image } from 'react-native';
import { renderProps } from 'utilities';
import { isFunction } from 'lodash';
import Styles from 'components/Styles';
import Touch from 'components/Touch';
import Text from 'components/Text';
import Icon from 'components/Icon';
import styles from './styles';

type Props = {};

function Card(tmpProps) {
  let { children, ...rest } = tmpProps;
  return (
    <Composer
      components={[
        (props: Props): React.Element<any> => (
          <Touch {...props} {...rest} onPress={tmpProps.onPress} />
        ),
        (props: Props): React.Element<any> => (
          <Styles {...props} {...rest} styles={styles} />
        )
      ]}>
      {([{ bind, touched }, { styles }]) => {
        if (isFunction(tmpProps.children)) {
          if (tmpProps.image) {
            children = (
              <Image source={{ uri: tmpProps.image }} style={styles.image} />
            );
          } else if (tmpProps.name) {
            const firstChar = tmpProps.name.charAt(0);
            children = <Text style={styles.dash}>{firstChar}</Text>;
          } else {
            children = <Icon style={styles.dash} name={'dash'} />;
          }

          return tmpProps.children({ bind, touched, styles, children });
        } else {
          return null;
        }
      }}
    </Composer>
  );
}

export default Card;
