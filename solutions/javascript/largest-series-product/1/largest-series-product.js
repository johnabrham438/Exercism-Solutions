//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input,span) => {
  
  if(input.length < span || input === null) throw new Error('span must not exceed string length');
  if(/[a-z]/i.test(input)) throw new Error('digits input must only contain digits');
  if(span < 0) throw new Error('span must not be negative');
  if(span === 0) span = 1;

  let maxProduct = 0;
  
  for (let i = 0; i <= input.length - span; i++) {
    const series = input.slice(i,i+span).split("").map(Number);
    const currentProduct = series.reduce((acc,cur) => acc * cur, 1);

    if(currentProduct > maxProduct) maxProduct = currentProduct;
    
  }
  return maxProduct;
};
