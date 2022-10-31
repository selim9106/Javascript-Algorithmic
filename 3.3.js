// todo: Write a program that will create a duplicate of a given array

//  Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.) */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ! Using spread operator:

// let copynumbers = [...numbers];
// console.log(copynumbers);

// * program function:
// function copyContent(arr) {
//   let arraycopy = [...arr];
//   return arraycopy
// }

// console.log(copyContent(numbers));


// ! with push():

let copyAar = [];
// copyAar.push(...numbers);
// console.log(copyAar);
console.log(copyContent(numbers,copyAar));

function copyContent(arr, copy) {
  copy.push(...arr);
  return [...copy];
  // ! this last line is important to return an array
}








// for (let i = 0; i < numbers.length; i++) {
//   copyAar.push(numbers[i]);

  // info ===> puisque la nouvelle array est initialisée à 0, il faut pusher chaque item de la valeur de l'item (=[i]) de l'array originale (numbers)

//   console.log(copyAar);
// }

// //Ressources: 
// // https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// // https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
