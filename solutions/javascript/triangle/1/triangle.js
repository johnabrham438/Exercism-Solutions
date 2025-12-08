//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    const [a,b,c] = sides;
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
    
  }

  get isEquilateral() {
    return this.sideA === this.sideB && this.sideB === this.sideC && this.sideB !== 0;
  }

  get isIsosceles() {
   if (this.sideA + this.sideB <= this.sideC || this.sideA + this.sideC <= this.sideB || this.sideB + this.sideC <= this.sideA ) return false;
    else if( this.sideA ===  this.sideB || this.sideB === this.sideC || this.sideA === this.sideC) return true;
   else{
      return false;
    }
  }

  get isScalene() {
      if (this.sideA + this.sideB <= this.sideC ||this.sideA + this.sideC <= this.sideB ||this.sideB + this.sideC <= this.sideA) return false;

  return this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideA !== this.sideC;
}
}