// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"
let isAnagram = function(test, original) {
  let test1 = test.toLowerCase();
  let original1 = original.toLowerCase();
  for(let i = 0; i < test1.length; i++) {
    if(test1.length != original1.length) return false
    if (original1.includes(test1[i]) && test1.includes(original1[i]) ) return true
    else return false
  }
};