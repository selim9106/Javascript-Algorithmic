/*By reusing the function rand10() created in last exercise, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.*/


let numOfNums = prompt('enter how many random numbers you want to generate');


// ! as it is an arrow function, it has to be declared BEFORE being used/called
let multiRand = (n) => Array.from({length:n}, () => rand10());

console.log(multiRand(numOfNums));

function rand10() {
  return parseInt(Math.floor(Math.random() * 10) + 1);
}


// function multiRand() {
//     let n = rand10();
//     return Array.from({length: n}, () => function(rand10()));
// }

// let arr = [];
// console.log(arr)

/*return Array.from({ length:  }, () => Math.floor(Math.random() * 10) + 1);*/

