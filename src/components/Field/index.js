/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import React from 'react';
import { compose } from 'utilities';
import Styles from '../Styles';
import Focus from '../Focus';
import defaultProps from './defaults';
import styles from './styles';
import type { Props } from './types';

const Composed = compose([
  (props: Props): React.Element<any> => <Styles {...props} />,
  (props: Props): React.Element<any> => <Focus {...props} />
]);

function Field(props: Props): React.Element<any> {
  return <Composed styles={styles} {...props} />;
}

Field.defaultProps = defaultProps;

export default Field;
