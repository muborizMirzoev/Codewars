// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
const accum = ([...s]) => {
  return s.map((item, index) => {
    let result = '';
    for(let i = -1; i < index; i += 1 ) {
      result += item;
    }
    return result[0].toUpperCase() + result.slice(1).toLocaleLowerCase();
  }).join('-')
};