const Stack = require('./stack');

/**
 * @desc 二进制转换
 * @param {Int} decNumber 
 * @return {String} binaryStr 
 */
function divideBy2(decNumber) {
  let remStack = new Stack(),
    rem,
    binaryStr = '';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  };
  while (!remStack.isEmpty()) {
    binaryStr += Number(remStack.pop()).toString();
  };
  return binaryStr;
}

// console.log(divideBy2(10));
// console.log(divideBy2(233));

/**
 * @desc 多进制转换
 * @param {Int} decNumber
 * @param {Int} base
 * @return {String} baseStr
 */
function baseConverter(decNumber, base) {
  let remStack = new Stack(),
    rem,
    baseStr = '',
    digits = '0123456789ABCDEF';
  while ( decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    baseStr += digits[remStack.pop()];
  }
  return baseStr;
}
console.log('2进制---' + baseConverter(100345, 2))
console.log('8进制---' + baseConverter(100345, 8))
console.log('16进制---' + baseConverter(100345, 16))



