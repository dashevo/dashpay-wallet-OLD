// TODO: needs to be removed
// Please use hooks/Avatar as a default avatar component
/* eslint-disable */
import React from 'react';
import Composer from 'utilities/compose';
import { Image } from 'react-native';
import { isFunction } from 'lodash';
import Styles from 'components/Styles';
import Touch from 'components/Touch';
import Text from 'components/Text';
import Icon from 'components/Icon';
import styles from './styles';
import type { Props } from './types';

const Avatar = (props: Props) => {
  let { children } = props;
  const { rest } = props;
  return (
    <Composer
      components={[
        (props: Props): React.Element<any> => (
          <Touch {...props} {...rest} onPress={props.onPress} />
        ),
        (props: Props): React.Element<any> => (
          <Styles {...props} {...rest} styles={styles} />
        ),
      ]}
    >
      {([{ bind, touched }, { styles }]) => {
        if (isFunction(props.children)) {
          if (props.avatarUrl) {
            children = (
              <Image source={{ uri: props.avatarUrl }} style={styles.image} />
            );
          } else if (props.name) {
            const firstChar = props.name.charAt(0);
            children = <Text style={styles.dash}>{firstChar}</Text>;
          } else {
            children = <Icon style={styles.dash} name="dash" />;
          }

          return props.children({
            bind, touched, styles, children,
          });
        }
        return null;
      }}
    </Composer>
  );
}

export default Avatar;
