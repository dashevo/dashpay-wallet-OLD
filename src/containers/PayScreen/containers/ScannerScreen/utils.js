// @flow
export const parseDashAddress = (str: string) => {
  const regexp = new RegExp('(dash:)?([a-zA-Z\\d]+)(\\?amount=([\\d.]*))?');
  if (!regexp.test(str)) {
    return {};
  }
  const [,, address, , amountStr] = str.match(regexp);
  const amount = parseFloat(amountStr) || undefined;
  return {
    address,
    amount,
  };
};
