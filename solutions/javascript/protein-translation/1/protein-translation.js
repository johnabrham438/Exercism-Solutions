//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const codonToAmino = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
    'UUA': 'Leucine', 'UUG': 'Leucine',
    'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
    'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
    'UGU': 'Cysteine', 'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': null, 'UAG': null, 'UGA': null  // Stop codons
  };
export const translate = (rna) => {
  if(rna === undefined) return [];

  const result = [];

  for (let i = 0; i < rna.length; i+=3) {
    const codon = rna.slice(i,i + 3);
    if(codon.length < 3) throw new Error('Invalid codon');

    if(codonToAmino[codon] === null) return result;
    if (codonToAmino[codon] === undefined) throw new Error('Invalid codon');
    
    result.push(codonToAmino[codon]);
  }
  return result;
};
