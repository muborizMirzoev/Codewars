// https://www.codewars.com/kata/583710f6b468c07ba1000017/train/javascript

// You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

// a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

// b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

// Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.

function proofread(str) {
  const array = str.toLowerCase().split(' ');
  return array.map((item) => item.replace('ie', 'ei'))
    .map((item, index) => {
      if (index === 0) {
        return item[0].toUpperCase() + item.slice(1)
      }
      if (array[index - 1].includes('.') && index !== array.length - 1) {
        return item[0].toUpperCase() + item.slice(1)
      }
      return item;
    }).join(' ');
}

proofread('ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.')