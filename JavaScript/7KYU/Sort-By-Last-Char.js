// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


function last(x) {
  return x.split(' ').sort((a, b) => {
    if (a[a.length - 1] > b[b.length - 1]) return 1
    if (a[a.length - 1] < b[b.length - 1]) return -1
    return 0
  })
}

last('man i need a taxi up to ubud');