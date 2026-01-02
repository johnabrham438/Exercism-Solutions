//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(Num) {
    this.Num = Num;
  }

  get sumOfSquares() {
    let result = 0;
    
    for (let i = 0; i < this.Num + 1; i++) {
      result += i ** 2;
    }
    return result;
  }

  get squareOfSum() {
   let result = 0;
    
    for (let i = 0; i < this.Num + 1; i++) {
      result += i;
    }
    return result ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
