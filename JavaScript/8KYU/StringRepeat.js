// Write a function called repeat_str which repeats the given string src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let rep = "";
  for (let i = 0; i <n; i++) {
    rep += s
  }
  return rep;
}