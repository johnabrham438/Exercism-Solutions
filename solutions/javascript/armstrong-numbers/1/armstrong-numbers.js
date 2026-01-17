//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const digitCount = num.toString().length;
  const digits = num.toString().split('').map(Number);
  const sum = digits.map(digits => BigInt(digits)**BigInt(digitCount)).reduce((acc,currVal) => acc + currVal);
  return sum === BigInt(num);
};
