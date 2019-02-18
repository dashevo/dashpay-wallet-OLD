/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { Field } from 'components';
import { Input } from 'components';
import defaultProps from './defaults';
import type { Props } from './types';
import styles from './styles';

function QueryField(props: Props): React.Element<any> {
  return (
    <Field {...props}>
      {({ input }) => <Input {...input} style={styles.input} />}
    </Field>
  );
}

QueryField.defaultProps = defaultProps;

export default QueryField;
