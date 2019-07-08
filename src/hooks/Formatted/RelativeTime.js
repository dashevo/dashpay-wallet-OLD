import React from 'react';
import { useIntl } from 'react-intl';

function FormattedDashAmount({ value }) {
  const { formatRelativeTime } = useIntl();
  return formatRelativeTime(-20);
}

export default FormattedDashAmount;
