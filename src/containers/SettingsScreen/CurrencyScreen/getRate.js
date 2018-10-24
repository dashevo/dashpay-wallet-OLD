/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

 const getRate = async currencyCode => {
  const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=${currencyCode}`);
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json[currencyCode];
  }
};

export default getRate;
