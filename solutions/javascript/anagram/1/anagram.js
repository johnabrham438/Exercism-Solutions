//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, anagrams) => {
  
    const originalWord = word.replace(/[^\p{L}]/gu, '').toLowerCase();
    const sortedWord = sortString(word.replace(/[^\p{L}]/gu, '').toLowerCase());
  
    return anagrams.filter( anagram => {
      const originalAnagram = anagram.replace(/[^\p{L}]/gu, '').toLowerCase();
      const sortedAnagram = sortString(anagram.replace(/[^\p{L}]/gu, '').toLowerCase());
      
      return sortedAnagram === sortedWord && originalAnagram !== originalWord;
    });
  
};

function sortString(string) {
        return string.split('').sort().join('');
}
