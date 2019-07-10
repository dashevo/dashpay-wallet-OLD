/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useMemo } from 'react';
import moment from 'moment';

// Internal dependencies
import Text from 'hooks/Typography/Text';

function FormattedRelativeTime({ value }) {
  const formattedRelativeTime = useMemo(
    () => moment(value).fromNow(),
    [value]
  );
  return <Text>{formattedRelativeTime}</Text>;
}

export default FormattedRelativeTime;
