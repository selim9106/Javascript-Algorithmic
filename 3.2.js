/*Exercise 3.2
Write a program that will calculate the average value of a given array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 3
[100, 101, 102] => 101 */

let nums = [1, 2, 3, 4, 5];
let bignums = [100, 101, 102];



function averageValue(arr) {
  let divider = arr.length;
  let average = addValues(arr)/divider;
  return average;
}


function addValues(arr) {
  let sum = 0;
  for (let value of arr) {
    sum+=parseInt(value);
  }
  return sum;
}


console.log(averageValue(bignums));


// for (var n of arr) {
//   sum += n;
// }

// let average = sum / arr.length;
// console.log(average);

/*https://www.codingem.com/javascript-calculate-average/ ==> 3 façons différentes*/
