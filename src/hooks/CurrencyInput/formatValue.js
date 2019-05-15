// @flow
export default (i18n, value: ?string = '', maximumFractionDigits: ?number = 8) => {
  const formattedValue = i18n.formatNumber(value, {
    minimumIntegerDigits: 1,
    minimumFractionDigits: 0,
    maximumFractionDigits,
  });
  return formattedValue === '0' ? '' : formattedValue;
};
