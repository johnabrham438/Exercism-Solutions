//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.scoresList = input;
  }

  get scores() {
    return this.scoresList;
  }

  get latest() {
    return this.scoresList[this.scoresList.length - 1];
  }

  get personalBest() {
    return Math.max(...this.scoresList);
  }

  get personalTopThree() {
    return [...this.scoresList].sort((a,b) => b - a).slice(0,3);
  }
}
