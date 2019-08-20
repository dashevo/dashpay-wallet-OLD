/**
 * Copyright (c) 2014-present, Fiat Core Group, Inc.
 */

// External dependencies
import React, {
  useMemo, useState, useEffect, useCallback,
} from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useService } from '@xstate/react';
import type { Interpreter } from 'xstate';

// Internal dependencies
import usePortal from 'hooks/Portal/usePortal';
import FiatValue from 'hooks/Formatted/FiatValue';
import Picker from 'hooks/Picker';
import Text from 'hooks/Typography/Text';
import Icon from 'hooks/Icon';
import useStyles from './useStyles';

type Props = {
  service: Interpreter,
};

function FiatField({ service }: Props) {
  const [state, send] = useService(service);
  const { fiat, code } = state.context.values;

  const stylesProps = useMemo(
    () => ({
      active: state.matches('editing.fiat'),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.value],
  );

  const [selected, setSelected] = useState(code);
  const styles = useStyles(stylesProps);

  const handlePress = useCallback(() => {
    send({ type: 'FIAT.FOCUSED' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    send({ type: 'CURRENCY.CHANGED', code: selected });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const [showPortal, hidePortal] = usePortal(
    () => <Picker selected={selected} onSelect={setSelected} onHidden={hidePortal} />,
    [selected],
  );

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.left} onPress={showPortal}>
        <Text style={styles.name}>{code}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.body} onPress={handlePress}>
        <View style={styles.square}>
          <Icon style={styles.icon} name={code.toLowerCase()} />
        </View>
        <Text style={styles.value}>
          <FiatValue value={fiat} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default FiatField;
