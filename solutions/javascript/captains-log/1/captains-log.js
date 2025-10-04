// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
   const firstDigit = Math.floor(Math.random() * 9) + 1;
   const otherDigits = String(Math.floor(Math.random() * 1000)).padStart(3, '0');

   return `NCC-${firstDigit}${otherDigits}`;
  
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const min = 41000.0;
  const max = 42000.0 ;
 
 return Math.random() * (max - min) + min;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const letters = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  const randomIndex = Math.floor(Math.random() * letters.length);

  return letters[randomIndex];
  
}
