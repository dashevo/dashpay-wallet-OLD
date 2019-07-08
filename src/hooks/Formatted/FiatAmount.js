import React from 'react';
import { useIntl } from 'react-intl';

function FormattedDashAmount({ value }) {
  const { formatNumber } = useIntl();
  return formatNumber(value, {});
}

export default FormattedDashAmount;
