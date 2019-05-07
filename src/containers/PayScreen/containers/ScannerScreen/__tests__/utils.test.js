// @flow
import { parseDashAddress } from '../utils';

describe('parseDashAddress', () => {
  const address = 'dashaddress';

  it('should parse dash address without prefix',
    () => expect(parseDashAddress(address)).toEqual({ address }));

  it('should parse dash address with prefix',
    () => expect(parseDashAddress(`dash:${address}`)).toEqual({ address, amount: undefined }));

  it('should parse dash address and amount',
    () => expect(parseDashAddress(`dash:${address}?amount=123`)).toEqual({ address: 'dashaddress', amount: 123 }));

  it('should parse dash address and float amount',
    () => expect(parseDashAddress(`dash:${address}?amount=123.456`)).toEqual({ address: 'dashaddress', amount: 123.456 }));
});
