//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (DNA1, DNA2) => {
  if(DNA1.length !== DNA2.length) throw new Error('strands must be of equal length');
  return [...DNA2].map((c,i) => c !== DNA1[i] ? i : null).filter(x => x !== null).length;
};
