//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (str) => {
  const words = str.toLowerCase().match(/[a-zA-Z0-9]+(?:'[a-zA-Z0-9]+)*/g);
  let  counts = {};
  words.forEach(word => counts[word] = (counts[word]??0)+1);
  return counts;
};
