//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const getAliquotSum = (num) => {
  const factors = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors.reduce((acc,currVal) => acc + currVal, 0);
}

export const classify = (num) => {
  if(num <= 0) throw new Error('Classification is only possible for natural numbers.');
  if(num === getAliquotSum(num)) return 'perfect';
  if(num < getAliquotSum(num)) return 'abundant';
  if(num > getAliquotSum(num)) return 'deficient';
};
