/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

export { ActivityIndicator as Spinner } from 'react-native';
export { default as AutoSubmit } from './Field/AutoSubmit';
export { default as Button } from './Button';
export { default as Field } from './Field/Validation';
export { default as Focus } from './Focus';
export { default as Form } from './Field/Form';
export { default as Icon } from './Icon';
export { default as Interval } from './Interval';

export { default as ProgressBar } from './ProgressBar';
export { default as SelectableList } from './SelectableList';
export { default as TabbedCard } from './TabbedCard';
export { default as ThemedButton } from './ThemedButton';
export { default as Touch } from './Touch';
export { Image } from 'react-native';
export { ScrollView } from 'react-native';
export { Text } from 'react-native';
export { TouchableHighlight as Touchable } from 'react-native';
export { TouchableOpacity } from 'react-native';
export { TouchableWithoutFeedback } from 'react-native';
export { View } from 'react-native';

// Deprecated
export * from './deprecated/Animation';
export { default as NavBar } from './deprecated/NavBar';
export { default as Box } from './deprecated/Box';
export { default as CopyAddressButton } from './deprecated/CopyAddressButton';
export { default as FormattedDate } from './deprecated/FormattedDate';
export { default as FormattedNumber } from './deprecated/FormattedNumber';
export { default as FormattedRelative } from './deprecated/FormattedRelative';
export { default as FormattedText } from './deprecated/FormattedText';
export { default as FormattedTime } from './deprecated/FormattedTime';
export { default as IconButton } from './deprecated/IconButton';
export { default as LabeledSwitch } from './deprecated/LabeledSwitch';
export { default as Logo } from './deprecated/Logo';
export { default as RecipientInput } from './deprecated/RecipientInput';
export { default as SharedElement } from './deprecated/SharedElement';
export { default as SwipeableRow } from './deprecated/SwipeableRow';
export { default as CurrencyInput } from './CurrencyInput';
export { default as Input } from './Input';
export { default as Avatar } from './deprecated/Avatar';

import * as React from 'react';
import Composer from 'utilities/compose';
import { View } from 'react-native';
import Styles from './Styles';

const containerStyles = theme => ({
  ['container']: {
    backgroundColor: theme.containerBackgroundColor,
    borderColor: theme.containerBorderColor,
    flex: 1
  }
});

export function Container(props) {
  return (
    <Composer
      components={[
        (props: Props): React.Element<any> => (
          <Styles {...props} styles={containerStyles} />
        )
      ]}>
      {([{ styles }]) => <View style={styles.container} {...props} />}
    </Composer>
  );
}
