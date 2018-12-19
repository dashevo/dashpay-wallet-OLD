/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
// 100% donne
export { default as Button } from './Button';
export { default as Focus } from './Focus';
export { default as Icon } from './Icon';
export { default as Interval } from './Interval';
export { default as Touch } from './Touch';

// TODO: "render props" + global variables for styles
export { default as Avatar } from './Avatar';
export { default as Logo } from './Logo';
export { default as ProgressBar } from './ProgressBar';
export { default as SharedElement } from './SharedElement';
export { default as ThemedButton } from './ThemedButton';
export { default as LabeledSwitch } from './LabeledSwitch';
export { default as SelectableList } from './SelectableList';
export { default as IconButton } from './IconButton';
export { default as RecipientInput } from './RecipientInput';
export { default as CopyAddressButton } from './CopyAddressButton';
export { default as NavBar } from './NavBar';
export { default as SwipeableRow } from './SwipeableRow';
export { default as FormattedText } from './FormattedText';
export { default as FormattedDate } from './FormattedDate';
export { default as FormattedTime } from './FormattedTime';
export { default as FormattedRelative } from './FormattedRelative';
export { default as FormattedNumber } from './FormattedNumber';
export { ActivityIndicator as Spinner } from 'react-native';
export * from './Animation';

export { default as Form } from './Field/Form';
export { default as Field } from './Field/Validation';
export { TouchableHighlight as Touchable } from 'react-native';
export { View } from 'react-native';
export { Text } from 'react-native';
export { Image } from 'react-native';
export { ScrollView } from 'react-native';
export { TouchableWithoutFeedback } from 'react-native';

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
