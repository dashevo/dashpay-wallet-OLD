// @flow
// export const parseDashAddress = (str: string) => {
//   const regexp = new RegExp('(dash:)?([a-zA-Z\\d]+)(\\?amount=([\\d.]*))?');
//   if (!regexp.test(str)) {
//     return {};
//   }
//   const [,, address, , amountStr] = str.match(regexp);
//   const amount = parseFloat(amountStr) || undefined;
//   return {
//     address,
//     amount,
//   };
// };

//
// The solution above didn't work for me numbers, numbers from the address have been ignored.
// Maybe it is better to have the code generated from an object with a defined schema.
// I don't know if there is any standard for this.
//
// const str = JSON.stringify({
//   address: 'dash:XqHt831rFj5tr4PVjqEcJmh6VKvHP62QiM',
//   amount: 0,
// });
//

export const parseDashAddress = (str: string) => {
  const data = JSON.parse(str);

  const address = data.address.replace('dash:', '');
  const amount = parseFloat(data.amount) || undefined;

  return {
    address,
    amount,
  };
};
