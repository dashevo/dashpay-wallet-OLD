/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { Form } from 'components';
import { View } from 'components';
import { AutoSubmit } from 'components';
import { QueryField } from './components';
import { MoreButton } from './components';
import defaultProps from './defaults';
import type { Props } from './types';
import styles from './styles';

function SearchBox(props: Props): React.Element<any> {
  return (
    <Form {...props} ref={props.searchBox}>
      <AutoSubmit />
      <View style={styles.row}>
        <QueryField />
        <MoreButton />
      </View>
    </Form>
  );
}

SearchBox.defaultProps = defaultProps;

export default SearchBox;
