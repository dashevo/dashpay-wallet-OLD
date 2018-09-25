const getBtcFiatRates = async () => {
  const response = await fetch('https://bitpay.com/api/rates/');
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json.filter(btcFiatRate => ['BTC', 'BCH', 'XAU', 'XAG'].indexOf(btcFiatRate.code) < 0);
  }
}

const getDashBtcRate = async () => {
  let response = await fetch('https://api.coinmarketcap.com/v1/ticker/dash/?convert=USD');
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const dashBtcRate = await response.json();
    return dashBtcRate[0].price_btc;
  }
}

const getRates = async () => {
  let btcFiatRates = await getBtcFiatRates();
  let dashBtcRate = await getDashBtcRate();
  return btcFiatRates.map(btcFiatRate => ({
    ...btcFiatRate,
    rate: btcFiatRate.rate * dashBtcRate
  }));
}

export default getRates;
