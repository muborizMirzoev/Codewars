// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
  const number = '0123456789';
  return [...str].filter((item) => number.includes(item) ? false : true)
                 .map((item, index) => (item === item.toLowerCase() || index === 0) ?  item : `-${item}`).join('').toLocaleLowerCase()

}