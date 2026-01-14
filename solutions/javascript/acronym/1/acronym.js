//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
 return str.match(/[A-Za-z']+/g).map(w => w.charAt(0)).join("").toUpperCase();

};
