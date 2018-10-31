/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

import { Address } from '@dashevo/wallet-lib';

class RecipientInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { value } = props;
    this.state = { isValid: this.validate(value), value: value };
    this.onChangeRecipient = this.onChangeRecipient.bind(this);
  }

  validate(input) {
    return Address.getValidationError(input, 'testnet') === undefined;
  }

  onChangeRecipient(input) {
    const isValid = this.validate(input);
    const { onChangeRecipient } = this.props;
    onChangeRecipient(isValid ? input : undefined);
    this.setState({ isValid });
  }

  render(): ReactElement {
    const { isValid, value } = this.state;
    let style = [ styles.input ];
    if (!isValid) {
      style.push(styles.error);
    }
    return (
      <TextInput style={style}
                 value={value}
                 onChangeText={this.onChangeRecipient}
                 placeholder={"Enter a dash address or a username"} />
    );
  }
}

export default RecipientInput;
