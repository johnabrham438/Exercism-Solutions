//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text) => {
  return text.replace(/(.)\1+/g, (match, char) => match.length + char);
};

export const decode = (text) => {
  return text.replace(/(\d+)(\D)/g, (match, count , char) => char.repeat(parseInt(count)));
};
