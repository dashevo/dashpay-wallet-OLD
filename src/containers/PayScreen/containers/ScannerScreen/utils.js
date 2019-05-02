// @flow
export const parseDashAddress = (str: string) => {
  const [, address, , amountStr] = str.match(/dash:([a-zA-Z0-9]+)(\?amount=([\d.]*))?/);
  const amount = parseFloat(amountStr) || undefined;
  return {
    address,
    amount,
  };
};
