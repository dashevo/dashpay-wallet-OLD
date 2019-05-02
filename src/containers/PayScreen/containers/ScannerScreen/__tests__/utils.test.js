// @flow
import { parseDashAddress } from '../utils';

describe('parseDashAddress', () => {
  it('should parse dash address',
    () => expect(parseDashAddress('dash:dashaddress')).toEqual({ address: 'dashaddress', amount: undefined }));

  it('should parse dash address and amount',
    () => expect(parseDashAddress('dash:dashaddress?amount=123')).toEqual({ address: 'dashaddress', amount: 123 }));

  it('should parse dash address and float amount',
    () => expect(parseDashAddress('dash:dashaddress?amount=123.456')).toEqual({ address: 'dashaddress', amount: 123.456 }));
});
