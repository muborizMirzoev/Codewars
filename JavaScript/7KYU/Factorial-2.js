// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

// Yor task is to write function factorial



function factorial(n){
  return (n === 0) ? 1 : n * factorial(n - 1)
}