// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const sanitize = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
const cleanSum = str => str.replace(/[^\w]/g, '').toLowerCase().split('').reduce((a, b) => a + b.charCodeAt(0), 0);

function anagrams(stringA, stringB) {
  // return sanitize(stringA) === sanitize(stringB);
  return cleanSum(stringA) === cleanSum(stringB);
}

module.exports = anagrams;
