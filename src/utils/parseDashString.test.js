import parseDashString from './parseDashString';

test('parseDashString', () => {
  expect(parseDashString('test')).toEqual({
    address: 'test',
  });

  expect(parseDashString('test?amount=123.456')).toEqual({
    address: 'test',
    amount: 123.456,
  });

  expect(parseDashString('dash:test?amount=123.456')).toEqual({
    address: 'test',
    amount: 123.456,
  });

  expect(parseDashString('dash:test?amount=123')).toEqual({
    address: 'test',
    amount: 123,
  });

  expect(parseDashString('dash:test?amount=')).toEqual({
    address: 'test',
  });

  expect(parseDashString('dash:test?amount=test')).toEqual({
    address: 'test',
  });

  expect(parseDashString('dash:test?amount=123,456')).toEqual({
    address: 'test',
    amount: 123.456,
  });
});
