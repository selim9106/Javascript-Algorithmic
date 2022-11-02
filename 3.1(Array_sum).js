/*Write a program that will add all the elements of an array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 15
[100, 101, 102] => 303
*/


let nums = [1, 2, 3, 4, 5];
let othernums = [100, 101, 102];

// * la simple loop:
// let sum=0;
// for (let num of nums) {
//   sum += (parseInt(num));
// }
// console.log(sum);


addValues(othernums);

// ! la fonction qui peut s'appliquer à n'importe quelle array
function addValues(arr) {
  let sum=0;
  for (let item of arr) {
    sum += parseInt(item);
  }
  console.log(sum);
}





/* 1st Example ==> facile qd peu d'items à ajouter
let arr = [1, 2, 3, 4, 5];

arr.push(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

console.log(arr); 
*/

/*---------------------------------------------------------------- */
/*let arr = [100, 101, 102];*/

/*let arr = Array(200) ===> Array(n) où n définit le nombre d'items
  .fill(1)
  .map((n, i) => n + i); =====> n=valeur de l'item, i=index [0], [1, 2, 3, 4, 5]

console.log(array);*/

// let arr = Array(204)
//   .fill(1)
//   .map((element, index) => index + 100);
// /* soit une array de 202 items où chaque élément se voit ajouter la valeur de 100 (0+100; 1+100,...) */
// console.log(arr);

/* ==> https://stackoverflow.com/questions/3751520/how-to-generate-sequence-of-numbers-chars-in-javascript */
