const caesarcipher = require('./caesarcipher');

test('test A', () => {
  expect(caesarcipher('HELLO WORLD!')).toBe('URYYB JBEYQ!');
});


test('test A', () => {
  expect(caesarcipher('ZJKZHJH')).toBe('MWXMUWU');
});


test('test B', () => {
  expect(caesarcipher('DO YOU WANNA HAVE TEA?')).toBe('QB LBH JNAAN UNIR GRN?');

});

test('test C', () => {
  expect(caesarcipher('SOUTH AFRICA!')).toBe('FBHGU NSEVPN!');

});