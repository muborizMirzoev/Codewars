// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// пока решил без регулярки, позже попробую с ними
function incrementString(strng) {
  const allNumberInStrng = [...strng].filter((item) => !isNaN(item)).join('');
  const allCharInStrng = [...strng].filter((item) => isNaN(item)).join('');

  if (allCharInStrng.length === strng.length) {
    return allCharInStrng + 1;
  } else {
    const num = (Number(allNumberInStrng) + 1).toString();

    if (num.length >= allNumberInStrng.length) {
      return allCharInStrng + num
    } else {
      const counZero = allNumberInStrng.length - num.length;
      return allCharInStrng + '0'.repeat(counZero) + num
    }
  }
}