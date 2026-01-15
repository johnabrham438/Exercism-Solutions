//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (number) => {
  if(/[a-z]/i.test(number)) throw new Error('Letters not permitted');
  if(/[^0-9\s().+-]/.test(number)) throw new Error('Punctuations not permitted');

  const digits = number.replace(/\D/g, '');
  
  if(digits.length > 11) throw new Error('Must not be greater than 11 digits');
  if(digits.length === 11){
    if(!digits.startsWith('1')) throw new Error('11 digits must start with 1');
  }

  const cleaned = digits.length === 11 ? digits.slice(1) : digits;

  if(cleaned.length < 10) throw new Error('Must not be fewer than 10 digits');
  if(cleaned[0] === '0') throw new Error('Area code cannot start with zero');
  if(cleaned[0] === '1') throw new Error('Area code cannot start with one');
  if(cleaned[3] === '0') throw new Error('Exchange code cannot start with zero');
  if(cleaned[3] === '1') throw new Error('Exchange code cannot start with one');

  return cleaned;
  
  
 };
