/*Exercise 3.4
Write a program that will display the minimum and maximum elements of a given array. */

let arr = [8, 3, 2, 1, 15];

const min = Math.min(...arr);
const max = Math.max(...arr);
console.log("The lowest number is " + min + " and the uppest number is " + max);

/* https://stackoverflow.com/questions/8934877/obtain-smallest-value-from-array-in-javascript*/
