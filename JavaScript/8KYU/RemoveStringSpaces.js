// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  let str = "";
  for(let i = 0; i < x.length; i++) {
    if (x[i] == " ") delete x[i]
    else str += x[i];
  }
  return str;
}