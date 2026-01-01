//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (scores) => {
  const result = {};
  for (const key in scores) {
    for(const value of scores[key]){
      result[value.toLowerCase()] = Number(key);
    }
    
  }
  return result;
};
