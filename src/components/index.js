/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

export { ActivityIndicator as Spinner } from 'react-native';
export { default as AutoSubmit } from './Field/AutoSubmit';
export { default as Avatar } from './Avatar';
export { default as Button } from './Button';
export { default as Field } from './Field/Validation';
export { default as Focus } from './Focus';
export { default as Form } from './Field/Form';

export { default as Icon } from './Icon';
export { default as Interval } from './Interval';
export { default as NavBar } from './NavBar';
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



/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { TextInput } from 'react-native';
import { injectIntl } from 'react-intl';
import { isNaN } from 'lodash';

class CurrencyInput extends React.Component<any> {
  constructor(props) {
    super(props);

    this.state = {
      decimal: '.'
    };
  }

  componentDidMount() {
    this.formatvalue();
  }

  componentDidUpdate(prevProps) {
    this.formatvalue();
  }

  formatvalue() {
    let value = this.props.value || '';
    const { currency } = this.props;
    value = this.props.i18n.formatNumber(
      value,
      currency === 'DASH'
        ? {
            minimumIntegerDigits: 1,
            minimumFractionDigits: 0
          }
        : {
            minimumIntegerDigits: 1,
            minimumFractionDigits: 0,
            style: 'currency',
            currency
          }
    );
    const text = value === '0' ? '' : value;
    this.input && this.input.setNativeProps({ text });
  }

  handleChangeText = text => {
    let value = text || '';
    let { decimal } = this.state;

    if (typeof value === 'number') return;

    const regex = new RegExp('[^0-9-' + decimal + ']', ['g']);

    let unformatted = ('' + value)
      .replace(/\((?=\d+)(.*)\)/, '-$1')
      .replace(regex, '')
      .replace(decimal, '.');

    if (unformatted.endsWith(decimal)) return;

    unformatted = parseFloat(unformatted);
    unformatted = !isNaN(unformatted) ? unformatted : '';

    this.props.onChangeText(unformatted);
  };

  render(): React.Element<any> {
    return (
      <TextInput
        {...this.props}
        keyboardType={'numeric'}
        style={this.props.style}
        value={undefined}
        placeholder={'0.00'}
        multiline={false}
        onChangeText={this.handleChangeText}
        ref={ref => {
          this.input = ref;

          if (this.props.getRef) {
            this.props.getRef(ref);
          }
        }}
      />
    );
  }
}

CurrencyInput = injectIntl(CurrencyInput, {
  intlPropName: 'i18n'
});

export function Input(props) {
  return (
    <TextInput
      {...props}
      ref={ref => {
        if (props.getRef) {
          props.getRef(ref);
        }
      }}
    />
  );
}

export { CurrencyInput };
