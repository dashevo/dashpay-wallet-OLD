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
    value = this.props.i18n.formatNumber(value, {
      minimumIntegerDigits: 1,
      minimumFractionDigits: 0
    });
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

export default CurrencyInput;
