//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (abilityScores) => {
  
  if (abilityScores < 3 ) {throw new Error("Ability scores must be at least 3")}
  if (abilityScores > 18 ) {throw new Error("Ability scores can be at most 18")}

  return Math.floor((abilityScores - 10)/2);
};

export class Character {
  constructor() {
    this.ability = Character.rollAbility(); // calculate once
  }
  static rollAbility() {
    const rolled = [];

    // roll 4 dice
    for (let i = 0; i < 4; i++) {
      rolled.push(1 + Math.floor(Math.random() * 6));
    }

    // remove the lowest
    const min = Math.min(...rolled);
    const index = rolled.indexOf(min);
    rolled.splice(index, 1);

    // sum remaining 3 dice
    const result = rolled.reduce((acc, curr) => acc + curr, 0);

    return result; // always between 3 and 18
  }

  get strength() {
    const strength = this.ability;
    return strength;
  }

  get dexterity() {
    const dexterity = this.ability;
    return dexterity;
  }

  get constitution() {
      const constitution =  this.ability;
      return constitution;
  }

  get intelligence() {
     const intelligence =  this.ability;
      return intelligence;
  }

  get wisdom() {
   const wisdom =  this.ability;
   return  wisdom;
  }

  get charisma() {
   const charisma =  this.ability;
   return  charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
