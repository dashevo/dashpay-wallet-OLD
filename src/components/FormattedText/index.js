/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';

type ReactElement = any;
type Props = any;

class FormattedText extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.id = String(props.children);
  }

  renderChildren(formattedText: String): ReactElement {
    return <Text>{formattedText}</Text>;
  }

  render(): ReactElement {
    const { style, ...props } = this.props;
    return (
      <FormattedMessage {...props} id={this.id}>
        {this.renderChildren}
      </FormattedMessage>
    );
  }
}

export default FormattedText;
