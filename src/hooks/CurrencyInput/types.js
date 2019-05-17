// @flow
export type Props = {
  style: ?Object,
  value: ?string,
  i18n: {
    formatNumber: Function,
  },
  maximumFractionDigits: ?number,
  onChangeText: Function,
  getRef: ?Function,
};
