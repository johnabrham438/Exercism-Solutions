//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
} 


export class DiffieHellman {
  constructor(p, g) {
    if (p <= 1 || g <= 1) {
      throw new Error('Prime and generator must be greater than 1');
    }
    if (isPrime(p) === false || isPrime(g) === false) {
      throw new Error('p and g must be prime numbers');
    }

    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey > 1 && privateKey < this.p) {
      return this.g**privateKey % this.p;
    }
    throw new Error("privatekey must be greater than 1 and less than p");
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey**myPrivateKey % this.p;
  }

 static  getPrivateKey(p) {
    return 2 + Math.floor(Math.random() * (p - 2));
  }
}
