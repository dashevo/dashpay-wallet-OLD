// @flow
const parseDashString = (input: string) => {
  const match = input.match(/^(dash:)?([a-zA-Z0-9]+)((\?amount=(\d+([.,]\d+)*))*)/);
  if (!match) return { address: input };
  const [,, address,,, amountString] = match;
  let amount;
  if (amountString) {
    amount = parseFloat(amountString.replace(',', '.')) || undefined;
  }
  return { address, amount };
};

export default parseDashString;
