/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useMemo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useService } from '@xstate/react';
import type { Interpreter } from 'xstate';

// Internal dependencies
import DashValue from 'hooks/Formatted/DashValue';
import Text from 'hooks/Typography/Text';
import Icon from 'hooks/Icon';
import useStyles from './useStyles';

type Props = {
  service: Interpreter,
};

function DashField({ service }: Props) {
  const [state, send] = useService(service);
  const { dash } = state.context.values;

  const stylesProps = useMemo(
    () => ({
      active: state.matches('editing.dash'),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.value],
  );

  const styles = useStyles(stylesProps);

  const handlePress = useCallback(() => {
    send('DASH.FOCUSED');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.name}>DASH</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.square}>
            <Icon style={styles.icon} name="dash" />
          </View>
          <Text style={styles.value}>
            <DashValue value={dash} />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default DashField;
