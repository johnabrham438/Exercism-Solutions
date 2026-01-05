//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return letters.every(letter => cleaned.includes(letter));
};
